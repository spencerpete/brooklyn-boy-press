import React from 'react';
import { useState } from 'react';

export default function CommentInput(props) {
  const { currentUser, post_id, comment_id, handleCreate, toggleReply } = props;
  const [formData, setFormData] = useState({
    content: '',
    user_id: currentUser.id,
    post_id: post_id,
    comment_id: comment_id,
  });
  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <form
      className="w-full flex"
      onSubmit={e => {
        e.preventDefault();
        handleCreate(formData);
        toggleReply();
      }}
    >
      <label>
        <input
          className="w-full flex-grow border py-2 px-4  focus:outline-none"
          type="text"
          name="content"
          value={formData.content}
          onChange={handleChange}
        />
      </label>
      <button className="border py-2 px-4">reply</button>
    </form>
  );
}
