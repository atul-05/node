import express from "express";
import {products,getindex,
    getCart,getCheckout,getAllOrders,
    productDaetails,postCart,deleteCartItem} from "../controllers/shop";
import path from "path";
const route = express.Router();




route.get("/",getindex);
route.get("/product",products);
route.get("/products/:productId",productDaetails);
route.post("/cart",postCart);
route.get("/cart",getCart);
route.post("/cart-delet-Item",deleteCartItem);
// route.get("/product-details",);
route.get("/checkout",getCheckout);
route.get("/orders",getAllOrders);



export default route;
