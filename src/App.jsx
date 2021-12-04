import React, {Fragment} from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Home from './pages/home/Home';
import HomePage from './pages/homePage/HomePage';
import User from './pages/user/User';
import { Routes } from 'react-router-dom';
import Error from './pages/error/Error';
import Post from './pages/post/Post';
import PostList from './pages/postList/PostList';


export default function App() {
  return (
    <Router>
      <Fragment>
   
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route exact path='/users' element={<Home />}/>
          <Route exact path='/user/:id' element={<User/>}/>
          <Route exact path='/post/:id' element={<Post />}/>
          <Route exact path='/postUser/1' element={<PostList id="1" />}/>
          <Route exact path='/*' element={<Error />} />
        </Routes>

      </Fragment>
    </Router>

      
  )
}

