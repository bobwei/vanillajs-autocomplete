const createOnHover = ({
  setState,
}) => (e) => {
  setState({
    focusIndex: parseInt(e.target.dataset.index, 10),
  });
};

export default createOnHover;
