/* eslint-disable global-require */
const createMockData = () => require('./data.json');

export default createMockData;

if (require.main === module) {
  console.log(JSON.stringify(createMockData()));
}
