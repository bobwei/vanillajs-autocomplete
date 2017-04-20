const createElement = (
  type,
  props,
  children,
) => {
  /*
    create element
  */
  const el = (typeof type === 'function') ? type({ ...props, children }) : document.createElement(type);
  /*
    overwritten element's properties
  */
  Object.assign(el, props);
  Object.assign(el.style, props.style);
  /*
    append children to the element
  */
  if (Array.isArray(children)) {
    children
      .forEach(child => el.appendChild(child));
  } else if (typeof children === 'string' || typeof children === 'number') {
    el.appendChild(document.createTextNode(children));
  } else if (children instanceof HTMLElement) {
    el.appendChild(children);
  }
  return el;
};

export default createElement;
