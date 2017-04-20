import createElement from 'modules/dom/createElement';

/*
  Setup position relative to el
*/
const Container = ({ el, children }) => {
  const {
    offsetTop,
    offsetHeight,
    offsetLeft,
  } = el;
  return createElement(
    'div',
    {
      style: {
        position: 'absolute',
        top: offsetTop + offsetHeight,
        left: offsetLeft,
      },
    },
    children,
  );
};

export default Container;
