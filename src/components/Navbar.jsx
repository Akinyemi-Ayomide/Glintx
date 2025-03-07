import { useEffect, useState } from 'react';
import menu1 from '../assets/menu1.png';
import { NavLink } from 'react-router-dom';
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
        className={`fixed flex flex-row top-0  w-full justify-between px-6 z-30 items-center  text-white py-4 ${
          scroll ? 'bg-[#380152] shadow-md transition-all' : 'text-[#ffc30a] '
        }`}
      >
        <NavLink to="/">
          <img src={logo} alt="logo" />
        </NavLink>

        <div className="hidden md:flex flex-row items-center justify-between gap-5">
        <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
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
           <NavLink
            to="/"
            className="bg-brandYellow py-2 px-7 rounded-full"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="bg-brandYellow py-2 px-7 rounded-full"
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className="bg-brandYellow py-2 px-7 rounded-full"
          >
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
