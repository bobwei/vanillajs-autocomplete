import createElement from 'modules/dom/createElement';
import insertBefore from 'modules/dom/insertBefore';
import replace from 'modules/dom/replace';
import Option from 'modules/AutoComplete/components/Option';
import createStore from 'modules/stores/createStore';
import watch from 'modules/utils/watch';

const createAutoComplete = ({
  el,
  data,
}) => {
  const store = createStore({ data });
  const { getState } = store;
  const refs = {};
  const oninput = (e) => {
    const q = e.target.value;
    store.setState({ data: data.filter(({ label }) => label.indexOf(q) > -1) });
  };

  /* handle data change by replacing with a new $optionList */
  store.subscribe(watch(state => state.data, () => {
    refs.$optionList = replace(
      createElement(
        'div',
        {},
        getState().data.map(props => createElement(Option, props)),
      ),
      refs.$optionList,
    );
  }));

  refs.$input = el;
  refs.$input.oninput = oninput;

  refs.$optionList = createElement(
    'div',
    {},
    getState().data.map(props => createElement(Option, props)),
  );

  insertBefore(refs.$optionList, refs.$input);
};

export default createAutoComplete;
