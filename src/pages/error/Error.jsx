import React from 'react';
import { Link } from 'react-router-dom';
import './error.css';

export default function Error() {
  return (
    <div className="container error">
      <div class="alert alert-dismissible alert-warning">
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        <h4 class="alert-heading">ERROR 404</h4>
        <p class="mb-0">Page Not Found ! Try Again Or Go Back To <Link to='/'>Home</Link> Page</p>
      </div>

    </div>
    
  )
}
