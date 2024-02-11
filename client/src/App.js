import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Topbar from "./components/Topbar/Topbar";
import Home from "./Pages/Home/Home"; // Change the import to use lowercase initial letter
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Settings from "./Pages/Settings/Settings";
import Single from "./Pages/Single/Single";
import Write from "./Pages/Write/Write";
import { useContext } from "react";
import { Context } from "./context/Context";

function App() {
  const {User }=useContext(Context);
  return (
    <Router>
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Posts" element={<Home />} />
        <Route path="/Register" element={User ? <Home /> : <Register />} />
        <Route path="/Login" element={User ? <Home /> : <Login />} />
        <Route path="/Post/:id" element={<Single />} />
        <Route path="/Write" element={User ? <Write /> : <Login />} />
        <Route path="/Settings" element={User ? <Settings /> : <Login />} />
      </Routes>
    </Router>
  );
}

export default App;
