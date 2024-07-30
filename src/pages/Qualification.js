import React from 'react';
import parse from 'html-react-parser';
import Wrapper from '../components/Wrapper';

const Education = () => {
  /* [
  Developed high-performance React architecture and prototypes, created responsive and reusable components for production-ready applications using React. Utilized Redux for effective state management.
,Developed over 300+ reusable components and enhanced them over the time based on the user requirements.
,Implemented the latest trends and best practices in designing front-end architecture to ensure performance, accessibility, SEO and security. 
,Adhered to industry coding standards and best practices for React, Redux, JavaScript (ES6+), HTML5, JSX, CSS3 and SASS to ensue robustness and code reliability. 
,Followed TDD approach for unit, end-to-end and Regression testing with Jest and React-testing-library.
,Regular code review and improved code quality through performance enhancements, accessibility and optimizations.
,Expert in branching strategies with Git for version control and Continuous integration and deployment tools such as, Webpack for building production ready apps and Google Cloud Pipelines.
,Active participant in Agile/Scrum ceremonies like, sprint plannings, refinements, retrospective and daily stand-ups.
,Good Collaborator and worked with international teams from EU, US, UK & SNG. Good communication helped to collaborate with business, design teams to understand the requirement and fulfil it. Which also helped to providing technical insights and effective solution.
,Good with integrating third-parity library/systems to enhance the application capabilities and ensure seamless functionality.
,Contributed to global and smaller projects, showcasing versatility and deep knowledge in front-end development, particularly in the banking and insurance sectors.
,Took full ownership of projects, delivering end-to-end solutions with modern scaling, continuous improvements, and a commitment to staying current with evolving technologies.
,Keep learning to evolve new technologies, Skills and Mentoring juniors.
]

  */
  const jobSummary = [
    `Developed high-performance React architecture and prototypes, created responsive and reusable components for production-ready applications using React. Utilized Redux for effective state management.`,
    `Developed over 300+ reusable components and enhanced them over the time based on the user requirements.`,
    `Implemented the latest trends and best practices in designing front-end architecture to ensure performance, accessibility, SEO and security. `,
    `Adhered to industry coding standards and best practices for React, Redux, JavaScript (ES6+), HTML5, JSX, CSS3 and SASS to ensue robustness and code reliability. `,
    `Followed TDD approach for unit, end-to-end and Regression testing with Jest and React-testing-library.`,
    `Regular code review and improved code quality through performance enhancements, accessibility and optimizations.`,
    `Expert in branching strategies with Git for version control and Continuous integration and deployment tools such as, Webpack for building production ready apps and Google Cloud Pipelines.`,
    `Active participant in Agile/Scrum ceremonies like, sprint plannings, refinements, retrospective and daily stand-ups.`,
    `Good Collaborator and worked with international teams from EU, US, UK & SNG. Good communication helped to collaborate with business, design teams to understand the requirement and fulfil it. Which also helped to providing technical insights and effective solution.`,
    `Good with integrating third-parity library/systems to enhance the application capabilities and ensure seamless functionality.`,
    `Contributed to global and smaller projects, showcasing versatility and deep knowledge in front-end development, particularly in the banking and insurance sectors.`,
    `Took full ownership of projects, delivering end-to-end solutions with modern scaling, continuous improvements, and a commitment to staying current with evolving technologies.`,
    `Keep learning to evolve new technologies, Skills and Mentoring juniors.`,
  ];
  return (
    <Wrapper style={{ overflowY: 'auto' }}>
      <div className="qualification">
        <div className="heading w-100">
          <h1>Qualifications</h1>
        </div>
        <div className="row ms-1">
          <div className="experience col-12 col-md-8">
            <h4>Experience</h4>
            <h2>React Developer</h2>
            <h5>Tata Consultancy Services</h5>
            <h6>2019-Present</h6>
            <h4>Summary</h4>
            <div className="jobSummary">
              {jobSummary.map((summary, idx) => (
                <div className="summary d-flex" key={idx}>
                  <i className="fa-solid fa-bullseye pe-3 mx-3 mt-2"></i>
                  {parse(`<p className='mb-1'>${summary}</p>`)}
                </div>
              ))}
            </div>
          </div>

          <div className="educations col-12 col-md-4">
            <h4>Education</h4>
            <div className="education">
              <div className="icon">
                <i className="fa-solid fa-graduation-cap"></i>
                <div className="line"></div>
              </div>
              <div className="course">
                <h5>Bachelors in Computer Science</h5>
                <h6>Bishop Heber College</h6>
                <h6>2016-2019</h6>
              </div>
            </div>
            <div className="education">
              <div className="icon">
                <i className="fa-solid fa-school"></i>
                <div className="line"></div>
              </div>
              <div className="course">
                <h5>Higher Secondary School</h5>
                <h6>Bishop Heber Higher Secondary School</h6>
                <h6>2015-2016</h6>
              </div>
            </div>
            <div className="education">
              <div className="icon">
                <i className="fa-solid fa-school"></i>
                <div className="line"></div>
              </div>
              <div className="course">
                <h5>Secondary School</h5>
                <h6>Bishop Heber Higher Secondary School</h6>
                <h6>2013-2014</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Education;
