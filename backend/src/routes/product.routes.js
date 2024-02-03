import { Router } from "express";
import {
    registerProduct
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
    )

export default router;