import { createSlice } from "@reduxjs/toolkit";

const cartData = JSON.parse(localStorage.getItem("cart"))
  ? JSON.parse(localStorage.getItem("cart"))
  : [];
const wishlist = JSON.parse(localStorage.getItem("wishlist"))
  ? JSON.parse(localStorage.getItem("wishlist"))
  : [];

const ProductsSlice = createSlice({
  name: "productsData",
  initialState: {
    products: [],
    showModal: false,
    modalData: [],
    wishlist: wishlist,
    cartData: {
      cart: cartData,
      totalQuantity: 0,
      totalAmount: 0,
    },
  },
  reducers: {
    addProducts: (state, action) => {
      state.products = [...state.products, ...action.payload];
    },
    changeModal: (state, action) => {
      state.showModal = !state.showModal;
    },
    getData: (state, action) => {
      const id = action.payload;
      state.modalData = state.products.find((product) => product.id === id);
    },
    updateWishList: (state, action) => {
      const id = action.payload;
      state.wishlist = [
        ...state.wishlist,
        ...state.products.filter((product) => product.id === id),
      ];
      localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
    },
    removeFromWishlist: (state, action) => {
      const removedCartItem = state.wishlist.filter(
        (wishlistItem) => wishlistItem.id !== action.payload
      );
      state.wishlist = removedCartItem;
      localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
    },
    getCartData: (state, action) => {
      const id = action.payload;
      state.cartData.cart = [
        ...state.cartData.cart,
        { ...state.products.find((product) => product.id === id), qty: 1 },
      ];
      localStorage.setItem("cart", JSON.stringify(state.cartData.cart));
    },
    increaseQty: (state, action) => {
      const itemIndex = state.cartData.cart.findIndex(
        (cartItem) => cartItem.id === action.payload
      );
      state.cartData.cart[itemIndex].qty += 1;
      localStorage.setItem("cart", JSON.stringify(state.cartData.cart));
    },
    decreaseQty: (state, action) => {
      const itemIndex = state.cartData.cart.findIndex(
        (cartItem) => cartItem.id === action.payload
      );
      if (state.cartData.cart[itemIndex].qty > 1) {
        state.cartData.cart[itemIndex].qty -= 1;
      } else if (state.cartData.cart[itemIndex].qty === 1) {
        state.cartData.cart[itemIndex].qty = 1;
      }
      localStorage.setItem("cart", JSON.stringify(state.cartData.cart));
    },
    removeItem: (state, action) => {
      const removedCartItem = state.cartData.cart.filter(
        (cartItem) => cartItem.id !== action.payload
      );
      state.cartData.cart = removedCartItem;
      localStorage.setItem("cart", JSON.stringify(state.cartData.cart));
    },
    getTotals: (state, action) => {
      let { total, quantity } = state.cartData.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, qty } = cartItem;
          const itemTotal = price * qty;

          cartTotal.total += itemTotal;
          cartTotal.quantity += qty;
          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      state.cartData.totalQuantity = quantity;
      state.cartData.totalAmount = total;
    },
  },
});

export const productsAction = ProductsSlice.actions;
export default ProductsSlice;
