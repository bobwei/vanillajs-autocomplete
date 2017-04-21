/* eslint-disable no-param-reassign */
const createOnValueChange = ({
  getEl,
}) => (value) => {
  getEl().value = value;
};

export default createOnValueChange;
