/* eslint-disable no-param-reassign */
const createOnSelect = ({
  setState,
  valueSelector = e => e.target.dataset.value,
}) => (e) => {
  setState({ value: valueSelector(e) });
};

export default createOnSelect;
