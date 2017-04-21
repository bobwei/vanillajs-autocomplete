import createElement from 'modules/dom/createElement';

const Option = ({ index, value, label, onselect, onhover }) => {
  const el = createElement(
    'li',
    {
      onmousedown: onselect,
      onmouseenter: onhover,
    },
    label,
  );
  el.setAttribute('data-value', value);
  el.setAttribute('data-index', index);
  return el;
};

export default Option;
