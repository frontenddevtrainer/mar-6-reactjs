import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import { useState } from "react";

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
      <Footer counter={counter}/>
    </>
  );
}

export default App;
