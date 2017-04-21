import createElement from 'modules/dom/createElement';
import insertBefore from 'modules/dom/insertBefore';
import replace from 'modules/dom/replace';
import toggleDisplay from 'modules/dom/toggleDisplay';
import createStore from 'modules/stores/createStore';
import watch from 'modules/utils/watch';

import Container from './components/Container';
import Option from './components/Option';
import createOnFocus from './eventHandlers/input/createOnFocus';
import createOnBlur from './eventHandlers/input/createOnBlur';
import createOnInput from './eventHandlers/input/createOnInput';
import createOnKeyDown from './eventHandlers/input/createOnKeyDown';
import createOnValueChange from './eventHandlers/input/createOnValueChange';
import createOnSelect from './eventHandlers/option/createOnSelect';
import createOnFocusIndexChange from './eventHandlers/option/createOnFocusIndexChange';
import createOnHover from './eventHandlers/option/createOnHover';

const createAutoComplete = ({
  el,
  data,
}) => {
  const store = createStore({
    data,
    isOptionListHidden: true,
    focusIndex: -1,
    value: undefined,
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

  refs.$optionList = createElement(
    'ul',
    {},
    getState().data.map((props, index) => createElement(Option, {
      ...props, onselect, onhover, index,
    })),
  );
  refs.$container = createElement(Container, { el, className: 'auto-complete-container' }, refs.$optionList);
  toggleDisplay(refs.$container)(getState().isOptionListHidden);

  /* handle data change by replacing with a new $optionList */
  subscribe(watch(state => state.data, () => {
    refs.$optionList = replace(
      createElement(
        'ul',
        {},
        getState().data.map((props, index) => createElement(Option, {
          ...props, onselect, onhover, index,
        })),
      ),
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

  /* handler value change */
  subscribe(watch(state => state.value, createOnValueChange({ getEl: () => refs.$input })));

  if (data.length > 0) {
    setState({ focusIndex: 0 });
  }

  insertBefore(refs.$container, refs.$input);
};

export default createAutoComplete;
