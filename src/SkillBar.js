import React from "react";

export default function SkillBar(props) {
  return (
    <div id="bar-wrapper">
      <div id="bar-heading" style={{ color: "grey" }}>
        {props.name}
      </div>
      <div id="bar" style={{ width: `calc(${props.value * 0.75}%` }} />
    </div>
  );
}
