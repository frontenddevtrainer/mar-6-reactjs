import { useState } from "react";
import Menu from "./menu";

// function abc(){}
// const abc = function(){}
// const abc = ()=>{}

// props = type of {}
// Object Destructing

const Header = ({ title, date, counterChange }) => {
  // const { title, date } = props;

  const [showMenu, setShowMenu] = useState(false);

  const menuClickHandler = () => {
    setShowMenu(!showMenu);
  };

  const plusOneCounterClick = () => {
    counterChange();
  };

  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl">
        {title}: {date}
      </h1>

      <span onClick={plusOneCounterClick}>+1</span>
      <div className="flex items-center">
        <a href="#" className="mr-6">
          <span className="material-icons"> shopping_cart </span>
        </a>

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
