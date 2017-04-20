import AutoComplete from 'modules/AutoComplete';
import 'modules/AutoComplete/index.scss';

import items from './data/items';
import './index.scss';

document.addEventListener('DOMContentLoaded', () => {
  const $input0 = document.getElementById('input0');
  AutoComplete({
    el: $input0,
    data: items,
  });
});
