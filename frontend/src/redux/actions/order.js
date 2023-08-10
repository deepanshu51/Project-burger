import axios from "axios";
import { useDispatch } from "react-redux";
//server
import server from "../store"

export const createOrder = (
        shoppingInfo,
        orderItems,
        paymentMethod,
        itemsPrice,
        taxPrice,
        shippingCharges,
        totalAmount,
        
) =>
   async(dispatch)=>{
    try{
        // const dispatch = useDispatch();
        dispatch({
            type: "createOrderRequest",
        });

        
        //server await
     const {data} = await axios.post(`${server}/createorder`,{
        shoppingInfo,
        orderItems,
        paymentMethod,
        itemsPrice,
        taxPrice,
        shippingCharges,
        totalAmount
     },
     {
        headers :{
           "Content-Type": "application/JSON",
        },
        withCredentials: true,
      });
        dispatch({
            type: "createOrderSuccess",
            payload: data.message,
        });
    }
    catch(error){
        dispatch({
            type: "createOrderFail",
            payload: error.response.data.message,
        });
    }
}

export const paymentVerification = (
    razorpay_payment_id,
    razorpay_order_id,
    razorpay_signature,
    orderOptions,
    
) =>async(dispatch)=>{

try{
    const dispatch = useDispatch();
    dispatch({
        type: "paymentVerificationRequest",
    });

    
    //server await
 const {data} = await axios.post(`${server}/paymentVerification`,{
    razorpay_payment_id,
    razorpay_order_id,
    razorpay_signature,
    orderOptions,
 },
 {
    headers :{
       "Content-Type": "application/JSON",
    },
    withCredentials: true,
  });
    dispatch({
        type: "paymentVerificationSuccess",
        payload: data.message,
    });
}
catch(error){
    dispatch({
        type: "paymentVerificationFail",
        payload: error.response.data.message,
    });
}
};

export const getMyOrders = () => async(dispatch)=>{
    try{
      dispatch({type : "getMyOrdersRequest"});

      const {data} = await axios.get(`${server}/myorders`,{
        withCredentials : true,
      });

      dispatch({type: "getmyOrdersSuccess", payload: data.orders});

    }
    catch (error){
        dispatch({type: "getMyOrdersFail", payload: error.response.data.message,});
    }
};

export const getOrderDetails = () => async(dispatch)=>{
    try{
      dispatch({type : "getOrderDetailsRequest"});
     //server
      const {data} = await axios.get(`${server}/order/:id`,{
        withCredentials : true,
      });

      dispatch({type: "getOrderDetailsSuccess", payload: data.orders});

    }
    catch (error){
        dispatch({type: "etOrderDetailsFail", payload: error.response.data.message,});
    }
};