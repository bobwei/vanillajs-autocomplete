const createElement = (
  type,
  props,
  children,
) => {
  /*
    create element
  */
  const el = document.createElement(type);
  /*
    for each non-empty prop, set to element properties
  */
  Object
    .keys(props)
    .filter(key => props[key] !== undefined)
    .forEach((key) => {
      el[key] = props[key];
    });
  /*
    append children to the element
  */
  if (Array.isArray(children)) {
    children
      .forEach(child => el.appendChild(child));
  } else if (typeof children === 'string' || typeof children === 'number') {
    el.appendChild(document.createTextNode(children));
  } else {
    el.appendChild(children);
  }
  return el;
};

export default createElement;
