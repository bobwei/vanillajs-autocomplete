import createElement from 'modules/dom/createElement';

const Option = ({ value, label, onoptionselect }) => {
  const el = createElement(
    'li',
    {
      onmousedown: onoptionselect,
    },
    label,
  );
  el.setAttribute('data-value', value);
  return el;
};

export default Option;
