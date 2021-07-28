import React, { useState } from 'react';

export default function CommentEdit(props) {
  const { id, comment, toggleEdit, handleUpdate } = props;
  const [formData, setFormData] = useState({
    content: comment.content,
    user_id: comment.user_id,
    post_id: comment.post_id,
    comment_id: comment.comment_id,
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
        handleUpdate(id, formData);
        toggleEdit();
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
      <button className="border py-2 px-4">edit</button>
    </form>
  );
}
