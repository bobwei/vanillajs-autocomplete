import shouldScrollToView from '../../utils/shouldScrollToView';

const createOnFocusIndexChange = ({
  getContainer,
  getEl,
}) => (focusIndex, previousFocusIndex) => {
  const el = getEl();
  if (el.children[focusIndex]) {
    el.children[focusIndex].classList.add('focus');
    const $container = getContainer();
    const $focusingElement = el.children[focusIndex];
    const result = shouldScrollToView({ el: $focusingElement, $container });
    if (result.shouldScrollToView) {
      $container.scrollTop = result.scrollTop;
    }
  }
  if (el.children[previousFocusIndex]) {
    el.children[previousFocusIndex].classList.remove('focus');
  }
};

export default createOnFocusIndexChange;
