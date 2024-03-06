import "./App.css";
import Header from "./components/header";

function App() {
  return (
    <>
      <Header title="Awesome Music Store" date={new Date().toISOString()} />
    </>
  );
}

export default App;
