import createElement from 'modules/dom/createElement';

const Option = ({ value, label }) => createElement(
  'div',
  {
    id: value,
  },
  label,
);

export default Option;
