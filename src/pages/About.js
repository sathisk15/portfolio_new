import React from 'react';
import Wrapper from '../components/Wrapper';
import parse from 'html-react-parser';

const About = () => {
  let paragraph = [
    `I am a React Developer at TCS with 5 years of experience. <b>I have
            worked with international banks and insurance companies</b>, focusing on
            creating risk management applications for banks and insurance
            applications in an Agile environment. These applications are used
            worldwide, which has helped me <b>gain knowledge in banking, risk
            management, and the insurance sector.</b>`,
    `I have <b>worked on 4 global projects</b> and I have <b>created over 300+
            reusable React components</b>, which have been enhanced over time,
            giving me a <b>deep understanding of React concepts and JavaScript.</b>
            Collaborating effectively with teams in different regions. <b>I spent
            1.5 years in Poland working directly with a client</b>, enriching my
            experience. I have a solid understanding of the <b>Agile Scrum
            framework</b> and actively participate in Agile ceremonies, including
            sprint retrospectives, story refinements, and daily scrum calls.`,
    `Besides my professional Frontend skills, I have knowledge in the <b>MERN Stack</b> and
            backend technologies like <b>Express.js, Node.js, and REST APIs. As well as CI/CD.</b> I am
            proactive in fixing bugs, collaborating with teams, and
            communicating effectively, which has helped me build strong
            professional relationships across the team.`,
    `My passion for web technologies drives me to solve complex problems.
            I have <b>solved over 100+ coding challenges on Hackerrank and
            CodeChef.</b> I have also <b>built 6+ personal projects</b> using the MERN
            Stack, including <b>E-commerce app, social media apps, a movie
            app, a weather app, and a portfolio website.</b>`,
    `I am dedicated to <b>continuous learning and professional development</b>,
            always looking to improve my skills and stay updated with the latest
            industry trends. My goal is to keep contributing to impactful
            projects and enhance my skills in web technologies. <b>I am eager to
            take on new challenges and work with talented professionals</b> to
            create innovative solutions.`,
  ];
  return (
    <Wrapper>
      <div className="about">
        <div className="heading w-100">
          <h1>About</h1>
        </div>
        <div className="aboutBody">
          {paragraph.map((para) => (
            <div className="para">
              <i class="fa-solid fa-check"></i>
              {parse(`<p>&emsp;&emsp;&emsp;${para}</p>`)}
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default About;
