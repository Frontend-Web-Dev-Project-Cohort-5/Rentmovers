import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import Profile from "./pages/Profile";
import Properties from "./pages/Properties";
import About from "./pages/About";
import Error404 from "./pages/Error404";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import "./sass/App.css";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="properties" element={<Properties />} />
        <Route path="about" element={<About />} />
        <Route path="signin" element={<Signin />} />
        <Route path="signup" element={<Signup />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </>

    // function App() {
    //   return (
    //     <Home />

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
};
export default App;
