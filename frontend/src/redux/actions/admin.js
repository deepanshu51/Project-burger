import axios from "axios";
// server
import server from "../store"

export const getAdminStats = () => async(dispatch)=>{
    try{
      dispatch({type : "getDashboardStatsRequest"});
     //server
      const {data} = await axios.get(`${server}/admin/stats`,{
        withCredentials : true,
      });

      dispatch({type: "getDashboardStatsSuccess", payload: data.orders});

    }
    catch (error){
        dispatch({type: "getDashboardStatsFail", payload: error.response.data.message,});
    }
};

export const getAdminUsers = () => async(dispatch)=>{
    try{
      dispatch({type : "getAdminUsersRequest"});
     //server
      const {data} = await axios.get(`${server}/admin/users`,{
        withCredentials : true,
      });

      dispatch({type: "getAdminUsersSuccess", payload: data.users});

    }
    catch (error){
        dispatch({type: "getAdminUsersFail", payload: error.response.data.message,});
    }
};

export const getAdminOrders = () => async(dispatch)=>{
    try{
      dispatch({type : "getAdminOrdersRequest"});
     //server
      const {data} = await axios.get(`${server}/admin/orders`,{
        withCredentials : true,
      });

      dispatch({type: "getAdminOrdersSuccess", payload: data.orders});

    }
    catch (error){
        dispatch({type: "ggetAdminOrdersFail", payload: error.response.data.message,});
    }
};

export const processOrder = (id) => async(dispatch)=>{
    try{
      dispatch({type : "processOrderRequest"});
     //server
      const {data} = await axios.get(`${server}/admin/orders/${id}`,{
        withCredentials : true,
      });

      dispatch({type: "processOrderSuccess", payload: data.message});

    }
    catch (error){
        dispatch({type: "processOrderFail", payload: error.response.data.message,});
    }
};