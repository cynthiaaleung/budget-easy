import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route, Redirect } from 'react-router-dom';
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import './App.css';

function App() {
  return (
    <Fragment>
      <Router>
        <div className="container">
          <Routes>
            <Route 
              exact 
              path="/login" 
              element={<Login />}
            />
            <Route 
              exact 
              path="/register" 
              element={<Register />}
            />
            <Route 
              exact 
              path="/dashboard" 
              element={<Dashboard />}
            />
          </Routes>
        </div>
      </Router>
    </Fragment>
  );
}

export default App;
