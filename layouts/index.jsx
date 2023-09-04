import Header from "../components/Header";
import Footer from "../components/Footer";

import React from "react";

const index = ({ children }) => {
  return (
    <div className="min-h-screen relative bg-gray-900">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default index;
