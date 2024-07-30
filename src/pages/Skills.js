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
import jest from '../assets/images/skills/jest.png';
import rtl from '../assets/images/skills/rtl.png';
import cicd from '../assets/images/skills/cicd.png';
import bootstrap from '../assets/images/skills/bootstrap.png';
import sass from '../assets/images/skills/sass.png';
import mongodb from '../assets/images/skills/mongodb.png';
import ts from '../assets/images/skills/ts.png';
import nextjs from '../assets/images/skills/nextjs.png';

const Skills = () => {
  const expertSkills = [
    { icon: reactIcon, name: 'React', percent: 80 },
    { icon: redux, name: 'Redux', percent: 80 },
    { icon: js, name: 'JavaScript', percent: 80 },
    { icon: ts, name: 'TypeScript', percent: 70 },
    { icon: html, name: 'HTML / JSX', percent: 90 },
    { icon: css, name: 'CSS', percent: 90 },
    { icon: sass, name: 'SASS', percent: 90 },
    { icon: git, name: 'Git', percent: 70 },
    { icon: github, name: 'GitHub', percent: 70 },
    { icon: jest, name: 'Jest', percent: 80 },
    { icon: rtl, name: 'Testing Library React', percent: 80 },
    { icon: bootstrap, name: 'Bootstrap', percent: 90 },
  ];

  const intermediateSkills = [
    { icon: nextjs, name: 'Next Js', percent: 70 },
    { icon: node, name: 'Node Js', percent: 70 },
    { icon: expressjs, name: 'Express Js', percent: 60 },
    { icon: mongodb, name: 'MongoDB', percent: 60 },
    { icon: cicd, name: 'CI/CD', percent: 70 },
  ];

  const softSkills = [
    'Effective communication',
    'Competitive attitude',
    'Analytical and Critical thinking',
    'Good at problem solving',
    'Open to ideas and suggestions',
    'Learning new technologies',
    'Knowledge sharing',
  ];
  return (
    <Wrapper style={{ overflowY: 'auto' }}>
      <div className="skills">
        <div className="heading w-100">
          <h1>Skills</h1>
        </div>
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
          <div className="lineBreak"></div>
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
          <div className="lineBreak"></div>
          <div className="softSkills">
            <h4>Soft Skills</h4>
            <div className="row mt-3">
              {softSkills.map((softSkill, idx) => (
                <div className="col-12 col-md-3" key={idx}>
                  <div className="softSkill">
                    <i className="fa-solid fa-bullseye"></i>
                    <p>{softSkill}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Skills;
