const items = [...(new Array(10))].map((obj, j) => ({
  value: j,
  label: `label ${j}`,
}));

export default items;
