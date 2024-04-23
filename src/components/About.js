import React from "react";
import { image } from "../data/data";

function About() {
  return <div id="about">
  <h2>About Me</h2>
  <p>"I am a web developer with an amazing ability to develop websites that are both functional and aesthetically pleasing. I have a strong understanding of web standards and best practices, and I am passionate about creating websites that users will find easy to use and visually appealing. I am also proficient in a variety of programming languages and tools, and I have a proven track record of delivering successful projects on time and within budget. I am a team player who is always willing to lend a helping hand, and I am confident in my ability to contribute to any project. I am looking for an opportunity to use my skills and experience to make a positive impact on the web.“</p>
  <img src={image} alt={"I made this"}></img>
  </div>;
}

export default About;
