import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Head } from "@inertiajs/react";

export default function Layout({ children, title }) {
  return (
    <div className="relative min-h-screen">
      <Head title={title} />
      <Navbar />

      <main>
        <section>{children}</section>
      </main>

      <div className="absolute bottom-0 left-0 right-0">
        <Footer />
      </div>
    </div>
  );
}
