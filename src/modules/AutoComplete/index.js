import createElement from 'modules/dom/createElement';
import insertBefore from 'modules/dom/insertBefore';
import replace from 'modules/dom/replace';
import createStore from 'modules/stores/createStore';
import watch from 'modules/utils/watch';

import Option from './components/Option';
import oninputHandler from './eventHandlers/oninput';

const createAutoComplete = ({
  el,
  data,
}) => {
  const store = createStore({ data });
  const { getState, setState } = store;
  const refs = {};
  const oninput = oninputHandler({ data, setState });

  /* handle data change by replacing with a new $optionList */
  store.subscribe(watch(state => state.data, () => {
    refs.$optionList = replace(
      createElement(
        'div',
        {},
        getState().data.map(props => createElement(Option, props)),
      ),
      refs.$optionList,
    );
  }));

  refs.$input = el;
  refs.$input.oninput = oninput;

  refs.$optionList = createElement(
    'div',
    {},
    getState().data.map(props => createElement(Option, props)),
  );

  insertBefore(refs.$optionList, refs.$input);
};

export default createAutoComplete;
