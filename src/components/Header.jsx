import logo from "../assets/logo.svg";
import ring from "../assets/ring.svg";
import moon from "../assets/icons/moon.svg";
import sun from "../assets/icons/sun.svg";
import shopingCart from "../assets/shopping-cart.svg";
import CardDetels from "../cine/CardDetels";
import { useContext, useState } from "react";
import { MovieContext, ThemContext } from "../context";

const Header = () => {
  const [showCard, setShowCart] = useState(false);
  const { cartData } = useContext(MovieContext);
  const { darkMode, setdarkMode } = useContext(ThemContext);
  const handelCardShow = () => {
    setShowCart(true);
  };

  const handleHideCart = () => {
    setShowCart(false);
  };
  return (
    <header>
      {showCard && <CardDetels onCloseDetle={handleHideCart}></CardDetels>}
      <nav className="container flex items-center justify-between space-x-10 py-6">
        <a href="index.html">
          <img src={logo} width="139" height="26" alt="logo" />
        </a>

        <ul className="flex items-center space-x-5">
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={ring} width="24" height="24" alt="ring" />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
              onClick={()=>setdarkMode(!darkMode)}
            >
              <img
                src={darkMode ? sun : moon}
                width="24"
                height="24"
                alt="moon"
              />
            </a>
          </li>
          <li>
            <a
              onClick={handelCardShow}
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={shopingCart} width="24" height="24" alt="shopingCart" />
              {cartData.length > 0 && (
                <span
                  className="rounded-full absolute top-[-12px] left-[28px]
                 bg-primary w-[30px] h-[30px] p-[2px] text-white text-center"
                >
                  {cartData.length}
                </span>
              )}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
