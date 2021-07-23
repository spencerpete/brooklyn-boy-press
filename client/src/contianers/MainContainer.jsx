import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { getAllPosts } from '../services/post';
import { getAllComments } from '../services/comment';
import ArticleList from '../screens/ArticleList';
import ArticlePage from '../screens/ArticlePage';
import Homepage from '../screens/Homepage';

export default function MainContainer(props) {
  const [postList, setPostList] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const postData = await getAllPosts();
      setPostList(postData);
    };
    const fetchComments = async () => {
      const commentData = await getAllComments();
      setComments(commentData);
    };
    fetchPosts();
    fetchComments();
  }, []);

  return (
    <div>
      <Switch>
        <Route path="/articles/:id">
          <ArticlePage comments={comments} />
        </Route>
        <Route path="/articles">
          <ArticleList postList={postList} />
        </Route>
        <Route>
          <Homepage />
        </Route>
      </Switch>
    </div>
  );
}
