import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import { Route, Routes } from "react-router-dom";
import HomepageScreen from "./screens/homepage";
import LoginpageScreen from "./screens/loginpage";
import ErrorpageScreen from "./screens/errorpage";
import AlbumDetailpageScreen from "./screens/album-detail-page";
import CartpageScreen from "./screens/cartpage";
import { useContext } from "react";
import { ThemeContext, ThemeOptions } from "./context/theme";

function Content({ title }: { title: string }) {
  return <div>{title}</div>;
}

function App() {
  const { theme } = useContext(ThemeContext);

  const bgTextColor =
    theme === ThemeOptions.dark
      ? "bg-gray-900 text-white"
      : "bg-white-900 text-black";

  return (
    <>
      <Header title="Awesome Music Store" />
      <main className={`container mx-auto p-0 ${bgTextColor}`}>
        <Routes>
          <Route path="/" element={<HomepageScreen />}>
            <Route path="/content1" element={<Content title="Content 1" />} />
            <Route path="/content2" element={<Content title="Content 2" />} />
            <Route path="/content3" element={<Content title="Content 3" />} />
            <Route path="/content4" element={<Content title="Content 4" />} />
            <Route path="/content5" element={<Content title="Content 5" />} />
          </Route>

          <Route path="/albums/:id" element={<AlbumDetailpageScreen />} />
          <Route path="/login" element={<LoginpageScreen />} />
          <Route path="/cart" element={<CartpageScreen />} />
          <Route path="/404" element={<ErrorpageScreen show={"404"} />} />
          <Route path="*" element={<ErrorpageScreen />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
