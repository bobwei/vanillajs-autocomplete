import watch from 'modules/utils/watch';

const persistStore = (
  store,
  {
    persistProp,
    storage = localStorage,
    getPersistKey,
    serializer = JSON.stringify,
    deserializer = JSON.parse,
  } = {},
) => {
  const { subscribe, setState } = store;

  /* persist changes */
  subscribe(watch(state => state[persistProp], (value) => {
    const key = getPersistKey();
    storage.setItem(key, serializer(value));
  }));

  /* initialize state */
  const key = getPersistKey();
  const value = storage.getItem(key);
  if (value) {
    setState({
      [persistProp]: deserializer(value),
    });
  }
};

export default persistStore;
