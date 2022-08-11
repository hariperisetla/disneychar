import Header from "./Header";
import Footer from "./Footer";

import React from "react";

const index = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <main>{children}</main>
      <Footer />
    </React.Fragment>
  );
};

export default index;
