const createOnHover = ({
  setState,
}) => (e) => {
  setState({ focusIndex: e.target.dataset.index });
};

export default createOnHover;
