const items = [...(new Array(100))].map((obj, j) => ({
  value: j,
  label: `label ${j}`,
}));

export default items;
