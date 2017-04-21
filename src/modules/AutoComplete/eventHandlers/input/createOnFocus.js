const createOnFocus = ({ setState }) => () => setState({ isOptionListHidden: false });

export default createOnFocus;
