import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface productT {
  price: number;
  name: string;
  img: string;
  count: number;
  id: number;
}

export interface cartProductT {
  price: number;
  name: string;
  img: string;
  count: number;
  id: number;
  userPrice: number;
  userCount: number;
}

interface productListT {
  products: cartProductT[];
  totalPrice: number;
  productCount: number;
}

const initialState: productListT = {
  productCount: 0,
  totalPrice: 0,
  products: [],
};

interface toggleAmountT {
  type: "add" | "remove";
  id: number;
}

const cartReducer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addPoductList: (state, action: PayloadAction<productT>) => {
      const product = state.products.find(
        (item) => item.id === action.payload.id
      );
      if (!product) {
        return {
          ...state,
          productCount: state.productCount + 1,
          products: [
            ...state.products,
            {
              ...action.payload,
              userCount: 1,
              userPrice: action.payload.price,
              count: action.payload.count - 1,
            },
          ],
        };
      }

      return state;
    },
    toggleAmount: (state, action: PayloadAction<toggleAmountT>) => {
      if (action.payload.type === "add") {
        const newProducts = state.products.map((item) => {
          if (item.id === action.payload.id && item.count > 0) {
            return {
              ...item,
              userCount: item.userCount + 1,
              userPrice: (item.userCount + 1) * item.price,
              count: item.count - 1,
            };
          }
          return item;
        });
        return { ...state, products: newProducts };
      }
      const newProducts = state.products.map((item) => {
        if (item.id === action.payload.id && item.userCount > 0) {
          return {
            ...item,
            userCount: item.userCount - 1,
            userPrice: (item.userCount - 1) * item.price,
            count: item.count + 1,
          };
        }
        return item;
      });
      return { ...state, products: newProducts };
    },
    deleteProduct: (state, action: PayloadAction<{ id: number }>) => {
      return {
        ...state,
        productCount: state.productCount - 1,
        products: state.products.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    },
    totalPrice: (state) => {
      return {
        ...state,
        totalPrice: state.products.reduce((a, b) => a + b.userPrice, 0),
      };
    },
  },
});

export default cartReducer.reducer;

export const { addPoductList, toggleAmount, deleteProduct, totalPrice } =
  cartReducer.actions;
