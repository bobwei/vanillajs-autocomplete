const createMockData = () => (
  [...(new Array(100))].map((obj, j) => ({
    value: `value ${j}`,
  }))
);

export default createMockData;

if (require.main === module) {
  console.log(JSON.stringify(createMockData()));
}
