import React from "react";

const Footer = () => {
  return (
    <footer className="flex item-center justify-center w-full py-12 mt-8 border-t-1 border-t-gray-400">
      <div className="mx-auto">
        <span>&bull;</span>
        <a
          className="px-1 border-dashed border-b-2 border-b-yellow-js hover:border-black"
          href="https://github.com/DiegoRodriguez-sc"
          rel="nofollow noreferrer"
          target="_blank"
        >
          GitHub
        </a>
        <span>&bull;</span>
        <a
          className="px-1 border-dashed border-b-2 border-b-yellow-js hover:border-black"
          href="https://www.linkedin.com/in/diego-rodriguez-sc/"
          rel="nofollow noreferrer"
          target="_blank"
        >
          Linkedin
        </a>
        <span>&bull;</span>
        <a
          className="px-1 border-dashed border-b-2 border-b-yellow-js hover:border-black"
          href="https://github.com/DiegoRodriguez-sc/todo_app-frontend"
          rel="nofollow noreferrer"
          target="_blank"
        >
          Source code
        </a>
        <span>&bull;</span>
      </div>
    </footer>
  );
};

export default Footer;
