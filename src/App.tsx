import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import { useState } from "react";
import LoginForm from "./components/login-form";
import { Route, Routes } from "react-router-dom";
import HomepageScreen from "./screens/homepage";
import LoginpageScreen from "./screens/loginpage";

function App() {
  const [counter, setCounter] = useState(0);

  const counterOnePlus = () => {
    setCounter(counter + 1);
  };

  return (
    <>
      <Header
        counterChange={counterOnePlus}
        title="Awesome Music Store"
        date={new Date().toISOString()}
      />
      <Routes>
        <Route path="/" element={<HomepageScreen/>} />
        <Route path="/login" element={<LoginpageScreen/>} />
      </Routes>

      <Footer counter={counter} />
    </>
  );
}

export default App;
