# How it Works

AutoComplete is compose of components, store and event handlers.
- [src/modules/AutoComplete/index.js](./src/modules/AutoComplete/index.js)

__Store__ is responsible for state management and as the single source of truth for any state including isOptionListHidden, focusIndex, value, data, history and so on.
- [src/modules/stores/createStore](./src/modules/stores/createStore)

__Event handlers__ are subscribing to the state change and reflect corresponding changes to UI. Event handlers here are factory functions that receive props as input and return event handler function that can handle user action and access props from closure.

__Components__ are functions that return elements. It's composable, reusable and declarative.

__History__ is implemented simply by persisting store state to storage since store is the single source of truth for every state.
- [src/modules/persistences/persistStore](./src/modules/persistences/persistStore)

__Watch__ It's a utility function that help us subscribing to state change that we concern.
- [src/modules/utils/watch](./src/modules/utils/watch)
