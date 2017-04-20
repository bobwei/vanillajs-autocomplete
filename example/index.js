import AutoComplete from 'modules/AutoComplete';
import 'modules/AutoComplete/index.scss';

import items from './data/items';
import './index.scss';

document.addEventListener('DOMContentLoaded', () => {
  Array
    .from(document.querySelectorAll('input'))
    .forEach(el => (
      AutoComplete({
        el,
        data: items,
      })
    ));
});
