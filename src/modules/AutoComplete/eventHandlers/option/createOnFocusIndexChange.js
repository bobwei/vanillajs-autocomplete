const createOnFocusIndexChange = ({
  getEl,
}) => (focusIndex, previousFocusIndex) => {
  const el = getEl();
  if (el.children[focusIndex]) {
    el.children[focusIndex].classList.add('focus');
  }
  if (el.children[previousFocusIndex]) {
    el.children[previousFocusIndex].classList.remove('focus');
  }
};

export default createOnFocusIndexChange;
