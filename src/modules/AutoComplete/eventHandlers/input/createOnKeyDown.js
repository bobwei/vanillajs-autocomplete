const createOnKeyDown = ({
  getState,
  setState,
}) => (e) => {
  const value = e.keyCode;
  if (value === 38) {
    setState({ focusIndex: Math.max(0, getState().focusIndex - 1) });
  } else if (value === 40) {
    setState({ focusIndex: Math.min(getState().data.length, getState().focusIndex + 1) });
  } else if (value === 13) {
    e.preventDefault();
    const { data, focusIndex } = getState();
    if (data[focusIndex]) {
      setState({ value: data[focusIndex].value });
    }
    setState({
      isOptionListHidden: true,
    });
  }
};

export default createOnKeyDown;
