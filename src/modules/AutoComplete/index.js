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
import sortData from './utils/sortData';

const createAutoComplete = ({
  el,
  data,
  getPersistKey,
}) => {
  const store = createStore({
    data,
    isOptionListHidden: true,
    focusIndex: -1,
    value: undefined,
    history: [],
  });
  const { getState, setState, subscribe } = store;
  const refs = {};

  refs.$input = el;
  /* input event handlers */
  Object.assign(refs.$input, {
    oninput: createOnInput({ data, setState }),
    onfocus: createOnFocus({ setState }),
    onblur: createOnBlur({ setState }),
    onkeydown: createOnKeyDown({ setState, getState }),
  });

  /* option event handlers */
  const onselect = createOnSelect({ setState });
  const onhover = createOnHover({ setState });

  refs.$optionList = createElement(OptionList, { data: getState().data, history: getState().history, Option, onselect, onhover });
  refs.$container = createElement(Container, { el, className: 'auto-complete-container' }, refs.$optionList);
  toggleDisplay(refs.$container)(getState().isOptionListHidden);

  /* handle data change by replacing with a new $optionList */
  subscribe(watch(state => state.data, () => {
    refs.$optionList = replace(
      createElement(OptionList, { data: getState().data, history: getState().history, Option, onselect, onhover }),
      refs.$optionList,
    );
  }));

  /* handle isOptionListHidden change */
  subscribe(watch(state => state.isOptionListHidden, toggleDisplay(refs.$container)));

  /* handle focusIndex change */
  subscribe(watch(state => state.focusIndex, createOnFocusIndexChange({
    getContainer: () => refs.$container,
    getEl: () => refs.$optionList,
  })));

  /* handle value change */
  subscribe(watch(state => state.value, createOnValueChange({ getEl: () => refs.$input })));

  /* when value selected, push to history */
  subscribe(watch(state => state.value, (value) => {
    setState({
      history: [...(new Set([value, ...getState().history]))],
    });
  }));

  /* when history changed, force update */
  subscribe(watch(state => state.history, (history) => {
    setState({
      data: sortData({ history }, data),
    });
  }));

  if (data.length > 0) {
    setState({ focusIndex: 0 });
  }

  persistStore(store, { persistProp: ['history'], getPersistKey });

  insertBefore(refs.$container, refs.$input);
};

export default createAutoComplete;
