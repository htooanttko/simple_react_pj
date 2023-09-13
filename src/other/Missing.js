import React from 'react';
import { Link } from 'react-router-dom';

const Missing = () => {
  return (
    <div className=' col-4 offset-4 text-center'>
      <h4 className=' mt-5 pt-5'>404 Not Found</h4>
      <p>Well, this is disapointing</p>
    <Link to='/'><span className=' text-primary text-decoration-underline'>here is our home page</span></Link>
    </div>
  )
}

export default Missing