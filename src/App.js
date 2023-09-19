import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import "./index.css";
import Admin from "./pages/admin/Admin";
import Footer from "./usables/Footer";
import RoutePrivate from "./pages/admin/RoutePrivate";
import { Dynamic } from "./context/ToDynamicContext";
import PopUp from "./usables/PopUp";
import Alert from "./components/Alert";
import Spin from "./components/Spin";
import { useEffect } from "react";
function App() {
  const { popChange } = Dynamic();
  const { alert } = Dynamic();
  const { spin } = Dynamic();
  const { setSpin } = Dynamic();
  // useEffect(() => {
  //   setSpin(false);
  // }, []);

  return (
    <>
      {popChange && <PopUp />}
      {alert && <Alert />}
      {spin && <Spin />}
      {/* <Alert /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/admin"
          element={
            <RoutePrivate>
              <Admin />
            </RoutePrivate>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
