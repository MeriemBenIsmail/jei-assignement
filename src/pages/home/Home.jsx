import React from 'react';
import './home.css';
import UserList from '../userList/UserList';
import '../../theme.css';

import { Link } from 'react-router-dom';

export default function Home() {
  return (
     <div className="home container">
     <button type="button" class="btn btn-primary homeBtn"><Link to='/'>Home</Link></button>
     <UserList />
     
    </div>
  )
}
