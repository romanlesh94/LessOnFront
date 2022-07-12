import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from "redux-thunk";
import SpinnerReducer from "./spinnerReducer";
import LessonReducer from "./lesson-reducer";

const reducers = combineReducers({
    isSpinnerActive: SpinnerReducer,
    currentLessonId: LessonReducer,
});

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = createStore(reducers, {}, enhancer);

export default store;