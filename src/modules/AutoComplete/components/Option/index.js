import createElement from 'modules/dom/createElement';

const Option = ({ index, value, thumbnail, onselect, onhover, isInHistory, onremove }) => {
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
    ],
  );
  el.setAttribute('data-value', value);
  el.setAttribute('data-index', index);
  if (isInHistory) {
    el.classList.add('is-in-history');
    const btnRemove = createElement(
      'span',
      {
        className: 'remove',
        onmousedown: onremove,
      },
      'remove',
    );
    btnRemove.setAttribute('data-value', value);
    el.appendChild(btnRemove);
  }
  return el;
};

export default Option;
