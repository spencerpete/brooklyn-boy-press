import React from 'react';
import { useState } from 'react';

export default function CommentInput(props) {
  const { currentUser, post_id, comment_id, handleCreate } = props;
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
      onSubmit={e => {
        e.preventDefault();
        handleCreate(formData);
      }}
    >
      <label>
        <input type="text" name="content" value={formData.name} onChange={handleChange} />
      </label>
      <button>reply</button>
    </form>
  );
}
