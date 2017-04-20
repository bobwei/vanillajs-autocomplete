import './index.scss';

const render = (el, mountNode) => {
  mountNode.parentNode.replaceChild(el, mountNode);
};

document.addEventListener('DOMContentLoaded', () => {
  const testEl = document.createElement('div');
  testEl.textContent = 'Hello World';
  const mountNode = document.getElementById('app');
  render(testEl, mountNode);
});
