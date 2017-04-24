const createOnRemove = ({
  getState,
  setState,
  valueSelector = e => e.target.dataset.value,
}) => (e) => {
  const removedValue = valueSelector(e);
  setState({
    history: getState().history.filter(value => value !== removedValue),
  });
  e.stopPropagation();
  e.preventDefault();
};

export default createOnRemove;
