import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const RootLayout = () => {
  return (
    <div>
      <Navbar />
      <div className='text-white md:mx-4'>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default RootLayout;
