import express from "express";
import passport from "passport";
import { myProfile } from "../controllers/user.js";
import { logout } from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";
import { getMyOrders, placeOrder, getOrderDetails, processOrder,getAdminOrders, placeOrderOnline, paymentVerification } from "../controllers/order.js";
import { authorizeAdmin } from "../middlewares/auth.js";

const router = express.Router();

router.post("/createorder",isAuthenticated,placeOrder);
router.post("/createorderonline",isAuthenticated,placeOrderOnline);
router.post("/paymentverification",isAuthenticated,paymentVerification);
router.get("/myorders",isAuthenticated,getMyOrders);
router.get("/order/:id",isAuthenticated,getOrderDetails);
router.get("/admin/orders",isAuthenticated,authorizeAdmin,getAdminOrders);
router.get("/admin/orders/:",isAuthenticated,authorizeAdmin,processOrder);

export default router;