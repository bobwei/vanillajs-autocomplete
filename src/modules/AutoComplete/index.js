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

const createAutoComplete = ({
  el,
  data,
}) => {
  const store = createStore({
    data,
    isOptionListHidden: true,
  });
  const { getState, setState, subscribe } = store;
  const refs = {};
  const oninput = oninputHandler({ data, setState });

  refs.$input = el;
  refs.$input.oninput = oninput;
  refs.$input.onfocus = () => setState({ isOptionListHidden: false });
  refs.$input.onblur = () => setState({ isOptionListHidden: true });
  const onoptionselect = oninputselectHandler({ $input: refs.$input });

  refs.$optionList = createElement(
    'ul',
    {},
    getState().data.map(props => createElement(Option, { ...props, onselect: onoptionselect })),
  );
  refs.$container = createElement(Container, { el, className: 'auto-complete-container' }, refs.$optionList);
  toggleDisplay(refs.$container)(getState().isOptionListHidden);

  /* handle data change by replacing with a new $optionList */
  subscribe(watch(state => state.data, () => {
    refs.$optionList = replace(
      createElement(
        'ul',
        {},
        getState().data.map(props => createElement(Option, { ...props, onselect: onoptionselect })),
      ),
      refs.$optionList,
    );
  }));

  /* handle isOptionListHidden change */
  subscribe(watch(state => state.isOptionListHidden, toggleDisplay(refs.$container)));

  insertBefore(refs.$container, refs.$input);
};

export default createAutoComplete;
