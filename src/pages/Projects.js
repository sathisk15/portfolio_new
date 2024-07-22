import React from 'react';
import Wrapper from '../components/Wrapper';
import movie from '../assets/images/projects/Movie.png';
import weather from '../assets/images/projects/Weather.png';
import eCommerce from '../assets/images/projects/E-Commerce.png';
import devConnector from '../assets/images/projects/DevConnector.JPG';
import portfolio from '../assets/images/projects/Portfolio.png';
import newPortfolio from '../assets/images/projects/New_Portfolio.png';

const Projects = () => {
  const projects = [
    {
      name: 'E-Commerce',
      image: eCommerce,
      url: 'https://proshop-gqaz.onrender.com',
      github: 'https://github.com/sathisk15/eCommerce',
    },
    {
      name: 'Portfolio',
      image: newPortfolio,
      //   url: 'https://movieapp-9e173.web.app/',
      //   github: 'https://github.com/sathisk15/MovieApp',
    },
    {
      name: 'Dev Connector',
      image: devConnector,
      //   url: 'https://movieapp-9e173.web.app/',
      github: 'https://github.com/sathisk15/eCommerce',
    },
    {
      name: 'Portfolio',
      image: portfolio,
      url: 'https://myportfolio-sk.web.app/',
      github: 'https://github.com/sathisk15/eCommerce',
    },
    {
      name: 'Movie App',
      image: movie,
      url: 'https://movieapp-9e173.web.app/',
      github: 'https://github.com/sathisk15/MovieApp',
    },
    {
      name: 'Weather App',
      image: weather,
      url: 'https://weather-app-6f6da.web.app/',
      github: 'https://github.com/sathisk15/Weather_App',
    },
  ];
  return (
    <Wrapper
      style={{
        overflowY: 'auto',
      }}
    >
      <div className="projects">
        <div className="heading w-100">
          <h1>Projects</h1>
        </div>
        <div className="projectsBody">
          <div className={`row`}>
            {projects.map((project) => (
              <div className="col-md-3 col-sm-6">
                <div
                  className="project"
                  style={{
                    backgroundImage: `url(${project.image})`,
                    ...project.style,
                  }}
                >
                  <div className="projectOverlay">
                    <h4>{project.name}</h4>
                    <div className="btns">
                      {project.github && (
                        <div
                          className="urlButton"
                          onClick={() =>
                            window.open(project.github, '_blank', 'noopener')
                          }
                        >
                          <i class="fa-solid fa-code"></i>
                        </div>
                      )}
                      {project.url && (
                        <div
                          className="viewButton"
                          onClick={() =>
                            window.open(project.url, '_blank', 'noopener')
                          }
                        >
                          <i class="fa-solid fa-arrow-up-right-from-square"></i>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Projects;
