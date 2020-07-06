import { compose, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './Reducers/Indexrducers';

const initialState = {};

const middleware = [thunk];

const argoStore = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(...middleware)
    )
);

export default argoStore;