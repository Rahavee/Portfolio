import React from "react";
import {
  Link
  
} from "react-scroll";

export default function Navbar(props) {
  const myLinks = props.content.map((item, index) => {
    return (
      <Link to={item.link} key={index} style={{color: item.color, }}>
        {item.name}
        
      </Link>
    );
  });

  return <nav>{myLinks}</nav>;
}
