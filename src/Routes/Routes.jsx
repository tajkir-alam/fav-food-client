    import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Main from '../layout/Main';
import Home from '../Pages/Home/Home';
import Cart from '../Pages/Cart/Cart';
import Order from '../Pages/Order/Order';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: '/cart',
                element: <Cart></Cart>
            },
            {
                path: '/order',
                element: <Order></Order>
            }
        ]
    },
]);

export default router;