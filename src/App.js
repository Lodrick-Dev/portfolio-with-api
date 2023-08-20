import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import "./index.css";
import Admin from "./pages/admin/Admin";
import Footer from "./usables/Footer";
import RoutePrivate from "./pages/admin/RoutePrivate";
import { Dynamic } from "./context/ToDynamicContext";
import PopUp from "./usables/PopUp";
function App() {
  const { popChange } = Dynamic();
  return (
    <>
      {popChange && <PopUp />}
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
