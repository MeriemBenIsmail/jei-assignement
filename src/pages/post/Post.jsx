import React from 'react';
import { useParams } from "react-router";
import { useState,useEffect } from 'react';
import Axios from 'axios';
import './post.css';
import { Link } from 'react-router-dom';

export default function Post() {
  const { id } = useParams();
  const [post,setPost] = useState([]);

  const handleDelete = () => {

  }
  const handleEdit = () => {

  }

  useEffect(() => {
        
    Axios.get('https://jsonplaceholder.typicode.com/posts/'+{id}.id).then( (response) => {

    setPost(response.data);
     

   })
  .catch((error) => {
    console.error(error);
  });
  
  },[]);
  return (
    <div className="container post">
      <button type="button" class="btn btn-primary col"><Link to='/'>Home</Link></button>
            <div className="row">
              <div class="card mb-3">
                <h3 class="card-header">Post Number {post.id}</h3>
                <div class="card-body">
                  <h5 class="card-title">Title</h5>
                  <h6 class="card-subtitle text-muted">{post.title}</h6>
                </div>
                <div className="card-body">
                  
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">Posted By User Number : {post.userId}</li>
                    <li class="list-group-item">Body: {post.body}</li>
                    
                  </ul>
                  </div>
                
                <div className="row container">
                  <button type="button" class="btn btn-primary col" onClick={handleDelete}>Delete Post</button>
                  <button type="button" class="btn btn-secondary col" onClick={handleEdit}>Edit Post</button>
                </div>
                
      
              </div>
            </div>
     
    </div>
  
  )
}
