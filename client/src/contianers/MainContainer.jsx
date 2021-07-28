import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { getAllPosts } from '../services/post';
import {
  deleteComment,
  getAllComments,
  postComment,
  postSubcomment,
  putComment,
} from '../services/comment';
import ArticleList from '../screens/ArticleList';
import ArticlePage from '../screens/ArticlePage';
import ReviewList from '../screens/ReviewList';
import Homepage from '../screens/Homepage';

export default function MainContainer(props) {
  const [postList, setPostList] = useState([]);
  const [comments, setComments] = useState([]);
  const { currentUser } = props;
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
  const handleCreateParent = async formData => {
    const commentData = await postComment(formData);
    setComments(prevState => [...prevState, commentData]);
  };
  const handleCreateChild = async formData => {
    const commentData = await postSubcomment(formData);
    setComments(prevState => [...prevState, commentData]);
  };
  const handleUpdate = async (id, formData) => {
    const commentData = await putComment(id, formData);
    setComments(prevState =>
      prevState.map(comment => {
        return comment.id === id ? commentData : comment;
      })
    );
  };
  const handleDelete = async id => {
    await deleteComment(id);
    setComments(prevState => prevState.filter(comment => comment.id !== id));
  };
  return (
    <div className="flex flex-col align-center">
      <Switch>
        <Route path="/articles/:id">
          <ArticlePage
            comments={comments}
            currentUser={currentUser}
            handleCreateChild={handleCreateChild}
            handleCreateParent={handleCreateParent}
            handleUpdate={handleUpdate}
            handleDelete={handleDelete}
          />
        </Route>
        <Route path="/articles">
          <ArticleList postList={postList} />
        </Route>
        <Route path="/reviews">
          <ReviewList postList={postList} />
        </Route>
        <Route path="/">
          <Homepage posts={postList} />
        </Route>
      </Switch>
    </div>
  );
}
