import React, {Fragment} from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Home from './pages/home/Home';
import HomePage from './pages/homePage/HomePage';
import User from './pages/user/User';
import { Routes } from 'react-router-dom';


export default function App() {
  return (
    <Router>
      <Fragment>
   
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route exact path='/users' element={<Home />}/>
          <Route exact path='/user/:id' element={<User/>}/>
        </Routes>

      </Fragment>
    </Router>

      
  )
}

