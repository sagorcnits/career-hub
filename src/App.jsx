import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navber from "./components/navber/Navber";

function App() {
  return (
    <>
      <Navber></Navber>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}


export default App;
