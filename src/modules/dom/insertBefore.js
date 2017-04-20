const insertBefore = (el, target) => {
  target.parentNode.insertBefore(el, target.nextSibling);
};

export default insertBefore;
