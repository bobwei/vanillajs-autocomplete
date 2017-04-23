const sortData = (
  {
    history,
  },
  data,
) => {
  const historySet = history.reduce((acc, value, i) => ({ ...acc, [value]: String(i) }), {});
  return [
    ...[...data]
      .filter(({ value }) => historySet[value])
      .sort(({ value: valuea }, { value: valueb }) => historySet[valuea] - historySet[valueb]),
    ...[...data]
      .filter(({ value }) => !historySet[value]),
  ];
};

export default sortData;
