import React from 'react';
import Wrapper from '../components/Wrapper';
// Certificates Image
import webDevBootcamp from '../assets/images/achievements/certificates/webDevBootcamp.jpg';
import mernStack from '../assets/images/achievements/certificates/mernStack.jpg';
import mernECommerce from '../assets/images/achievements/certificates/mernECommerce.jpg';
import modernReact from '../assets/images/achievements/certificates/modernReact.jpg';
import advancedJavascript from '../assets/images/achievements/certificates/advancedJavascript.jpg';
import html_css from '../assets/images/achievements/certificates/html_css.jpg';
import networkingFundamentals from '../assets/images/achievements/certificates/networkingFundamentals.JPG';
import learningAchievement from '../assets/images/achievements/awards/LearningAchievement.JPG';
import frescoPlay from '../assets/images/achievements/awards/FrescoPlay.JPG';
import serviceAndCommitment from '../assets/images/achievements/awards/ServiceAndCommitment.jpg';

import AchievementsCards from '../components/AchievementsCards';

const Certifications = () => {
  const certificates = [
    {
      image: advancedJavascript,
      name: 'Advanced Javascript',
      url: 'https://udemy-certificate.s3.amazonaws.com/image/UC-5ca4b15a-733b-440a-907f-842fbfd4cde5.jpg',
    },
    {
      image: mernECommerce,
      name: 'MERN E-Commerce',
      url: 'https://udemy-certificate.s3.amazonaws.com/image/UC-2796b4b7-e057-41db-8c5a-ec809326bb48.jpg',
    },
    {
      image: html_css,
      name: 'HTML/CSS 50 Projects',
      url: 'https://udemy-certificate.s3.amazonaws.com/image/UC-3b5743c3-944d-45e2-9afb-bee355c54015.jpg',
    },
    {
      image: modernReact,
      name: 'Modern React',
      url: 'https://udemy-certificate.s3.amazonaws.com/image/UC-19933d6a-d86a-41e0-b876-44fb989eca37.jpg',
    },
    {
      image: mernStack,
      name: 'MERN Stack',
      url: 'https://udemy-certificate.s3.amazonaws.com/image/UC-934fd66d-3c71-421e-8dd3-681b07641ccf.jpg',
      style: { backgroundPosition: 'center' },
    },
    {
      image: webDevBootcamp,
      name: 'Web Dev Bootcamp',
      url: 'https://udemy-certificate.s3.amazonaws.com/image/UC-41d4e0a6-0ef6-4398-826d-8fa522e9840d.jpg',
      style: { backgroundPosition: 'center' },
    },
    {
      image: networkingFundamentals,
      name: 'Networking Fundamentals',
      url: '#',
      style: { backgroundPosition: 'center' },
    },
  ];
  const awards = [
    {
      image: serviceAndCommitment,
      name: 'Service and Commitment Award',
      url: 'https://udemy-certificate.s3.amazonaws.com/image/UC-5ca4b15a-733b-440a-907f-842fbfd4cde5.jpg',
      style: { backgroundPosition: 'center' },
    },
    {
      image: frescoPlay,
      name: 'Fresco Play Award',
      url: 'https://udemy-certificate.s3.amazonaws.com/image/UC-5ca4b15a-733b-440a-907f-842fbfd4cde5.jpg',
      style: { backgroundPosition: 'center' },
    },
    {
      image: learningAchievement,
      name: 'Learning Achivement Award',
      url: 'https://udemy-certificate.s3.amazonaws.com/image/UC-5ca4b15a-733b-440a-907f-842fbfd4cde5.jpg',
      style: { backgroundPosition: 'center' },
    },
  ];
  return (
    <Wrapper style={{ overflowY: 'scroll', marginRight: '0px' }}>
      <div className="achievements">
        <div className="heading w-100">
          <h1>Achievements</h1>
        </div>
        <AchievementsCards
          className="certs"
          heading="Certifications"
          achievements={certificates}
        />
        <div className="lineBreak"></div>
        <AchievementsCards
          className="awards"
          heading="Awards"
          achievements={awards}
        />
      </div>
    </Wrapper>
  );
};

export default Certifications;
