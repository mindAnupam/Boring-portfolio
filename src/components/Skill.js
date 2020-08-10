import React from 'react';
import { SkillDiv, Theme, H4, Logo, lSkill } from './style';
import { IconContext } from 'react-icons';
import Next from '../assets/images/next-js.svg';
import Reactt from '../assets/images/react-2.svg';
import Html from '../assets/images/html.svg';
import Node from '../assets/images/nodejs.svg';
import Css from '../assets/images/css.svg';
import Git from '../assets/images/git.svg';
import JavaScript from '../assets/images/javascript.svg';
import MongoDB from '../assets/images/mongo.png';
import Cplus from '../assets/images/cplus.svg';
import C from '../assets/images/c.svg';







function Skill(props) {
  // const descriptions = props.description;
  return (
    <Theme>
      <SkillDiv className="d-flex flex-column justify-content-center text-center align-items-center m-3 p-2">
        <IconContext.Provider value={lSkill}>
          <Logo>
            {props.name === "C++" && <img src={Cplus} width="80px" alt="C++" />}
            {props.name === "C" && <img src={C} width="80px" alt="C" />}
            {props.name === "Git" && <img src={Git} width="80px" alt="Git" />}
            {props.name === "JavaScript" && <img src={JavaScript} width="80px" alt="Javascript" />}
            {props.name === "React JS" && <img src={Reactt} width="80px" alt="React" />}
            {props.name === "React Native" && <img src={Reactt} width="80px" alt="React Native" />}
            {props.name === "Node.js" && <img src={Node} width="80px" alt="Node" />}
            {props.name === "HTML" && <img src={Html} width="80px" alt="Html" />}
            {props.name === "CSS" && <img src={Css} width="80px" alt="Css" />}
            {props.name === "Next JS" && <img src={Next} width="80px" alt="Next Js" />}
            {props.name === "MongoDB" && <img src={MongoDB} width="80px" alt="MongoDB" />}
          </Logo>
        </IconContext.Provider>
        <H4>{props.name}</H4>
        {/* {descriptions.map((description) => (
          <D key={Math.random()}>{description}</D>
        ))} */}
      </SkillDiv>
    </Theme>
  );
}

export default Skill;
