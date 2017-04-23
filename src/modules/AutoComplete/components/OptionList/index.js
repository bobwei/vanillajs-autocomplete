/* eslint-disable no-unused-vars */
import createElement from 'modules/dom/createElement';

const OptionList = ({
  data,
  history,
  Option,
  children,
  ...props
}) => {
  const historySet = new Set(history);
  return createElement(
    'ul',
    {},
    data.map((dataProps, index) => createElement(Option, {
      index,
      ...dataProps,
      ...props,
      isInHistory: historySet.has(dataProps.value),
    })),
  );
};

export default OptionList;
