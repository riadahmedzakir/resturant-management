import { Action, CombinedState, Dispatch, Reducer, Store, ThunkDispatch, combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { PersistConfig, Persistor, persistStore } from "redux-persist";
import persistReducer, { PersistPartial } from "redux-persist/es/persistReducer";
import storage from 'redux-persist/lib/storage';
import { THEME_KEY, ThemeState, themeReducer } from "../state/theme/theme.slice";
import { APPLICATION_KEY, ApplicationState, applicationReducer } from "../state/application/application.slice";

export interface IPersistConfig {
    key: string;
    storage: Storage;
    whiteList: Array<string>;
}

export interface IReducer {
    [THEME_KEY]: ThemeState;
    [APPLICATION_KEY]: ApplicationState
}

const persistConfig: PersistConfig<IReducer> = {
    key: 'root',
    storage,
    whitelist: [THEME_KEY, APPLICATION_KEY],
};

const reducers: Reducer<CombinedState<IReducer>> = combineReducers({
    [THEME_KEY]: themeReducer,
    [APPLICATION_KEY]: applicationReducer
});

const persistedReducer: Reducer<IReducer & PersistPartial> = persistReducer(
    persistConfig,
    reducers
);

export const store: Store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
    devTools: true,
});

export const persistor: Persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = (): ThunkDispatch<AppDispatch, unknown, Action> & Dispatch =>
    useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;