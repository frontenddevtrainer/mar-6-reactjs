import { useContext } from "react";
import { ThemeContext, ThemeOptions } from "../../context/theme";

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  const bgHeader = theme === ThemeOptions.dark ? "bg-gray-800 text-white" : "bg-gray-200 text-black"


  return (
    <footer className={`${ bgHeader } p-4`}>
      <p className="text-center">Copyright 2023, Music Store</p>
    </footer>
  );
};

export default Footer;
