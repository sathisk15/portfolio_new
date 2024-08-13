import React, { lazy } from 'react';
import { TypeAnimation } from 'react-type-animation';
import avatar from '../assets/images/hero.avif';
import Wrapper from '../components/Wrapper';
// import cv from '../assets/cv/Sathiskumar_Resume.pdf';

const SocialIcons = lazy(() => import('../components/SocialIcons'));

const Home = () => {
  const skills = {
    skills: [
      `React Js`,
      `Redux`,
      `Javascript`,
      `HTML`,
      `CSS`,
      `Testing Library`,
      `Jest`,
      `Axios`,
      `Bootstrap`,
      `Node Js`,
      `Express Js`,
      `MongoDB`,
      `CI/CD`,
      `Git`,
      `GitHub`,
    ]
      .map((skill) => [skill, 200])
      .flat(),
    style: {
      fontFamily: 'Dancing Script, cursive',
      fontWeight: 'bold',
    },
  };

  return (
    <Wrapper style={{ marginRight: '0px', marginTop: '0px' }}>
      <div className="home row">
        <div className="col-sm-12 col-md-6">
          <div className="intro">
            <h4>Hey there........</h4>
            <h4>I am</h4>
            <h2>Sathiskumar Ravichandran</h2>
            <h4>React Developer</h4>
            <TypeAnimation
              sequence={skills.skills}
              speed={1}
              wrapper="h5"
              deletionSpeed={50}
              style={skills.style}
              repeat={Infinity}
            />
          </div>
          <div className="homeConnect mb-1">
            <SocialIcons />
          </div>
          <div className="buttons">
            <button
              className="connect"
              onClick={() =>
                window.open(
                  'https://www.linkedin.com/in/rsathisk15/',
                  '_blank',
                  'noopener'
                )
              }
            >
              Let's Connect
            </button>
            {/* <button
              className="connect"
              onClick={() => window.open(cv, '_blank', 'noopener')}
            >
              Get CV
            </button> */}
          </div>
        </div>

        <div className="col-sm-12 col-md-6 img">
          <img src={avatar} alt="avatar" draggable={false} />
        </div>
      </div>
    </Wrapper>
  );
};

export default Home;
