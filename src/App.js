import { Route, Routes } from "react-router-dom";
import "animate.css";
import Home from "./pages/home/Home";
import "./index.css";
import Admin from "./pages/admin/Admin";
import Footer from "./usables/Footer";
import RoutePrivate from "./pages/admin/RoutePrivate";
import { Dynamic } from "./context/ToDynamicContext";
import PopUp from "./usables/PopUp";
import Alert from "./components/Alert";
import Spin from "./components/Spin";
function App() {
  const { popChange } = Dynamic();
  const { alert } = Dynamic();
  const { spin } = Dynamic();

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
