import React from 'react';
import parse from 'html-react-parser';
import Wrapper from './Wrapper';

const Education = () => {
  const jobSummary = [
    `As a React Developer, my role involves designing component-based architecture and building lean, highly-performant, reusable React components using JSX, SCSS, and JavaScript.`,

    `I work with the centralized state management tool Redux and follow a test-driven development approach, writing unit tests with Jest and React Testing Library (RTL).`,

    `My responsibilities include enhancing, optimizing, and fixing bugs in existing applications, as well as adding new features and business models swiftly using Agile/Scrum processes.`,

    `I actively participate in scrum ceremonies, ensuring continuous updates for enhancement and maintenance, and making sure web pages run smoothly and are user-friendly.`,

    `Besides my professional Frontend skills, I have knowledge of CI/CD as well.`,

    `I am quick at bug fixing and build strong professional relationships with business users, backend, and QA teams. I also assist juniors with bug fixes. Additionally, I have experience with the complete single-page web application architecture for both frontend and backend, known as the MERN stack.`,
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
            <h5>Tata Consultancy Service</h5>
            <h6>2019-Present</h6>
            <h4>Summary</h4>
            <div className="jobSummary">
              {jobSummary.map((summary) => (
                <div className="summary d-flex">
                  <i class="fa-solid fa-bullseye pe-3 mx-3 mt-2"></i>
                  {parse(`<p>${summary}</p>`)}
                </div>
              ))}
            </div>
          </div>

          <div className="educations col-12 col-md-4">
            <h4>Education</h4>
            <div className="education">
              <div className="icon">
                <i class="fa-solid fa-graduation-cap"></i>
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
                <i class="fa-solid fa-school"></i>
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
                <i class="fa-solid fa-school"></i>
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
