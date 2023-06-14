import { createAction } from '@reduxjs/toolkit';

export const SetResturants = createAction('set resturant info', (args) => ({ payload: args }));

export const SetProduct = createAction('set product info', (args) => ({ payload: args }));