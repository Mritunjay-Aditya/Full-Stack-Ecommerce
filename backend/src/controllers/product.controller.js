import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js"
import {Product} from "../models/product.model.js"
import {uploadOnCloudinary} from "../utils/cloudinary.js"
import { ApiResponse } from "../utils/ApiResponse.js";
import jwt from "jsonwebtoken"
import mongoose from "mongoose";

const registerProduct = asyncHandler( async (req, res) => {
    // Get product details from the request body
    // and validate the fields
    //then register the product
    //then send the response
    //then handle the errors


    const {id, name,category,new_price,old_price} = req.body

    if (
        [id,name,category,new_price,old_price].some((field) => field?.trim() === "")
    ) {
        throw new ApiError(400, "All fields are required")
    }

    const existedProduct = await Product.findOne({
        $or: [{ id }, { name }]
    })

    if (existedProduct) {
        throw new ApiError(409, "Product with id or name already exists")
    }
    //console.log(req.files);

    const pro_image_LocalPath = req.files?.pro_image[0]?.path;

    

    if (!pro_image_LocalPath) {
        throw new ApiError(400, "product image file is required")
    }

    const pro_image = await uploadOnCloudinary(pro_image_LocalPath)

    if (!pro_image) {
        throw new ApiError(400, "Product Image file is required")
    }
   

    const product = await Product.create({
        id,
        pro_image: pro_image.url,
        name, 
        category,
        new_price,
        old_price
    })


    const createdProduct = await Product.findById(product.id).select(
    )

    if (!createdProduct) {
        throw new ApiError(500, "Something went wrong while registering the Product")
    }

    return res.status(201).json(
        new ApiResponse(200, createdProduct, "Product registered Successfully")
    )

} )
export {
    registerProduct,
}
