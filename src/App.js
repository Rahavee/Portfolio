import React from "react";
import Navbar from "./Navbar";
import SkillBar from "./SkillBar";
import MyCard from "./Card";
import Footer from "./Footer";
import SVGAnimate from "./SvgAnimation";
import Etch from "./Etch.jpg"
import "./styles.css";
import Snackman from "./Snackman.jpg"
import me from "./me.jpg"

export default function App() {
  return (
    <div>
      <div id="base-header">
        <div id="middle-header" />
      <SVGAnimate />
        <div id="inner-header">

          <Navbar
            content={[
              { name: "About", link: "left-content" },
              { name: "Projects", link: "projects" },
              { name: "Contact", link: "footer", color: "white"}
            ]}
          />
        </div>
      </div>
      <div id="filler" />
      <div className="flex-wrapper">
        <div id="left-content">
          <img
            alt="mypic"
            id="myPicture"
            src={me}
          />
          <p id="about">Hello! I am Rahavee, a third year computer science student in University of Vermont. I look forward to bring enthusiasm to learn and technical knowledge to the work place</p>
        </div>
        <div id="right-content">
          <h1 id ="aboot" style={{color:"#721b65"}}>ABOUT</h1 >
          <SkillBar name="Python" value="90" />
          <SkillBar name="Java" value="65" />
          <SkillBar name="C/C++" value="95" />
          <SkillBar name="Swift" value="65" />
          <SkillBar name="Git" value="55"/>
          <SkillBar name="Tenosrflow" value="40" />
          <SkillBar name="HTML" value="70"/>
<SkillBar name="CSS" value="50"/>
<SkillBar name="React.js" value="30"/>

        </div>
      </div>
      <div id="projects">
        <h1 style={{color: "lightgray"}}>PROJECTS</h1>
        <div id="cards-wrapper">
          <MyCard title="CodeEtch" picture = {Etch}  tech="Python, Flask, JavaScript" content="A motorised Etch-A-Etch controlled by a raspberry pi that converts images into Etches. An interactive front-end webapp made with JavaScript that records the user touch input and transfers the image to the raspberry pi to Etch " />
          <MyCard title="SnackMan" picture = {Snackman} tech="C++, Python" content="A game inspired by Pac-man, and made with the C++ GLUT library. SnackMan stores every game data locally and displays statistics in a webapp made with python  " />
        </div>
      </div>
      <div id="footer">
          <h1 id = "foot" style={{color: "#ffffff"}}>CONTACT</h1>
        <Footer />
        </div>
        
      
    </div>
  );
}
