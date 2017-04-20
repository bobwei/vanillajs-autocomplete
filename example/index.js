import AutoComplete from 'modules/AutoComplete';

import items from './data/items';
import './index.scss';

document.addEventListener('DOMContentLoaded', () => {
  const $inputs = document.querySelectorAll('input');
  for (let i = 0; i < $inputs.length; i += 1) {
    AutoComplete({
      el: $inputs[i],
      data: items,
    });
  }
});
