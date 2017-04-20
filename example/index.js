import createElement from 'modules/dom/createElement';

import './index.scss';

const render = (el, mountNode) => {
  mountNode.parentNode.replaceChild(el, mountNode);
};

document.addEventListener('DOMContentLoaded', () => {
  const el = createElement('div', {}, 'Hello World');
  const mountNode = document.getElementById('app');
  render(el, mountNode);
});
