import React from 'react';
import CommentHolder from './CommentHolder';

export default function CommentSection(props) {
  const { currentUser, allComments, articleComments, id } = props;

  return (
    <div>
      {articleComments.map(c => (
        <CommentHolder comment={c} allComments={allComments} currentUser={currentUser} />
      ))}
    </div>
  );
}
