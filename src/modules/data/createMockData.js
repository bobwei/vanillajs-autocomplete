const createMockData = () => (
  [...(new Array(100))].map((obj, j) => ({
    value: `label ${j}`,
    label: `label ${j}`,
  }))
);

export default createMockData;

if (require.main === module) {
  console.log(JSON.stringify(createMockData()));
}
