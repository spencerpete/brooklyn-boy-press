import React from 'react';
import Comment from './Comment';

export default function CommentHolder(props) {
  const { comment, currentUser, allComments, handleCreateChild, handleDelete } = props;
  return (
    <div className="w-7/12 m-auto">
      <Comment
        author={comment.user}
        currentUser={currentUser}
        content={comment.content}
        comment={comment}
        allComments={allComments}
        handleCreateChild={handleCreateChild}
        handleDelete={handleDelete}
      />
    </div>
  );
}
