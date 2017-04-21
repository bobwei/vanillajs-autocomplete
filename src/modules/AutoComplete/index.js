import createElement from 'modules/dom/createElement';
import insertBefore from 'modules/dom/insertBefore';
import replace from 'modules/dom/replace';
import toggleDisplay from 'modules/dom/toggleDisplay';
import createStore from 'modules/stores/createStore';
import watch from 'modules/utils/watch';

import Container from './components/Container';
import Option from './components/Option';
import oninputHandler from './eventHandlers/oninput';
import oninputselectHandler from './eventHandlers/oninputselect';
import onfocusindexchange from './eventHandlers/onfocusindexchange';

const createAutoComplete = ({
  el,
  data,
}) => {
  const store = createStore({
    data,
    isOptionListHidden: true,
    focusIndex: -1,
  });
  const { getState, setState, subscribe } = store;
  const refs = {};
  const oninput = oninputHandler({ data, setState });

  refs.$input = el;
  refs.$input.oninput = oninput;
  refs.$input.onfocus = () => setState({ isOptionListHidden: false });
  refs.$input.onblur = () => setState({ isOptionListHidden: true });
  refs.$input.onkeydown = (e) => {
    const value = e.keyCode;
    if (value === 38) {
      setState({ focusIndex: Math.max(0, getState().focusIndex - 1) });
    } else if (value === 40) {
      setState({ focusIndex: Math.min(getState().data.length, getState().focusIndex + 1) });
    } else if (value === 13) {
      e.preventDefault();
    }
  };
  const onoptionselect = oninputselectHandler({ $input: refs.$input });
  const onoptionhover = e => setState({ focusIndex: e.target.dataset.index });

  refs.$optionList = createElement(
    'ul',
    {},
    getState().data.map((props, index) => createElement(Option, {
      ...props, onselect: onoptionselect, onhover: onoptionhover, index,
    })),
  );
  refs.$container = createElement(Container, { el, className: 'auto-complete-container' }, refs.$optionList);
  toggleDisplay(refs.$container)(getState().isOptionListHidden);

  /* handle data change by replacing with a new $optionList */
  subscribe(watch(state => state.data, () => {
    refs.$optionList = replace(
      createElement(
        'ul',
        {},
        getState().data.map((props, index) => createElement(Option, {
          ...props, onselect: onoptionselect, onhover: onoptionhover, index,
        })),
      ),
      refs.$optionList,
    );
  }));

  /* handle isOptionListHidden change */
  subscribe(watch(state => state.isOptionListHidden, toggleDisplay(refs.$container)));

  /* handle focusIndex change */
  subscribe(watch(state => state.focusIndex, onfocusindexchange(() => refs.$optionList)));

  if (data.length > 0) {
    setState({ focusIndex: 0 });
  }

  insertBefore(refs.$container, refs.$input);
};

export default createAutoComplete;
