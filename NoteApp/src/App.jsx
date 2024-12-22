import './App.css'
import Login from './components/Login'
import Register from './components/Register'
import {Navigate, Route, Routes } from 'react-router-dom'
import Welcome from './components/Welcome'
import PrivateRoute from './components/PrivateRoute'

function App() {
  return (
          <Routes>
              {/* Prevent access to login/register if already logged in */}
              <Route
                  path="/login"
                  element={
                      <PreventAuth>
                          <Login />
                      </PreventAuth>
                  }
              />
              <Route
                  path="/register"
                  element={
                      <PreventAuth>
                          <Register />
                      </PreventAuth>
                  }
              />
              {/* Protected welcome route */}
              <Route
                  path="/welcome"
                  element={
                      <PrivateRoute>
                          <Welcome />
                      </PrivateRoute>
                  }
              />
          </Routes>
  );
}

const PreventAuth = ({ children }) => {
  const token = localStorage.getItem('token');
  return token ? <Navigate to="/welcome" /> : children;
};

export default App;
