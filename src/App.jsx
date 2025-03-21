import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Registration from './components/Registration';
import Home from './components/Home';
import Login from './components/Login';
import UpdateUser from './components/UpdateUser'; 
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/update/:userId"
          element={
            <ProtectedRoute>
              <UpdateUser />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
