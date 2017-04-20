/* eslint-disable no-param-reassign */
const toggleDisplay = el => (isElHidden) => {
  if (el) {
    el.style.display = (isElHidden) ? 'none' : 'block';
  }
};

export default toggleDisplay;
