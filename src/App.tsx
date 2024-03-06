import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import { useState } from "react";
import Left from "./components/left";
import LoginForm from "./components/login-form";

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
      <LoginForm />
      <Footer counter={counter} />
      {/* <Left/> */}
    </>
  );
}

export default App;
