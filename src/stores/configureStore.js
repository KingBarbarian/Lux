import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import rootReducer from '../reducers';
import rootEpic from '../epics';
import thunk from 'redux-thunk';

const epicMiddleware = createEpicMiddleware(rootEpic);

export default function configureStore() {
    let store = "";
    if (!(window.__REDUX_DEVTOOLS_EXTENSION__ || window.__REDUX_DEVTOOLS_EXTENSION__)) {
        store = createStore(
            rootReducer,
            applyMiddleware(
                epicMiddleware
            )
        );
    } else {
        store = createStore(
            rootReducer,
            compose(applyMiddleware(epicMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) //插件调试，未安装会报错
        );
    }
    return store;
}