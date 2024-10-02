import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import items from './list';

export const store = configureStore({
  reducer: {
    items
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
