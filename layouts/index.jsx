import Header from "./Header";
import Footer from "./Footer";

import React from "react";

const index = ({ children }) => {
  return (
    <div className="min-h-screen relative">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default index;
