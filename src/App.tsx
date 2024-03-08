import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import { useState } from "react";
import LoginForm from "./components/login-form";
import { Route, Routes } from "react-router-dom";
import HomepageScreen from "./screens/homepage";
import LoginpageScreen from "./screens/loginpage";
import ErrorpageScreen from "./screens/errorpage";
import AlbumDetailpageScreen from "./screens/album-detail-page";

function App() {

  return (
    <>
      <Header title="Awesome Music Store" />
      <main className="container mx-auto p-8">
        <Routes>
          <Route path="/" element={<HomepageScreen />} />
          <Route path="/albums/:id" element={<AlbumDetailpageScreen />} />
          <Route path="/login" element={<LoginpageScreen />} />
          <Route path="/404" element={<ErrorpageScreen show="404"/>} />
          <Route path="*" element={<ErrorpageScreen />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
