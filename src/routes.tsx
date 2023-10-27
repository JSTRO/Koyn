import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Login from './components/Login';
import SignUp from './components/SignUp';

const AppRoutes: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState('');
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<App currentUser={currentUser} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>} />
        <Route path="/login" element={<Login setCurrentUser={setCurrentUser} setIsLoggedIn={setIsLoggedIn}/>} />
        <Route path="/" element={<Login setCurrentUser={setCurrentUser} setIsLoggedIn={setIsLoggedIn}/>} />
        <Route path="/signup" element={<SignUp setCurrentUser={setCurrentUser}/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
