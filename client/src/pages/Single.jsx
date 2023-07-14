import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Single = () => {

  const [posts, setPosts] = useState([]);

  const location = useLocation();
  const postId = location.pathname.split("/")[2];

  useEffect(() => { 
    const fetchData = async () => {
      try{
        const res = await axios.get(`/posts/${postId}`);
        setPosts(res.data);
        // console.log(res);
      }catch(err){
        console.log(err);
      }
    }
    fetchData();
  }, [postId]);


  return (
    <div className='single'>
      <div className="container">
        
        <div className="row">
        {console.log(posts)}
          <div className="col-md-8">
            <img src={posts.img} alt="single" className="img-fluid" />
            <p className='my-3'>
              <span>{posts.username} </span>
              <small>  
                Posted on {posts.post_date}  &nbsp;
                <Link to="/write" className='ml-3 badge badge rounded-pill bg-secondary text-light'>Edit </Link> &nbsp;
                <Link to="/delete" className='ml-3 badge badge rounded-pill bg-danger'>Delete </Link> 
                </small>
              </p>
            <h4>{posts.title}</h4>
            <p>{posts.body}</p>
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