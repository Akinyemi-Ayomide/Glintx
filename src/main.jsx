import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import { RouterProvider } from 'react-router-dom';
import ProductContextProvider from './context/ProductContext.jsx';
import router from './routers/router.jsx';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProductContextProvider>
      <RouterProvider router={router} />
    </ProductContextProvider>
    ,
  </React.StrictMode>,
);
