import { createStore, compose, applyMiddleware } from 'redux';
import { appReducer } from './reducer';
import { persistStore } from 'redux-persist';
import * as LogRocket from 'logrocket';
const composeEnhancers = typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;
const enhancer = composeEnhancers(
// other store enhancers if any
applyMiddleware(
// Add saga, debug...
LogRocket.reduxMiddleware()));
const preloadedState = {};
export default function configureStore(onComplete) {
    const store = createStore(appReducer, preloadedState, enhancer);
    const persistor = persistStore(store);
    return { store, persistor };
}
