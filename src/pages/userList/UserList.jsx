import React from 'react';
import Axios from 'axios';
import { useState } from 'react';
import './userList.css';
import { Link } from 'react-router-dom';


export default function UserList() {

  const [user,setUser] = useState([]);
  


  const getUser = () => {
        
    Axios.get('https://jsonplaceholder.typicode.com/users').then( (response) => {
     setUser(response.data);
    
   });
  
  }
  

  return (

    <div className="useList">
      <h1 className="list_title">USERS LIST</h1>

    
      <div className="container">
        <div className="row ">
        


        {getUser()}
        { user.map((val,key) => {

          return(
            <div className="col">
              <div class="card mb-3">
                <h3 class="card-header">User {val.id}</h3>
                <div class="card-body">
                  <h5 class="card-title">Name</h5>
                  <h6 class="card-subtitle text-muted">{val.name}</h6>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">Email:{val.email}</li>
                  <li class="list-group-item">Phone:{val.phone}</li>
                  <li class="list-group-item">Website:{val.website}</li>
                </ul>

                <div class="card-body">
                  <Link to={'/user/'+val.id}>More Details</Link>
                </div>
      
              </div>
            </div>
          
          );
      })}
    </div>
  </div>
  </div>
  )
}
