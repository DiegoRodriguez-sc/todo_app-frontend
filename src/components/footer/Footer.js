import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-center justify-center w-full py-12 mt-8 border-t-2 border-t-black">
      <div className="">
        <span>&bull;</span>
        <a
          className="px-1 border-dashed border-b-2 border-b-yellow-js hover:border-black"
          href="https://github.com/midudev/vota.dev"
          rel="nofollow noreferrer"
          target="_blank"
        >
          GitHub
        </a>
        <span>&bull;</span>
        <a
          className="px-1 border-dashed border-b-2 border-b-yellow-js hover:border-black"
          href="https://midu.tube"
          rel="nofollow noreferrer"
          target="_blank"
        >
          YouTube
        </a>
        <span>&bull;</span>
        <a
          className="px-1 border-dashed border-b-2 border-b-yellow-js hover:border-black"
          href="https://midu.live"
          rel="nofollow noreferrer"
          target="_blank"
        >
          Twitch
        </a>
        <span>&bull;</span>
      </div>
    </footer>
  );
};

export default Footer;
