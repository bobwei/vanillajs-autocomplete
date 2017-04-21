const shouldScrollToView = ({ el, $container }) => {
  const isVisible = (
    el.offsetTop > $container.scrollTop &&
    (el.offsetTop + el.offsetHeight) < $container.scrollTop + $container.offsetHeight
  );
  return {
    shouldScrollToView: !isVisible,
    scrollTop: el.offsetTop - ($container.offsetHeight / 2),
  };
};

export default shouldScrollToView;
