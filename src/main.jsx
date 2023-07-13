import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from "react-router-dom"; import './index.css';
import router from './Routes/Routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import CartLengthProvider from './providers/CartLengthProvider';

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartLengthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} ></RouterProvider>
      </QueryClientProvider>
    </CartLengthProvider>
  </React.StrictMode>,
)
