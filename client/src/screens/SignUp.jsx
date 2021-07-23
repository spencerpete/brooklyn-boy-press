import React, { useState } from 'react';

export default function SignUp(props) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const { username, password, email } = formData;
  const { handleSignUp } = props;
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
        handleSignUp(formData);
      }}
    >
      <label>
        Username
        <input name="username" type="text" value={username} onChange={handleChange} />
      </label>
      <label>
        Email
        <input name="email" type="text" value={email} onChange={handleChange} />
      </label>
      <label>
        password
        <input name="password" type="password" value={password} onChange={handleChange} />
      </label>
      <button>Sign Up</button>
    </form>
  );
}
