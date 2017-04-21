/* eslint-disable no-param-reassign */
const createOnSelect = ({
  $input,
  valueSelector = e => e.target.dataset.value,
}) => (e) => {
  $input.value = valueSelector(e);
};

export default createOnSelect;
