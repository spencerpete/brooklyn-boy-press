import React from 'react';
import CommentHolder from './CommentHolder';

export default function CommentSection(props) {
  const { currentUser, allComments, articleComments, handleCreateChild, handleDelete } = props;

  return (
    <div>
      {articleComments.map(c => (
        <CommentHolder
          comment={c}
          allComments={allComments}
          currentUser={currentUser}
          handleCreateChild={handleCreateChild}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
}
