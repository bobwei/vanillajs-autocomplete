/*
  Watch value change, if not equal, invoke callback
*/
const watch = (selector, fn, isEqual = (a, b) => a === b) => (nextState, previousState) => {
  const nextValue = selector(nextState);
  const previousValue = selector(previousState);
  if (!isEqual(nextValue, previousValue)) {
    fn(nextValue, previousValue);
  }
};

export default watch;
