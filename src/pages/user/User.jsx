import React from 'react';
import { useParams } from "react-router";
import { useState } from 'react';
import Axios from 'axios';
import './user.css';
import { Link } from 'react-router-dom';

export default function User() {

  const { id } = useParams();
  const [user,setUser] = useState([]);
  const [address,setAddress] = useState({});
  const [company,setCompany] = useState({});
  const [geo,setGeo] = useState({});

  const getUser = () => {
        
    Axios.get('https://jsonplaceholder.typicode.com/users/'+{id}.id).then( (response) => {
     setUser(response.data);
     setAddress(response.data.address);
     setCompany(response.data.company);
     setGeo(response.data.address.geo);

   })
  .catch((error) => {
    console.error(error);
  });
  
  }


  
  return (
      <div className="single_use">
        <h1 className="user_title">USER NUMBER {user.id}</h1>

    
        <div className="container">
          
          {getUser()}
        

            <div className="row">
              <div class="card mb-3">
                <h3 class="card-header">{user.name}</h3>
                <div class="card-body">
                  <h5 class="card-title">Username</h5>
                  <h6 class="card-subtitle text-muted">{user.username}</h6>
                </div>
                <div className="card-body">
                  <h5 class="card-title">Personal Infos</h5>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">Email: {user.email}</li>
                    <li class="list-group-item">Phone: {user.phone}</li>
                    <li class="list-group-item">Website: {user.website}</li>
                  </ul>
                  <h5 class="card-title">Address</h5>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">Street: {address.street}</li>
                    <li class="list-group-item">Suite: {address.suite}</li>
                    <li class="list-group-item">City: {address.city}</li>
                    <li class="list-group-item">Zipcode: {address.zipcode}</li>
                    <li class="list-group-item">Geo:</li>
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item">Longtitude: {geo.lng}</li>
                      <li class="list-group-item">Largitutde: {geo.lat}</li>
                    </ul>
                  </ul>
                  <h5 class="card-title">Company</h5>
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item">Name: {company.name}</li>
                      <li class="list-group-item">Catchphrase: {company.catchPhrase}</li>
                      <li class="list-group-item">Bs: {company.bs}</li>
                    </ul>
                </div>
                <div className="row container">
                  <button type="button" class="btn btn-primary col"><Link to='/users'>Go Back</Link></button>
                  <button type="button" class="btn btn-secondary col"><Link to='/'>Home</Link></button>
                </div>
                
      
              </div>
            </div>
     
    </div>
  </div>
  
      

       


  )
}
