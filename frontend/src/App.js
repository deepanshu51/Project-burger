import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import "./styles/App.scss";
import "./styles/home.scss";
import "./styles/header.scss";
import "./styles/founder.scss";
import "./styles/menu.scss";
import "./styles/footer.scss";
import "./styles/contact.scss";
import "./styles/cart.scss";
import "./styles/shipping.scss";
import "./styles/confirmOrder.scss";
import "./styles/paymentSuccess.scss";
import "./styles/login.scss";
import "./styles/profile.scss";
import "./styles/table.scss";
import "./styles/orderDetails.scss";
import "./styles/dashboard.scss";
import "./styles/about.scss";
import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { loadUser } from "./redux/actions/user.js";
import toast,{Toaster} from "react-hot-toast";
import {ProtectedRoute} from "protected-route-react";


import Home from "./components/home/Home.jsx";
import Header from "./components/layout/Header.jsx";
import Footer from "./components/layout/Footer.jsx";
import Contact from "./components/contact/Contact.jsx";
import Cart from "./components/cart/Cart.jsx";
import Shipping from "./components/cart/Shipping.jsx";
import ConfirmOrder from "./components/cart/ConfirmOrder.jsx";
import PaymentSuccess from "./components/cart/PaymentSuccess.jsx";
import Login from "./components/login/Login.jsx";
import Profile from "./components/profile/Profile.jsx";
import MyOrders from "./components/myOrders/MyOrders.jsx";
import OrderDetails from "./components/myOrders/OrderDetails.jsx";
import Dashboard from "./components/admin/Dashboard.jsx";
import Users from "./components/admin/Users.jsx";
import Orders from "./components/admin/Orders.jsx";
import About from "./components/about/About.jsx";
import NotFound from "./components/layout/NotFound.jsx";

function App() {
      const dispatch = useDispatch();
      const {error,message,isAuthenticated,user} = useSelector(
        (state)=>state.auth
      );

      useEffect(()=>{
        dispatch(loadUser());
      },[dispatch]);

      useEffect(()=>{
        if(error){
          toast.error(error);
          dispatch({
            type: "clearError",
          });
        }
        if(message){
          toast.success(message);
          dispatch({
            type: "clearMessage",
          });
          
      }
    },[dispatch,error,message]);
  return (
    <Router>
      <Header isAuthenticated={isAuthenticated}/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>  
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/paymentsuccess" element={<PaymentSuccess/>}/>
        <Route path="/login" element={
          <ProtectedRoute isAuthenticated={!isAuthenticated} redirect="/me">
          <Login/>
          </ProtectedRoute>}/>

        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
        <Route path="/me" element={<Profile/>}/>
        <Route path="/shipping" element={<Shipping/>}/>
        <Route path="/confirmorder" element={<ConfirmOrder/>}/>
        <Route path="/myorders" element={<MyOrders/>}/>
        <Route path="/order/:id" element={<OrderDetails/>}/>
        </Route>
        
        <Route element={<ProtectedRoute 
        isAuthenticated={isAuthenticated}
        adminRoute={true}
        isAdmin={user && user.role==="admin"}
        redirectAdmin="/me"
        />}>
        <Route path="/admin/dashboard" element={<Dashboard/>}/>
        <Route path="/admin/users" element={<Users/>}/>
        <Route path="/admin/orders" element={<Orders/>}/>   
        </Route>
        
        
        <Route path="*" element={<NotFound/>}/>  
      </Routes>
      <Footer/>
      <Toaster/>
    </Router>
  );
}

export default App;
