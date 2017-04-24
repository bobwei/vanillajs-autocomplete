import createElement from 'modules/dom/createElement';

const Option = ({ index, value, thumbnail, onselect, onhover, isInHistory, onremove }) => {
  const btnRemove = createElement(
    'span',
    {
      className: 'remove',
      onmousedown: onremove,
    },
    'remove',
  );
  btnRemove.setAttribute('data-value', value);
  const el = createElement(
    'li',
    {
      onmousedown: onselect,
      onmouseenter: onhover,
    },
    [
      createElement(
        'img',
        {
          src: thumbnail,
        },
      ),
      createElement(
        'div',
        {
          className: 'text',
        },
        value,
      ),
      btnRemove,
    ],
  );
  el.setAttribute('data-value', value);
  el.setAttribute('data-index', index);
  if (isInHistory) {
    el.classList.add('is-in-history');
  }
  return el;
};

export default Option;
