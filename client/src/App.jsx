import { Fragment, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import './App.css';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

function App() {

  const [authenticated, setAuthenticated] = useState(false);

  const setAuth = boolean => {
    setAuthenticated(boolean);
  }

  async function isAuth() {
    try {
      const response = await fetch("http://localhost:5000/auth/verify", {
        method: "GET",
        headers: { token: localStorage.token }
      })

      const parseRes = await response.json();
      parseRes === true ? setAuthenticated(true) : setAuthenticated(false);
    } catch (err) {
      console.error(err.message);
    }
  }
  useEffect(() => {
    isAuth();
  }, [])

  return (
    <Fragment>
      <Router>
        <div className="container">
          <Routes>
            <Route 
              exact 
              path="/login" 
              element={authenticated ? <Navigate to="/dashboard"/> : <Login setAuth={setAuth} />}
            />
            <Route 
              exact 
              path="/register" 
              element={authenticated ? <Navigate to="/login"/> : <Register setAuth={setAuth} />}
            />
            <Route 
              exact 
              path="/dashboard" 
              element={authenticated ? <Dashboard setAuth={setAuth} /> : <Navigate to="/login"/>}
            />
          </Routes>
        </div>
      </Router>
    </Fragment>
  );
}

export default App;
