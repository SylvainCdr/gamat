import React from "react";

import Menu from "../Menu/Menu";
import Footer from "../Footer/Footer";

function Template({ children }) {
  return (
    <>
    {/* <Header /> */}
    <Menu />
      {children}
      <Footer />
    </>
  );
}

export default Template;
