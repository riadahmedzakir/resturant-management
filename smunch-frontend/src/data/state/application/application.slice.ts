import { createSelector, createSlice } from "@reduxjs/toolkit";
import { IProductDto } from "../../../constants/product.interface";
import { IResturantDto } from "../../../constants/resturant.interface";
import { SetProduct, SetResturants } from "./application.actions";

export const APPLICATION_KEY = 'application';

export interface ApplicationState {
    resturants: IResturantDto[],
    products: IProductDto[],
}

const initialState: ApplicationState = {
    resturants: [],
    products: []
};

export const applicationSlice = createSlice({
    name: APPLICATION_KEY,
    initialState,
    reducers: {
        resetResturants: (state) => {
            state.resturants = [];
        },
        resetProducts: (state) => {
            state.products = [];
        },
    },
    extraReducers: (builder) => {
        builder.addCase(SetResturants, (state, action) => {
            state.resturants = action.payload;
        });
        builder.addCase(SetProduct, (state, action) => {
            state.products = action.payload;
        });
    }
});

export const { resetResturants, resetProducts } = applicationSlice.actions;

export const applicationReducer = applicationSlice.reducer;

export const getResturants = (rootState: any): IResturantDto[] => rootState[APPLICATION_KEY].resturants;

export const getResturantsState = createSelector(getResturants, (state) => state);

export const getProducts = (rootState: any): IProductDto[] => rootState[APPLICATION_KEY].products;

export const getProductsState = createSelector(getProducts, (state) => state);