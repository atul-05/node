import express from "express";
import {addProduct,productx,
    admingetproducts,
    geteditProduct,
    postEditProduct,postDeleteProduct} from "../controllers/admin";
import Path from "path";

const router = express.Router();

router.get("/add-product",addProduct);
router.get("/products",admingetproducts);
router.post("/product",productx);
router.post("postEditProduct")
router.get("/edit-product/:Pid",geteditProduct,);
router.post("/edit-product",postEditProduct);
router.post("/delete-product",postDeleteProduct);

export default router;