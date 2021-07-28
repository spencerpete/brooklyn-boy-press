import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CommentEdit from './CommentEdit';
import CommentInput from './CommentInput';

export default function Comment(props) {
  const [clicked, setClicked] = useState(false);
  const [editing, setEditing] = useState(false);
  const {
    author,
    currentUser,
    content,
    comment,
    allComments,
    handleCreateChild,
    handleDelete,
    handleUpdate,
  } = props;
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
        handleUpdate={handleUpdate}
        handleDelete={handleDelete}
      />
    );
  });
  const toggleReply = () => setClicked(!clicked);
  const reply = (
    <div className="w-full">
      <CommentInput
        currentUser={currentUser}
        post_id=""
        comment_id={comment.id}
        handleCreate={handleCreateChild}
        toggleReply={toggleReply}
      />
      <button onClick={toggleReply}>cancel</button>
    </div>
  );
  const toggleEdit = () => setEditing(!editing);
  const edit = (
    <div className="w-full">
      <CommentEdit
        id={comment.id}
        comment={comment}
        toggleEdit={toggleEdit}
        handleUpdate={handleUpdate}
      />
    </div>
  );
  return (
    <div className="w-11/12 m-auto">
      <div className="text-left">{author?.username}</div>
      <div className="mx-2 px-2 border-l">
        {!editing ? <div className=" text-left">{content}</div> : edit}
        <div className="flex justify-end">
          {currentUser ? (
            <button className={`flex mx-2 ${clicked ? 'hidden' : ''}`} onClick={toggleReply}>
              reply
            </button>
          ) : (
            <Link to="/sign-up">reply</Link>
          )}
          {clicked && reply}
          {currentUser && currentUser?.id === author?.id ? (
            <div className="flex">
              <button onClick={toggleEdit} className="mx-2">
                edit
              </button>
              <button className="mx-2" onClick={() => handleDelete(comment.id)}>
                delete
              </button>
            </div>
          ) : (
            ''
          )}
        </div>
        {nestedComment}
      </div>
    </div>
  );
}
