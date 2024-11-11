import React from "react";
import FlashMessage from "../components/FlashMessage";

const Create = ({ csrfToken, flash }) => {
  return (
    <>
      <h1 className="text-4xl font-bold">Create New User</h1>
      <FlashMessage message={flash} />
      <p className="text-xl">This is the create page</p>
      <form className="flex flex-col gap-4" action="/users/store" method="post">
        <input type="hidden" name="authenticity_token" value={csrfToken} />
        <div>
          <label className="block text-lg font-medium" htmlFor="username">
            Username
          </label>
          <input
            className="block w-full px-4 py-2 text-lg text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
            type="text"
            name="user[username]"
            id="username"
            required
          />
        </div>
        <div>
          <label className="block text-lg font-medium" htmlFor="email">
            Email
          </label>
          <input
            className="block w-full px-4 py-2 text-lg text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
            type="email"
            name="user[email]"
            id="email"
            required
          />
        </div>
        <div>
          <label className="block text-lg font-medium" htmlFor="password">
            Password
          </label>
          <input
            className="block w-full px-4 py-2 text-lg text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
            type="password"
            name="user[password]"
            id="password"
            required
          />
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default Create;
