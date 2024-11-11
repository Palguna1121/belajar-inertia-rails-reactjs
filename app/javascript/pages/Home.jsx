import Layout from "./layouts/Layout.jsx";
import { useState } from "react";

const Home = ({ user }) => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1 className="text-5xl">Home</h1>
      <p className="text-3xl text-sky-700">
        Hello! my name is {user.name}, I'm {user.age} years old!
      </p>

      <button onClick={() => setCount((count) => count + 1)} className="bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded">
        Count: {count}
      </button>
    </>
  );
};

Home.layout = (page) => <Layout children={page} title="Homeee" />;

export default Home;
