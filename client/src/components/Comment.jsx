import React, { useState } from 'react';
import CommentInput from './CommentInput';

export default function Comment(props) {
  const [clicked, setClicked] = useState(false);
  const { author, currentUser, content, comment, allComments, handleCreateChild, handleDelete } =
    props;
  const subComments = allComments?.filter(subcomment => subcomment?.comment_id === comment.id);
  const nestedComment = subComments.map(comment => {
    return (
      <Comment
        comment={comment}
        content={comment.content}
        currentUser={currentUser}
        author={comment.user}
        allComments={allComments}
        handleCreateChild={handleCreateChild}
        handleDelete={handleDelete}
      />
    );
  });
  const toggleReply = () => setClicked(!clicked);
  const reply = (
    <div>
      <CommentInput
        currentUser={currentUser}
        post_id=""
        comment_id={comment.id}
        handleCreate={handleCreateChild}
      />
      <button onClick={toggleReply}>cancel</button>
    </div>
  );
  return (
    <div className="w-11/12 m-auto">
      <div className="text-left">{author?.username}</div>
      <div>{content}</div>
      <button onClick={toggleReply}>reply</button>
      {clicked && reply}
      {currentUser && currentUser?.id === author?.id ? (
        <div>
          <p>edit</p>
          <button onClick={() => handleDelete(comment.id)}>delete</button>
        </div>
      ) : (
        ''
      )}
      {nestedComment}
    </div>
  );
}
