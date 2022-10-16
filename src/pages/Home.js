import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";
import logo from "./../assets/kunal.PNG";

const Home = () =>
    <div className="home">

      <h4> .. Jasons' Json is ajacent to Johnsons' Json .. Try this tongue twister</h4>
      <div className="about">
      
        <img src={logo} width="200" height="200" alt="logo" />
        <h2> Hi, I am Kunal Bhandari</h2>
        
        <div className="prompt">
          <p>A Software Developer With Grit To Solve, ++Increment++</p>
          <p>Connect on LinkedIn for more</p>

          <a href='https://www.linkedin.com/in/kunalbhandari21/' target='_blank' rel="noopener noreferrer"> <LinkedInIcon /> </a>
          <a href='https://github.com/Kunalbhandari/' target='_blank' rel="noopener noreferrer"> <GithubIcon /> </a>
          
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, HTML, CSS, NPM, MaterialUI, Yarn, Styled Components
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, Java Spring,  GraphQL, Docker, Kubernetes
              MySQL and PostgreSQL, Jenkins, AWS, Machine Learning.
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java, Python, C, C++, Go</span>
          </li>
        </ol>
      </div>
    </div>

export default Home;
