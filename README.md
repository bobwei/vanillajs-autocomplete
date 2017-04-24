# Vanillajs AutoComplete

This is a demo project for showing auto-complete functionality using vanillajs.

- [Demo](#demo)
- [Usage](#usage)


## Demo

- Live demo : [https://bobwei.github.io/vanillajs-autocomplete/](https://bobwei.github.io/vanillajs-autocomplete/)
- Local Demo :
  - example/index.html
  - example/index.js

There is also a prebuilt version that works locally. Please open dist/index.html to check it out.


## Usage

index.html
```html
<form>
  <div class="form-group">
    <label>Search from static source</label>
    <input id="static-source" type="text" class="form-control" autocomplete="off" placeholder="search" />
  </div>
  <div class="form-group">
    <label>Search from remote source</label>
    <input id="remote-source" type="text" class="form-control" autocomplete="off" placeholder="search" />
  </div>
  <div class="text-center">
    <button id="btn-reset" type="submit" class="btn btn-default">Submit</button>
  </div>
</form>
```

index.js
```js
import AutoComplete from 'modules/AutoComplete';

const el = document.querySelector('input');
AutoComplete({
  el,
  data: [{
    value: '',
    thumbnail: '',
  }],
  getPersistKey: () => 'auto-complete:history:0',
});
```
