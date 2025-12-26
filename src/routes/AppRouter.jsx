import React from "react";
import { createBrowserRouter } from "react-router-dom"
import Home from "../pages/Home"
import ProductList from "../pages/ProductList"

export const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path : "ProductList" ,
        element : ProductList
    }

])