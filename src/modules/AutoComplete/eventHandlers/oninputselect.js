const oninputselect = ({
  $input,
  valueSelector = e => e.target.dataset.value,
}) => (e) => {
  $input.setAttribute('value', valueSelector(e));
};

export default oninputselect;
