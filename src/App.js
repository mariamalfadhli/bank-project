import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import "./App.css";
import Register from "./pages/Register";
import Login from "./pages/Login";
import User from "./pages/Users";
import UserContext from "./context/UserContext";
import { useEffect, useState } from "react";
import { checkToken } from "./api/auth";

function App() {
  const [user, setUser] = useState(false);
  useEffect = () => {
    setUser(checkToken());
  };
  return (
    <UserContext.Provider value={[user, setUser]}>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Register" element={<Register />} />
          <Route path="Login" element={<Login />} />
          <Route path="Users" element={<User />} />
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
