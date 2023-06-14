import { createSelector, createSlice } from "@reduxjs/toolkit";

export const THEME_KEY = 'theme';

export interface ThemeState {
    isDark: boolean;
}

const initialState: ThemeState = {
    isDark: false,
};

export const themeSlice = createSlice({
    name: THEME_KEY,
    initialState,
    reducers: {
        setDarkTheme: (state) => {
            state.isDark = true;
        },
        setLightTheme: (state) => {
            state.isDark = false;
        },
    }
});

export const { setDarkTheme, setLightTheme } = themeSlice.actions;

export const themeReducer = themeSlice.reducer;

export const getThemeState = (rootState: any): boolean => rootState[THEME_KEY].isDark;

export const themeState = createSelector(getThemeState, (state) => state);