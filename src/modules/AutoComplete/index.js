import createElement from 'modules/dom/createElement';
import insertBefore from 'modules/dom/insertBefore';
import replace from 'modules/dom/replace';
import toggleDisplay from 'modules/dom/toggleDisplay';
import createStore from 'modules/stores/createStore';
import watch from 'modules/utils/watch';

import Option from './components/Option';
import oninputHandler from './eventHandlers/oninput';

const createAutoComplete = ({
  el,
  data,
}) => {
  const store = createStore({
    data,
    isOptionListHidden: true,
  });
  const { getState, setState, subscribe } = store;
  const refs = {};
  const oninput = oninputHandler({ data, setState });

  refs.$input = el;
  refs.$input.oninput = oninput;
  refs.$input.onfocus = () => setState({ isOptionListHidden: false });
  refs.$input.onblur = () => setState({ isOptionListHidden: true });

  refs.$optionList = createElement(
    'div',
    {},
    getState().data.map(props => createElement(Option, props)),
  );
  refs.$container = createElement(
    'div',
    {},
    refs.$optionList,
  );

  /* handle data change by replacing with a new $optionList */
  subscribe(watch(state => state.data, () => {
    refs.$optionList = replace(
      createElement(
        'div',
        {},
        getState().data.map(props => createElement(Option, props)),
      ),
      refs.$optionList,
    );
  }));

  /* handle isOptionListHidden change */
  subscribe(watch(state => state.isOptionListHidden, toggleDisplay(refs.$container)));

  insertBefore(refs.$container, refs.$input);
};

export default createAutoComplete;
