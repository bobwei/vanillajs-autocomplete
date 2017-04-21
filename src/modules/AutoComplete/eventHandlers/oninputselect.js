/* eslint-disable no-param-reassign */
const oninputselect = ({
  $input,
  valueSelector = e => e.target.dataset.value,
}) => (e) => {
  $input.value = valueSelector(e);
};

export default oninputselect;
