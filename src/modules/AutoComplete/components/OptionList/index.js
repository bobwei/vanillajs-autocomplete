/* eslint-disable no-unused-vars */
import createElement from 'modules/dom/createElement';

const OptionList = ({
  data,
  Option,
  children,
  ...props
}) => (
  createElement(
    'ul',
    {},
    data.map((otherProps, index) => createElement(Option, {
      index,
      ...otherProps,
      ...props,
    })),
  )
);

export default OptionList;
