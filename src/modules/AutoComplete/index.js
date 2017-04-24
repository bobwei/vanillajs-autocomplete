/* eslint-disable max-len */
import createElement from 'modules/dom/createElement';
import insertBefore from 'modules/dom/insertBefore';
import replace from 'modules/dom/replace';
import toggleDisplay from 'modules/dom/toggleDisplay';
import createStore from 'modules/stores/createStore';
import persistStore from 'modules/persistences/persistStore';
import watch from 'modules/utils/watch';

import Container from './components/Container';
import OptionList from './components/OptionList';
import Option from './components/Option';
import createOnFocus from './eventHandlers/input/createOnFocus';
import createOnBlur from './eventHandlers/input/createOnBlur';
import createOnInput from './eventHandlers/input/createOnInput';
import createOnKeyDown from './eventHandlers/input/createOnKeyDown';
import createOnValueChange from './eventHandlers/input/createOnValueChange';
import createOnSelect from './eventHandlers/option/createOnSelect';
import createOnFocusIndexChange from './eventHandlers/option/createOnFocusIndexChange';
import createOnHover from './eventHandlers/option/createOnHover';
import createOnRemove from './eventHandlers/option/createOnRemove';
import sortData from './utils/sortData';

const createAutoComplete = ({
  el,
  data,
  getPersistKey,
}) => {
  /*
    Create store with initial state for each AutoComplete instance.
  */
  const store = createStore({
    data,
    isOptionListHidden: true,
    focusIndex: -1,
    value: undefined,
    history: [],
  });
  /*
    Store API
  */
  const { getState, setState, subscribe } = store;
  /*
    Cache DOM node references for further access
  */
  const refs = {};

  refs.$input = el;
  /*
    Create event handlers and assign to input
  */
  Object.assign(refs.$input, {
    oninput: createOnInput({ data, getState, setState }),
    onfocus: createOnFocus({ setState }),
    onblur: createOnBlur({ setState }),
    onkeydown: createOnKeyDown({ setState, getState }),
  });

  /*
    Create event handlers for Option component
  */
  const onselect = createOnSelect({ setState });
  const onhover = createOnHover({ setState });
  const onremove = createOnRemove({ getState, setState });

  refs.$optionList = createElement(OptionList, { data: getState().data, history: getState().history, Option, onselect, onhover, onremove });
  refs.$container = createElement(Container, { el, className: 'auto-complete-container' }, refs.$optionList);
  toggleDisplay(refs.$container)(getState().isOptionListHidden);

  /*
    Subscribe to data change and rebuild the list if needed
  */
  subscribe(watch(state => state.data, () => {
    refs.$optionList = replace(
      createElement(OptionList, { data: getState().data, history: getState().history, Option, onselect, onhover, onremove }),
      refs.$optionList,
    );
  }));

  /*
    Subscribe to isOptionListHidden change and toggle display UI
  */
  subscribe(watch(state => state.isOptionListHidden, toggleDisplay(refs.$container)));

  /*
    Subscribe to focusIndex change and update classNames to Option
  */
  subscribe(watch(state => state.focusIndex, createOnFocusIndexChange({
    getContainer: () => refs.$container,
    getEl: () => refs.$optionList,
  })));

  /*
    Subscribe to value change and update input value
  */
  subscribe(watch(state => state.value, createOnValueChange({ getEl: () => refs.$input })));

  /*
    Subscribe to value change and push value to history
  */
  subscribe(watch(state => state.value, (value) => {
    setState({
      history: [...(new Set([value, ...getState().history]))],
    });
  }));

  /*
    Subscribe to history change and update data
  */
  subscribe(watch(state => state.history, (history) => {
    setState({
      data: sortData({ history }, data),
    });
  }));

  if (data.length > 0) {
    setState({ focusIndex: 0 });
  }

  /*
    Persist store by subscribing to store change and persist to storage for every change
  */
  persistStore(store, { persistProp: ['history'], getPersistKey });

  insertBefore(refs.$container, refs.$input);

  /*
    Export instance variables so that we can do further access
  */
  return {
    ...store,
    refs,
  };
};

export default createAutoComplete;
