import React from 'react';
import Axios from 'axios';
import { useState,useEffect} from 'react';

import { Link } from 'react-router-dom';

export default function PostList(props) {

  const [post,setPost] = useState([]);
  const [postFilter,setPostFilter] = useState([]);


  const getPosts=()=>{
    
   
    Axios.get('https://jsonplaceholder.typicode.com/posts/').then( (response) => {
    setPost(response.data);
    const filterP = post.filter((post)=> post.userId == props.id);
    const filterComp = filterP.slice(0,5);
    setPostFilter(filterComp);
  })
   .catch((error) => {
     console.error(error);
   });
  };

  {getPosts()}
  return (

    
    postFilter.map((val,key) => {
      return(
        <li class="list-group-item"><Link to={'/post/'+val.id}>PostId: {val.id}</Link></li>
      );
    })
  )
}
