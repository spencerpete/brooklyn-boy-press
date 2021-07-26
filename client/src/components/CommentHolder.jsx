import React from 'react';
import Comment from './Comment';

export default function CommentHolder(props) {
  const { comment, currentUser, allComments } = props;
  return (
    <div>
      <Comment
        author={comment.user}
        currentUser={currentUser}
        content={comment.content}
        comment={comment}
        allComments={allComments}
      />
    </div>
  );
}
