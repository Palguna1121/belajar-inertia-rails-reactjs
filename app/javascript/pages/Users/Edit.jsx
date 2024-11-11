import React, { useState } from "react";
import FlashMessage from "../components/FlashMessage";
import Layout from "../layouts/Layout";

const Edit = ({ user, csrfToken, flash }) => {
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState(user.password);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <div id="page-content" class="flex max-w-full flex-auto flex-col">
        <div class="container mx-auto p-4">
          <h1 className="text-3xl font-bold text-gray-900 justify-center">Update User</h1>
          <div className="my-5">
            <FlashMessage message={flash} />
          </div>
          <form className="space-y-6 dark:text-gray-100" action={`/users/update/${user.id}`} method="post">
            <input type="hidden" name="_method" value="put" />
            <input type="hidden" name="authenticity_token" value={csrfToken} />
            <div className="space-y-1">
              <label htmlFor="username" className="font-medium text-gray-950">
                Username
              </label>
              <input
                className="block w-full rounded-lg border border-gray-200 px-3 py-2 leading-6 placeholder-gray-500 focus:border-teal-500 focus:ring focus:ring-teal-500/50 dark:border-gray-600 dark:bg-gray-800 dark:placeholder-gray-400 dark:focus:border-teal-500"
                type="username"
                name="user[username]"
                id="username"
                value={username}
                onChange={handleUsernameChange}
                placeholder="Enter your username.."
                required
              />
            </div>
            <div className="space-y-1">
              <label className="font-medium text-gray-950" htmlFor="email">
                Email
              </label>
              <input
                className="block w-full rounded-lg border border-gray-200 px-3 py-2 leading-6 placeholder-gray-500 focus:border-teal-500 focus:ring focus:ring-teal-500/50 dark:border-gray-600 dark:bg-gray-800 dark:placeholder-gray-400 dark:focus:border-teal-500"
                type="email"
                name="user[email]"
                value={email}
                onChange={handleEmailChange}
                placeholder="Enter your email.."
                id="email"
                required
              />
            </div>
            <div className="space-y-1">
              <label className="font-medium text-gray-950" htmlFor="password">
                Password
              </label>
              <input
                className="block w-full rounded-lg border border-gray-200 px-3 py-2 leading-6 placeholder-gray-500 focus:border-teal-500 focus:ring focus:ring-teal-500/50 dark:border-gray-600 dark:bg-gray-800 dark:placeholder-gray-400 dark:focus:border-teal-500"
                type="password"
                name="user[password]"
                value={password}
                onChange={handlePasswordChange}
                placeholder="Enter your password.."
                id="password"
                required
              />
            </div>
            <button
              className="text-right inline-flex items-center justify-center gap-2 rounded-lg border border-teal-700 bg-teal-700 px-3 py-2 text-sm font-semibold leading-5 text-white hover:border-teal-600 hover:bg-teal-600 hover:text-white focus:ring focus:ring-teal-400/50 active:border-teal-700 active:bg-teal-700 dark:focus:ring-teal-400/90"
              type="submit"
            >
              Simpan
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

Edit.layout = (page) => <Layout children={page} title="Edit User" />;

export default Edit;
