import React from 'react';
import bgImage from "../assets/images/eleve-resumé.jpg";
import SchoolChampion from '../components/apropos/schoolChampion';
import SchoolOverview from '../components/apropos/schoolOverview';
import Titre from '../components/props/titre';

const Propos = () => {
  return (
    <div className=''>
      <Titre bgImage={bgImage} title="À propos de nous" />
      <SchoolChampion/>
      <SchoolOverview/> 
    </div>
  );
};

export default Propos;