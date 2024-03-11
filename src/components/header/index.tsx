import { useContext, useState } from "react";
import Menu from "./menu";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Album } from "../../interfaces/Album";
import { ThemeContext, ThemeOptions } from "../../context/theme";

interface props {
  title: string;
}

interface reduxstate {
  cart: {
    items: Album[];
  };
}

const Header = ({ title }: props) => {
  // const { title, date } = props;

  const { theme, change } = useContext(ThemeContext);
  const bgHeader = theme === ThemeOptions.dark ? "bg-gray-800 text-white" : "bg-gray-200 text-black"

  const [showMenu, setShowMenu] = useState(false);

  const cartItems = useSelector((state: reduxstate) => {
    return state?.cart?.items;
  });

  const menuClickHandler = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className={`${bgHeader} p-4 flex justify-between items-center`}>
      <h1 className="text-2xl">
        <Link to="/">{title}</Link>
      </h1>

      <div className="flex items-center">
        <span
          onClick={() => {
            change(ThemeOptions.light);
          }}
          className="p-4"
        >
          Light
        </span>
        <span
          onClick={() => {
            change(ThemeOptions.dark);
          }}
          className="p-4"
        >
          Dark
        </span>

        <Link to="/cart" className="mr-6">
          <span className="material-icons"> shopping_cart </span>
          {cartItems.length}
        </Link>

        <div className="relative inline-block text-left">
          <button type="button" className="inline-flex items-center">
            <span className="material-icons"> account_circle </span>
            <span className="ml-2">Profile</span>
            <span className="material-icons" onClick={menuClickHandler}>
              {" "}
              arrow_drop_down{" "}
            </span>
          </button>
          {showMenu && <Menu />}
        </div>
      </div>
    </header>
  );
};

export default Header;
