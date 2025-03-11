import { configureStore, isAnyOf } from "@reduxjs/toolkit";
import cartReducer from "./slices/cart-reducer";
import { saveState, loadState } from "../config/storage";
import { createListenerMiddleware } from "@reduxjs/toolkit";
import {
  addPoductList,
  deleteProduct,
  toggleAmount,
  totalPrice,
} from "./slices/cart-reducer";

const setTotalPrice = createListenerMiddleware();

setTotalPrice.startListening({
  matcher: isAnyOf(addPoductList, deleteProduct, toggleAmount),
  effect: (_, listenerApi) => {
    listenerApi.dispatch(totalPrice());
  },
});

export const store = configureStore({
  reducer: {
    product: cartReducer,
  },
  preloadedState: {
    product: loadState("products"),
  },
  middleware: (defaultMiddlware) =>
    defaultMiddlware().concat(setTotalPrice.middleware),
});

store.subscribe(() => {
  saveState("products", store.getState()?.product);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
