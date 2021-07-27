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
    <div className="mt-8 w-4/12 m-auto">
      <form
        className="flex flex-col my-10 shadow bg-gray-200"
        onSubmit={e => {
          e.preventDefault();
          handleSignIn(formData);
        }}
      >
        <h3 className="my-8 text-xl">
          <Link className="opacity-50" to="/sign-up">
            Sign Up{' '}
          </Link>
          / Sign in
        </h3>
        <label className="opacity-50 border-b border-gray-500 w-7/12 m-auto pb-2 text-left my-8">
          Username
          <input
            className="ml-2 bg-gray-200 focus:outline-none"
            name="username"
            type="text"
            value={username}
            onChange={handleChange}
          />
        </label>
        <label className="opacity-50 border-b border-gray-500 w-7/12 m-auto pb-2 text-left my-8">
          Password
          <input
            className="ml-2 bg-gray-200 focus:outline-none"
            name="password"
            type="password"
            value={password}
            onChange={handleChange}
          />
        </label>
        <button className="border border-gray-500 w-max m-auto py-1 px-10 opacity-50 my-8">
          Sign In
        </button>
      </form>
    </div>
  );
}
