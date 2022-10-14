import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import logo from"./../assets/kunal.PNG";


function Home() {
  return (
    <div className="home">

      <h4> .. Jasons' Json is ajacent to Johnsons' Json .. Try this tongue twister</h4>
      <div className="about">
      
        <img src={logo} width="200" height="200"></img>
        <h2> Hi, I am Kunal Bhandari</h2>
        
        <div className="prompt">
          <p>A Software Developer With Grit To Solve, ++Increment++</p>
          <p>Connect on LinkedIn for more</p>

          <Link onClick={() => window.open('https://www.linkedin.com/in/kunalbhandari21/', '_blank')}> <LinkedInIcon /> </Link>
          <Link onClick={() => window.open('https://github.com/Kunalbhandari/', '_blank')}> <GithubIcon /> </Link>
          
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
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
  );
}

export default Home;
