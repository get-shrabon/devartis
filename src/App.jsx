import { Outlet } from "react-router-dom";
import "./App.css";

import Header from "./components/shared-compo/Header";
import Footer from "./components/shared-compo/Footer";

function App() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  );
}

export default App;
