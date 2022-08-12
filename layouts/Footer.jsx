import React from "react";

const Footer = () => {
  return (
    <footer className="mt-auto bg-slate-800 text-slate-300 py-5 flex items-center justify-center">
      Made with <span className="mx-1 text-2xl text-red-600">&hearts;</span> by{" "}
      <a
        href="https://github.com/hariperisetla"
        className="ml-1 font-medium hover:underline"
      >
        Hari Perisetla
      </a>
    </footer>
  );
};

export default Footer;
