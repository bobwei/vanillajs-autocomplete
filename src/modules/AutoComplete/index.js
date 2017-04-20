import createElement from 'modules/dom/createElement';
import insertBefore from 'modules/dom/insertBefore';

const createAutoComplete = ({
  el,
  data,
}) => {
  const refs = {};
  refs.$input = el;
  refs.$optionList = createElement(
    'div',
    {},
    data.map(({ label }) => (
      createElement('div', {}, label)
    )),
  );

  insertBefore(refs.$optionList, refs.$input);
};

export default createAutoComplete;
