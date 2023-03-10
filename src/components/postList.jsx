import React from 'react';
import { Link } from 'react-router-dom';

const PostsLists = ({ posts }) => {
  return (
    <>

      {posts.map((post) => (
        <Link key={post.id} to={`posts/${post.id}`}>
          <h3 >{post.label}</h3></Link>))}

    </>)
}

export default PostsLists;