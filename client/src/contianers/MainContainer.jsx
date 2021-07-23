import React, { useState, useEffect } from 'react';
import { getAllPosts } from '../services/post';

export default function MainContainer(props) {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const postData = await getAllPosts();
      setPostList(postData);
    };
    fetchPosts();
  }, []);

  return (
    <div>
      {postList.map(post => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  );
}
