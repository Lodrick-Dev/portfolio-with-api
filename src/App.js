import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import "./index.css";
import Admin from "./pages/admin/Admin";
import Footer from "./usables/Footer";
import RoutePrivate from "./pages/admin/RoutePrivate";
import { Dynamic } from "./context/ToDynamicContext";
import PopUp from "./usables/PopUp";
import Alert from "./components/Alert";
function App() {
  const { popChange } = Dynamic();
  const { alert } = Dynamic();
  return (
    <>
      {popChange && <PopUp />}
      {alert && <Alert />}
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
