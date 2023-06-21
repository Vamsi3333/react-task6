import React from "react";
import {BsLinkedin} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md';
import {FaGithub} from 'react-icons/fa';
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> This is Vamsi</h2>
        <div className="prompt">
          <p>I am a Full stack Developer.</p>
          <a href="https://www.linkedin.com/in/vamsi-krishna-2186b8247/"><BsLinkedin /></a>
          <a href="mailto:vamskrish15@gmail.com"><MdEmail /></a>
          <a href="https://github.com/Vamsi3333"><FaGithub /></a>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, HTML, CSS, BootStrap.
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, ExpressJS, MySQL, MongoDB.
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java, Python, C#, C, C++, TypeScript, Matlab</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
