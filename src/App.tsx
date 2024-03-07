import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import { useState } from "react";
import LoginForm from "./components/login-form";
import { Route, Routes } from "react-router-dom";
import HomepageScreen from "./screens/homepage";
import LoginpageScreen from "./screens/loginpage";
import ErrorpageScreen from "./screens/errorpage";

function App() {
  const [counter, setCounter] = useState(0);

  const counterOnePlus = () => {
    setCounter(counter + 1);
  };

  return (
    <>
      <Header title="Awesome Music Store" />
      <main className="container mx-auto p-8">
        <Routes>
          <Route path="/" element={<HomepageScreen />} />
          <Route path="/login" element={<LoginpageScreen />} />
          <Route path="*" element={<ErrorpageScreen />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
