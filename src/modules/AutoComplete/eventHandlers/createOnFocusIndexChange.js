const createOnFocusIndexChange = getEl => (focusIndex, previousFocusIndex) => {
  const el = getEl();
  el.children[focusIndex].classList.add('focus');
  if (previousFocusIndex >= 0) {
    el.children[previousFocusIndex].classList.remove('focus');
  }
};

export default createOnFocusIndexChange;
