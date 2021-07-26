import React from 'react';
import { useState } from 'react';

export default function CommentInput(props) {
  const { currentUser, post_id, comment_id } = props;
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
    <form>
      <label>
        Reply
        <input type="text" name="content" value={formData.name} onChange={handleChange} />
      </label>
    </form>
  );
}
