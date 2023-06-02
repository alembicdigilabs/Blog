import React from 'react';
import { Link } from 'react-router-dom';

export const Single = () => {
  return (
    <div className='single'>
      <div className="container">
        
        <div className="row">

          <div className="col-md-8">
            <img src="https://dummyimage.com/600x400/b0b0b0/ffffff&text=Post+image" alt="single" className="img-fluid" />
            <p className='my-3'>
              <span>User</span>
              <small>  
                Posted on 2 days ago 
                <Link to="/write" className='ml-3 badge badge rounded-pill bg-secondary text-light'>Edit</Link>
                <Link to="/delete" className='ml-3 badge badge rounded-pill bg-danger'>Delete</Link> 
                </small>
              </p>
            <h4>Title</h4>
            <p>Content</p>
          </div>

          <div className="col-md-4">
            <h5>Related Post</h5>
              <div className="post" style={{height:'auto'}}>
                <Link to="#">
                <div className="post_content">
                  <img src="https://dummyimage.com/600x400/b0b0b0/ffffff&text=Post+image" alt="image" className='post_thumb'/>
                  <h5>Title</h5>
                  <p>Details</p>
                </div>
                </Link>
              </div>
          </div>

        </div>

      </div>
    </div>
  )
}
export default Single;