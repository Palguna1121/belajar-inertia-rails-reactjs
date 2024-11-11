import React from "react";
import FlashMessage from "../components/FlashMessage";

const Index = ({ csrfToken, users, flash }) => {
  console.log("Flash data :", flash);
  return (
    <>
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
    </>
  );
};

export default Index;
