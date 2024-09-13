import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import SessionContext from "context/sessionContext";
import CartModal from "./modals/CartModal";
import ModalWrapper from "./modals/ModalWrapper";
import MobileMenuModal from "./modals/MobileMenuModal";

const NavBar = () => {
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { username, signOut } = useContext(SessionContext);

  return (
    <>
      <nav
        className="flex justify-center bg-emerald-800 font-lato"
        onMouseLeave={() => setUserMenuOpen(false)}
      >
        <div className="flex items-center justify-between w-full max-w-5xl px-8 py-2">
          <Link to="/plants">
            <div className="flex flex-col items-center text-2xl text-white font-playfair">
              <img
                className="w-10"
                src="https://static-task-assets.react-formula-staging.com/capstone_logo_light.png"
              />
              Rica&apos;s Plants
            </div>
          </Link>
          <div className="justify-end flex-1 hidden sm:flex">
            <div className="relative min-w-32">
              <button
                className="flex items-center text-emerald-200"
                onClick={() => setUserMenuOpen(true)}
              >
                <i className="mr-2 text-xl fa-solid fa-user"></i>
                {username}
              </button>
              {userMenuOpen && (
                <div className="absolute left-0 mt-20 bg-white bottom-[-46px] rounded-md shadow-md">
                  <button
                    className="px-4 py-2 text-slate-500 hover:text-emerald-700"
                    onClick={signOut}
                  >
                    <i className="mr-2 fa-solid fa-arrow-right-from-bracket"></i>
                    sign out
                  </button>
                </div>
              )}
            </div>
            <button
              className="flex items-center text-emerald-200"
              onClick={() => setCartOpen(true)}
            >
              <i className="mr-2 text-xl fa-solid fa-cart-shopping"></i>
              cart
            </button>
          </div>
          <button 
            className="flex sm:hidden"
            onClick={() => setMobileMenuOpen(true)}
          >
            <i className="text-4xl fa-solid fa-bars text-emerald-400"></i>
          </button>
        </div>
      </nav>
      <ModalWrapper isOpen={cartOpen} onCloseClick={() => setCartOpen(false)}>
        <CartModal setCartOpen={setCartOpen} />
      </ModalWrapper>
      <ModalWrapper isOpen={mobileMenuOpen} onCloseClick={() => setMobileMenuOpen(false)}>
        <MobileMenuModal 
          onCartOpenClick={() => {
            setCartOpen(true);
            setMobileMenuOpen(false);
          }}
        />
      </ModalWrapper>
    </>
  );
};

export default NavBar;
