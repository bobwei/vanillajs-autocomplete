const createOnBlur = ({ setState }) => () => setState({ isOptionListHidden: true });

export default createOnBlur;
