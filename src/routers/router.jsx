import IndexPage from '../pages/IndexPage';
import RootLayout from '../Layout/RootLayout';
import ContactPage from '../pages/ContactPage';
import AboutPage from '../pages/AboutPage';
import ProductPage from '../pages/ProductPage';
import ProductDetailPage from '../pages/ProductDetailPage';
import { createBrowserRouter } from 'react-router-dom';
import {SlidesLoader} from '../Loaders/SlidesLoader'
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <IndexPage />, loader:SlidesLoader },
      { path: 'contact', element: <ContactPage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'product', element: <ProductPage /> },
      { path: 'product/:id', element: <ProductDetailPage /> },
    ],
  },
]);

export default router;
