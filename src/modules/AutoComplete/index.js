import createElement from 'modules/dom/createElement';
import insertBefore from 'modules/dom/insertBefore';

const createAutoComplete = ({
  el,
  data,
}) => {
  const $input = el;
  const $optionList = createElement(
    'div',
    {},
    data.map(({ label }) => (
      createElement('div', {}, label)
    )),
  );

  insertBefore($optionList, $input);
};

export default createAutoComplete;
