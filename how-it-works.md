# How it Works

AutoComplete is compose of components, store and event handlers.
```
src/modules/AutoComplete/index.js
```

__Store__ is responsible for state management and as the single source of truth for any state including isOptionListHidden, focusIndex, value, data, history and so on.

__Event handlers__ are subscribing to the state change and reflect corresponding changes to UI. Event handlers here are factory functions that receive props as input and return event handler function that can handle user action and access props from closure.

__Components__ are functions that return elements. It's composable, reusable and declarative.
