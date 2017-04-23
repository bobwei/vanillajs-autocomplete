import createElement from 'modules/dom/createElement';

const Option = ({ index, value, label, onselect, onhover, isInHistory }) => {
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
  if (isInHistory) {
    el.classList.add('is-in-history');
  }
  return el;
};

export default Option;
