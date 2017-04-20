import createElement from 'modules/dom/createElement';

const Option = ({ value, label }) => createElement(
  'li',
  {
    id: value,
  },
  label,
);

export default Option;
