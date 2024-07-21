import React from 'react';
import Wrapper from '../components/Wrapper';
import Skill from '../components/Skill';

import reactIcon from '../assets/images/skills/react.png';
import redux from '../assets/images/skills/redux.png';
import js from '../assets/images/skills/js.png';
import html from '../assets/images/skills/html.png';
import css from '../assets/images/skills/css.png';
import git from '../assets/images/skills/git.png';
import github from '../assets/images/skills/github.png';
import node from '../assets/images/skills/nodejs.png';
import expressjs from '../assets/images/skills/express.png';

const Skills = () => {
  const expertSkills = [
    { icon: reactIcon, name: 'React', percent: 91 },
    { icon: redux, name: 'Redux', percent: 95 },
    { icon: js, name: 'Javascript', percent: 90 },
    { icon: html, name: 'HTML / JSX', percent: 95 },
    { icon: css, name: 'CSS / SCSS', percent: 94 },
    { icon: git, name: 'Git', percent: 94 },
    { icon: github, name: 'GitHub', percent: 94 },
  ];
  const intermediateSkills = [
    { icon: node, name: 'Node Js', percent: 91 },
    { icon: expressjs, name: 'Express Js', percent: 95 },
  ];
  return (
    <Wrapper>
      <div className="skills">
        <h1 className="heading">Skills</h1>
        <div className="sections ">
          <div className="expert">
            <h4>Expert</h4>
            <div className="row">
              {expertSkills.map((skill, idx) => (
                <Skill
                  key={idx}
                  icon={skill.icon}
                  name={skill.name}
                  percent={skill.percent}
                />
              ))}
            </div>
          </div>
          <div className=" Intermediate">
            <h4>Intermediate</h4>
            <div className="row">
              {intermediateSkills.map((skill, idx) => (
                <Skill
                  key={idx}
                  icon={skill.icon}
                  name={skill.name}
                  percent={skill.percent}
                />
              ))}
            </div>
          </div>
          <div className="oftSkills">
            <h4>Soft Skills</h4>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Skills;
