const oninput = ({
  data,
  setState,
  valueSelector = e => e.target.value,
  filterOption = ({ q }) => ({ label }) => label.indexOf(q) > -1,
}) => (e) => {
  const q = valueSelector(e);
  setState({ data: data.filter(filterOption({ q })) });
};

export default oninput;
