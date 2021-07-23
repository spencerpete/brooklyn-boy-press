import React, { useState } from 'react';

export default function SignIn(props) {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const { username, password, email } = formData;
  const { handleSignIn } = props;
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
        handleSignIn(formData);
      }}
    >
      <label>
        Username
        <input name="username" type="text" value={username} onChange={handleChange} />
      </label>
      <label>
        password
        <input name="password" type="password" value={password} onChange={handleChange} />
      </label>
      <button>Sign In</button>
    </form>
  );
}
