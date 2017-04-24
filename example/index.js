import AutoComplete from 'modules/AutoComplete';
import request from 'modules/data/request';
import createMockData from 'modules/data/createMockData';
import mapper from 'modules/data/mapper';
import 'modules/AutoComplete/index.scss';

import './index.scss';

document.addEventListener('DOMContentLoaded', () => {
  const $staticSource = document.querySelector('#static-source');
  AutoComplete({
    el: $staticSource,
    data: createMockData().item.map(mapper),
    getPersistKey: () => 'auto-complete:history:0',
  });
  $staticSource.focus();
  request
    .get('https://bobwei.github.io/vanillajs-autocomplete/data.json')
    .then((res) => {
      AutoComplete({
        el: document.querySelector('#remote-source'),
        data: res.item.map(mapper),
        getPersistKey: () => 'auto-complete:history:1',
      });
    });
});
