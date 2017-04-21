const createOnInput = ({
  data,
  setState,
  valueSelector = e => e.target.value,
  filterOption = ({ q }) => ({ label }) => label.indexOf(q) > -1,
}) => (e) => {
  const q = valueSelector(e);
  /* reset focusIndex to force update */
  setState({ focusIndex: -1 });
  setState({
    data: data.filter(filterOption({ q })),
    focusIndex: 0,
    isOptionListHidden: false,
  });
};

export default createOnInput;
