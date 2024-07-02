import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Products from './Pages/ProductsPage';
import Users from './Pages/Users';
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import LoginPage from'./Pages/LoginPage';
import SignUpPage from './Pages/SignUpPage';
import './App.css';
import Navbar from './Layout/Navbar';
import HomePage from './Pages/HomePage';

function App() {
  return (
      <Router>
        <div className='App'>
        <Header />
        <Navbar />
        <Routes>
          <Route path='/' exact element={<HomePage />} />
          <Route path='/products' element={<Products />} />
          <Route path='/users' components={<Users/>} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignUpPage />} />
          {/* change components to element when want to render */}
        </Routes>
        <Footer />
        </div>
      </Router>
  );
}

export default App;
