// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Head from './components/main/Head';
import Aboutus from './pages/Aboutus';
import Home from './pages/Home';
import Contactus from './pages/Contactus';
import Artists from './pages/Artists';
import LoginPage from './pages/Login';
import AdminPanel from './pages/AdminPanel';


const App = () => {
  return (
<>
      <Head></Head>
    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/aboutus" element={<Aboutus />} />
      <Route path="/contactus" element={<Contactus />} />
      <Route path="/talent" element={<Artists />} />
      <Route path="/adminlogin" element={<LoginPage />} />
      <Route path="/admin-panel" element={<AdminPanel />} />
    </Routes>
</>
  );
};

export default App;
