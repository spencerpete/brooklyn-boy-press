import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
    <div className="mt-8 w-4/12 m-auto">
      <form
        className="flex flex-col my-10 shadow bg-gray-200"
        onSubmit={e => {
          e.preventDefault();
          handleSignUp(formData);
        }}
      >
        <h3 className="my-8 text-xl">
          Sign up /{' '}
          <Link className="opacity-50" to="/sign-in">
            Sign In
          </Link>
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
          Email
          <input
            className="ml-2 bg-gray-200 focus:outline-none"
            name="email"
            type="text"
            value={email}
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
          Sign Up
        </button>
      </form>
    </div>
  );
}
