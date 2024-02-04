import { Router } from "express";
console.log("running product.routes");
import {
    registerProduct,
    removeProduct,
    allProducts,
}from "../controllers/product.controller.js";
import {upload} from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router =  Router();

router.route("/addproduct").post(
    upload.fields([
        {
            name: "pro_image",
            maxCount: 1
        },
    ]),
    registerProduct
    );
router.route("/removeproduct").post(removeProduct);

router.route("/allproducts").get(allProducts);

export default router;