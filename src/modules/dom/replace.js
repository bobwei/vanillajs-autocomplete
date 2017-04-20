const replace = (el, target) => {
  target.parentNode.replaceChild(el, target);
  return el;
};

export default replace;
