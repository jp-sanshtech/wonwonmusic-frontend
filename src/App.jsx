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
import classes from "./components/css/Home.module.css";



const App = () => {
  return (
<>
      <Head></Head>
      <div className={classes.links}>

    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/aboutus" element={<Aboutus />} />
      <Route path="/contactus" element={<Contactus />} />
      <Route path="/artists" element={<Artists />} />
      <Route path="/adminlogin" element={<LoginPage />} />
      <Route path="/admin-panel" element={<AdminPanel />} />
    </Routes>
      </div>
</>
  );
};

export default App;
