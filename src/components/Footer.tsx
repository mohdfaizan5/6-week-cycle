import React from "react";
import { MutedText } from "./Typography";
import { CgCopyright } from "react-icons/cg";

const Footer = () => {
  return (
    <footer className="py-7 flex justify-between items-center flex-col px-5">
      <MutedText>
        IndieTookit 2024.
        <span>
          <CgCopyright className="inline-block"/>
          All rights reserved
        </span>
      </MutedText>
    </footer>
  );
};

export default Footer;
