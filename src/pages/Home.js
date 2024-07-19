import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import avatar from '../assets/images/hero.png';
import Wrapper from '../components/Wrapper';

const Home = () => {
  const skills = {
    skills: [
      `React Js`,
      200,
      `Redux`,
      200,
      `Javascript`,
      200,
      `HTML`,
      200,
      `CSS`,
      200,
      `Testing Library`,
      200,
      `Jest`,
      200,
      `Axios`,
      200,
      `Bootstrap`,
      200,
      `Node Js`,
      200,
      `Express Js`,
      200,
      `MongoDB`,
      200,
      `CI/CD`,
      200,
      `Git`,
      200,
      `GitHub`,
      200,
    ],
    style: {
      fontFamily: 'Dancing Script, cursive',
      fontWeight: 'bold',
    },
  };
  return (
    <Wrapper>
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
          <div className="buttons">
            <button className="connect">Let's Connect</button>
          </div>
        </div>

        <div className="col-sm-12 col-md-6 img">
          <img src={avatar} alt="avatar" />
        </div>
      </div>
    </Wrapper>
  );
};

export default Home;
