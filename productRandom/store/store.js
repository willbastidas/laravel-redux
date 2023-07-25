import { configureStore } from "@reduxjs/toolkit";
import rootReducer from '../reducer/reducers';

const store = configureStore({
    reducer : rootReducer,
});

export default store; 