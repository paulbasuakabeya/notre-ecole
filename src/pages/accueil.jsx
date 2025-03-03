import React from 'react';
import SchoolPresentation from '../components/accueil/schoolPresentation';
import BlogSection from '../components/accueil/blogSection';
import ProgrammeApercu from '../components/accueil/programmeApercu';
import ActivitiesSection from '../components/accueil/activitiesSection';

const Accueil = () => {
  return (
    <div> 
      <SchoolPresentation/>
      <BlogSection/>
      <ProgrammeApercu/>
      <ActivitiesSection/>
    </div>
  );
};

export default Accueil;
