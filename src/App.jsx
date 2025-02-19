import React, { Suspense } from 'react';
import IndexPage from './pages/IndexPage';
import ErrorBoundary from './components/ErrorBoundary';
import NavbarSkeleton from './Skeleton/NavbarSkeleton';
import FooterSkeleton from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import ProductPage from './pages/ProductPage';
import ProductDetailPage from './pages/ProductDetailPage';

const Navbar = React.lazy(() => import('./components/Navbar'));
const Footer = React.lazy(() => import('./components/Footer'));
const App = () => {
  return (
    // color #380152 #ffc30a
    <div className=" text-white w-full">
      <ErrorBoundary>
        <Suspense fallback={<NavbarSkeleton />}>
          <div className="fixed z-10 top-0 left-0 w-full">
            <Navbar />
          </div>
        </Suspense>
      </ErrorBoundary>
      <div className="min-h-screen ">
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
        </Routes>
      </div>
      <ErrorBoundary>
        <Suspense fallback={<FooterSkeleton />}>
          <Footer />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default App;
