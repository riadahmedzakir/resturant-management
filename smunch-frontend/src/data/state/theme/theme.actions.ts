import { createAction } from '@reduxjs/toolkit';

export const SetTheme = createAction('set application theme', (args) => ({ payload: args }));