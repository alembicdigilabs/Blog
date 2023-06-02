import React from 'react'
import { Link } from 'react-router-dom';

const posts = [
  {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    "image":"https://dummyimage.com/600x400/b0b0b0/ffffff&text=Post+image"
  },
  {
    "userId": 2,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
    "image":"https://dummyimage.com/600x400/b0b0b0/ffffff&text=Post+image"
  },
  {
    "userId": 2,
    "id": 3,
    "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
    "image":"https://dummyimage.com/600x400/b0b0b0/ffffff&text=Post+image"
  },
  {
    "userId": 4,
    "id": 4,
    "title": "eum et est occaecati",
    "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
    "image":"https://dummyimage.com/600x400/b0b0b0/ffffff&text=Post+image"
  },
];

const Home = () => {
  return (
    <div className='home'>
      <div className="posts">
        <div className="row"> 
        
          {posts.map(post => (
            <div className="col-md-4 mb-3"  key={post.id}>
              <div className="post">
                <Link to={"/post/"+post.id}>
                <div className="post_content">
                  <img src={post.image} alt="image" className='post_thumb'/>
                  <h5>{post.title}</h5>
                  <p>{post.body}</p>
                </div>
                </Link>
              </div>
            </div>
          ))}

        </div> 
        
      </div>
      
    </div>
  )
}

export default Home;

