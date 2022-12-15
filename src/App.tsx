import "./App.css";

import NavBar from "./components/nav/NavBar";
import { Footer } from "./components/footer/Footer";
import ScrollToTop from "./components/misc/ScrollToTop";
import AnimatedRoutes from "./components/misc/AnimatedRoutes";

function App() {
  return (
    <>
      <NavBar />
      <ScrollToTop>
        <AnimatedRoutes />
      </ScrollToTop>
      <Footer />
    </>
  );
}

export default App;
