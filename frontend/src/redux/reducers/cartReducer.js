import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    cartItems:localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems"))
    : {
        cheeseBurger: {
            quantity: 0,
            price: 200,
        },
        hamBurger: {
            quantity: 0,
            price: 500,
        },
        creamyBurger: {
            quantity: 0,
            price: 1800,
        },
    },
    
    subTotal: localStorage.getItem("cartPrices")?
    JSON.parse(localStorage.getItem("cartPrices")).subTotal : 0,
    tax: localStorage.getItem("cartPrices")?
    JSON.parse(localStorage.getItem("cartPrices")).tax : 0,
    shippingCharges: localStorage.getItem("cartPrices")?
    JSON.parse(localStorage.getItem("cartPrices")).shippingCharges : 0,
    total: localStorage.getItem("cartPrices")?
    JSON.parse(localStorage.getItem("cartPrices")).total : 0,
    shippingInfo:localStorage.getItem("shippingInfo")?
    JSON.parse(localStorage.getItem("shippingInfo")).total : {},
};

export const cartReducer = createReducer(initialState,{
    
    cheeseBurgerIncrement: (state) =>{
        state.cartItems.cheeseBurger.quantity+=1;
    },
    hamBurgerIncrement: (state) =>{
        state.cartItems.hamBurger.quantity+=1;
    },
    creamyBurgerIncrement: (state) =>{
        state.cartItems.creamyBurger.quantity+=1;
    },
    cheeseBurgerDecrement: (state) =>{
        state.cartItems.cheeseBurger.quantity-=1;
    },
    hamBurgerDecrement: (state) =>{
        state.cartItems.hamBurger.quantity-=1;
    },
    creamyBurgerDecrement: (state) =>{
        state.cartItems.creamyBurger.quantity-=1;
    },

    calculatePrice: (state) =>{
        state.subTotal =
        state.cartItems.cheeseBurger.price *
        state.cartItems.cheeseBurger.quantity +
        state.cartItems.hamBurger.price *
        state.cartItems.hamBurger.quantity +
        state.cartItems.creamyBurger.price *
        state.cartItems.creamyBurger.quantity;

        state.tax = state.subTotal*0.18;
        state.shippingCharges = state.subTotal > 1000 ? 0 : 200;
        state.total = state.subTotal + state.tax + state.shippingCharges;
    },

    emptyState: (state) =>{
        state.cartItems = {
            cheeseBurger: {
                quantity: 0,
                price: 200,
            },
            hamBurger: {
                quantity: 0,
                price: 500,
            },
            creamyBurger: {
                quantity: 0,
                price: 1800,
            },
        };

        state.subTotal =0;
        state.shippingCharges =0;
        state.tax =0;
        state.total =0;
    },

    addShippingInfo:(state,action)=>{
        state.shippingInfo={
            hNo : action.payload.hNo,
            city : action.payload.city,
            state: action.payload.state,
            country: action.payload.country,
            pinCode: action.payload.pinCode,
            phoneNo: action.payload.phoneNo,
        };
    }
});

export const orderReducer = createReducer({},{
    createOrderRequest : (state)=>{
        state.loading = true;
    },
    createOrderSuccess : (state,action)=>{
        state.loading = false;
        state.message = action.payload;
    },
    createOrderFail : (state,action)=>{
        state.loading = false;
        state.error = action.payload;
    },
    paymentVerificationRequest : (state)=>{
        state.loading = true;
    },
    paymentVerificationSuccess : (state,action)=>{
        state.loading = false;
        state.message = action.payload;
    },
    paymentVerificationFail : (state,action)=>{
        state.loading = false;
        state.error = action.payload;
    },
    clearMessage:(state)=>{
        state.message = null;
    },
    clearError:(state)=>{
        state.error = null;
    },
})