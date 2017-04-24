import sortData from '../../utils/sortData';

const createOnInput = ({
  data,
  getState,
  setState,
  valueSelector = e => e.target.value,
  filterOption = ({ q }) => ({ value }) => value.indexOf(q) > -1,
}) => (e) => {
  const q = valueSelector(e);
  /* reset focusIndex to force update */
  setState({ focusIndex: -1 });
  setState({
    data: sortData({ history: getState().history }, data).filter(filterOption({ q })),
    focusIndex: 0,
    isOptionListHidden: false,
  });
};

export default createOnInput;
