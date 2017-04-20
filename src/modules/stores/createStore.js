const createStore = (initialState) => {
  let currentState = initialState;
  const subscribers = [];

  const getState = () => currentState;
  const setState = (nextState) => {
    const previousState = { ...currentState };
    currentState = { ...previousState, ...nextState };
    subscribers.forEach((listener) => {
      listener(currentState, previousState);
    });
  };
  const subscribe = (listener) => {
    subscribers.push(listener);
    return () => {
      const i = subscribers.indexOf(listener);
      subscribers.splice(i, 1);
    };
  };

  return {
    getState,
    setState,
    subscribe,
  };
};

export default createStore;
