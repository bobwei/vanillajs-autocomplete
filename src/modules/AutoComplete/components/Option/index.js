import createElement from 'modules/dom/createElement';

const Option = ({ value, label, onselect }) => {
  const el = createElement(
    'li',
    {
      onmousedown: onselect,
    },
    label,
  );
  el.setAttribute('data-value', value);
  return el;
};

export default Option;
