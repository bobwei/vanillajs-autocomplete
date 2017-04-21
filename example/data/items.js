const items = [...(new Array(100))].map((obj, j) => ({
  value: `label ${j}`,
  label: `label ${j}`,
}));

export default items;
