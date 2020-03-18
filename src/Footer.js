import React from "react";
import "./styles.css";

import { IoLogoGithub, IoIosMail } from "react-icons/io";

export default function Footer(props) {
  return (
    <div id="icon-wrapper">
      <div class="icon">
      <IoIosMail/>
      <a href="mailto:rahaveerv@gmail.com">rahaveerv@gmail.com</a>
        </div>
      
      
      <div class="icon">
      <IoLogoGithub />
        <a href="https://github.com/Rahavee">Rahavee</a>
        
      </div>

    </div>
  );
}
