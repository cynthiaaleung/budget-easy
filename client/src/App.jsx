import { Fragment, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import './App.css';

function App() {

  const [authenticated, setAuthenticated] = useState(false);

  const setAuth = boolean => {
    setAuthenticated(boolean);
  }

  return (
    <Fragment>
      <Router>
        <div className="container">
          <Routes>
            <Route 
              exact 
              path="/login" 
              element={authenticated ? <Navigate to="/dashboard" /> : <Login setAuth={setAuth}/>}
            />
            <Route 
              exact 
              path="/register" 
              element={authenticated ? <Navigate to="/login" /> : <Register setAuth={setAuth}/>}
            />
            <Route 
              exact 
              path="/dashboard" 
              element={authenticated ? <Dashboard setAuth={setAuth}/> : <Navigate to="/login" />}
            />
          </Routes>
        </div>
      </Router>
    </Fragment>
  );
}

export default App;
