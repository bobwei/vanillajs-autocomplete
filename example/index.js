import AutoComplete from 'modules/AutoComplete';
import 'modules/AutoComplete/index.scss';

import items from './data/items';
import './index.scss';

document.addEventListener('DOMContentLoaded', () => {
  Array
    .from(document.querySelectorAll('input'))
    .forEach((el, i) => (
      AutoComplete({
        el,
        data: items,
        getPersistKey: () => `auto-complete:history:${i}`,
      })
    ));
});
