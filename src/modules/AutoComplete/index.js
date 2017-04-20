import createElement from 'modules/dom/createElement';
import insertBefore from 'modules/dom/insertBefore';
import Option from 'modules/AutoComplete/components/Option';
import createStore from 'modules/stores/createStore';

const createAutoComplete = ({
  el,
  data,
}) => {
  const store = createStore({ data });
  const { getState } = store;
  const refs = {};

  refs.$input = el;
  refs.$input.oninput = console.log;

  refs.$optionList = createElement(
    'div',
    {},
    getState().data.map(props => createElement(Option, props)),
  );

  insertBefore(refs.$optionList, refs.$input);
};

export default createAutoComplete;
