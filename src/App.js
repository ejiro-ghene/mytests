import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Menu from './components/Menu';
import Footer from './components/footer';
import Subscribe from './components/subscribe';

// PAGES 
import Home from './pages/Home';
import Index from './pages/Index';
import Journal from './pages/Journal';
import productDesigners from './pages/productDesigners';
import SoftwareDevelopers from './pages/SoftwareDevelopers';
import Faq from './pages/Faq';
import Apply from './pages/Apply';


function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Menu />
      
      <Switch>
        <Route path='/' exact component={Index} />
        <Route path='/home' component={Home} />
        <Route path='/journal' component={Journal} />
        <Route path='/productdesigners' component={productDesigners} />
        <Route path='/softwaredevelopers' component={SoftwareDevelopers} />
        <Route path='/faq' component={Faq} />
        <Route path='/apply' component={Apply} />
      </Switch>
      <Subscribe/>
      <Footer/>
    </Router>
    
    </>
  );
}

export default App;


