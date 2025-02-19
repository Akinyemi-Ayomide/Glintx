import { useEffect, useState } from 'react';
import menu1 from '../assets/menu1.png';
import { Link } from 'react-router-dom';
import logo from '../assets/logowhite.png';
const Navbar = () => {
  const [icon, setIcon] = useState(false);
  const [scroll, setScroll] = useState(false);
  const handleClick = () => {
    setIcon(!icon);
  };
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScroll(true);
      console.log(true);
    } else setScroll(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className="">
      <div
        className={`fixed flex flex-row fixed top-0  w-full justify-between px-6 z-30 items-center  text-white py-4 ${
          scroll ? 'bg-[#380152] shadow-md transition-all' : 'text-[#ffc30a] '
        }`}
      >
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>

        <div className="hidden md:flex flex-row items-center justify-between gap-5">
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <img
          src={menu1}
          alt=""
          className="w-5 md:hidden"
          onClick={handleClick}
        />
      </div>

      {/*mobile view*/}
      <div
        onClick={handleClick}
        className={
          icon
            ? ' inset-0 text-white bg-gradient-to-r from-[#380152] to-[#6a0dad] min-h-screen flex items-center fixed top-0 w-full h-screen z-30 transition-transform'
            : 'hidden'
        }
      >
        <div
          className="flex flex-col items-center justify-center m-auto gap-4"
          onClick={handleClick}
        >
          <Link to="/about" className="bg-brandYellow py-2 px-7 rounded-full">
            About
          </Link>
          <Link to="/contact" className="bg-brandYellow py-2 px-7 rounded-full">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
