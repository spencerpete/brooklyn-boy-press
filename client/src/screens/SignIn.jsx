import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function SignIn(props) {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const { username, password } = formData;
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
      <h3>
        <Link to="/sign-up">Sign Up </Link>/ Sign in
      </h3>
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
