import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from "react-router-dom"; import './index.css';
import router from './Routes/Routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import CartLength from './providers/CartLength';

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartLength>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} ></RouterProvider>
      </QueryClientProvider>
    </CartLength>
  </React.StrictMode>,
)
