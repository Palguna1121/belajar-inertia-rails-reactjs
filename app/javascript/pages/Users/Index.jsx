import Layout from "../layouts/Layout";
import React from "react";
import FlashMessage from "../components/FlashMessage";
import { Link } from "@inertiajs/react";

const Index = ({ csrfToken, users, flash }) => {
  return (
    <>
      <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
        <h2 className="mb-4 text-2xl font-semibold leading-tight">Halaman Users</h2>
        <div className="flex justify-end mb-4 mr-4">
          <Link href="/users/create" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Tambah User
          </Link>
        </div>

        <div className="my-5">
          <FlashMessage message={flash} />
        </div>

        <div className="overflow-x-auto mb-7">
          <table className="min-w-full text-xs">
            <colgroup>
              <col />
              <col />
              <col />
              <col />
            </colgroup>
            <thead className="dark:bg-gray-300">
              <tr className="text-left">
                <th className="p-3">No #</th>
                <th className="p-3">Username</th>
                <th className="p-3">Email</th>
                <th className="p-3">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
                  <td className="p-3">
                    <p>{users.indexOf(user) + 1}</p>
                  </td>
                  <td className="p-3">
                    <p>{user.username}</p>
                  </td>
                  <td className="p-3">
                    <p>{user.email}</p>
                    {/* <p className="dark:text-gray-600">Friday</p> */}
                  </td>
                  <td className="p-3 text-left flex">
                    <span className="px-3 mr-2 py-1 font-semibold rounded-md dark:bg-amber-600 dark:text-gray-50">
                      <span>
                        <a href={`/users/edit/${user.id}`}>Edit</a>
                      </span>
                    </span>
                    <span className="px-3 py-1 font-semibold rounded-md dark:bg-red-600 dark:text-gray-50">
                      <form action={`/users/delete/${user.id}`} method="post">
                        <input type="hidden" name="authenticity_token" value={csrfToken} />
                        <input type="hidden" name="_method" value="delete" />
                        <button
                          onClick={() => {
                            if (confirm("Are you sure you want to delete this user?")) {
                              this.form.submit();
                            }
                          }}
                        >
                          Hapus
                        </button>
                      </form>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* yg lama */}
      {/* <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
        <h1 className="text-4xl font-bold">Halaman Users</h1>
        <FlashMessage message={flash} />
        <div className="flex justify-end mb-4 mr-4">
          <a href="/users/create" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Tambah User
          </a>
        </div>

        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">No</th>
              <th className="px-4 py-2">Nama</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td className="border px-4 py-2">{users.indexOf(user) + 1}</td>
                <td className="border px-4 py-2">{user.username}</td>
                <td className="border px-4 py-2">{user.email}</td>
                <td className="border px-4 py-2">
                  <a href={`/users/edit/${user.id}`} className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mr-2">
                    Edit
                  </a>
                  <form action={`/users/delete/${user.id}`} method="post">
                    <input type="hidden" name="authenticity_token" value={csrfToken} />
                    <input type="hidden" name="_method" value="delete" />
                    <button
                      onClick={() => {
                        if (confirm("Are you sure you want to delete this user?")) {
                          this.form.submit();
                        }
                      }}
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Hapus
                    </button>
                  </form>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}
    </>
  );
};

Index.layout = (page) => <Layout children={page} title="User" />;

export default Index;
