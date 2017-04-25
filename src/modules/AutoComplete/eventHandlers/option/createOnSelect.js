const createOnSelect = ({
  setState,
  valueSelector = e => e.currentTarget.dataset.value,
}) => (e) => {
  setState({ value: valueSelector(e) });
};

export default createOnSelect;
