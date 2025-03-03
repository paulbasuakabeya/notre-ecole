import React from 'react';
import bgImage from "../assets/images/enseignant-au-travail-.jpg";
import Titre from '../components/props/titre.jsx';
import ThreeBlockLayout from '../components/props/threeBlock.jsx';
import FestPartOfCycle from '../components/cyclesOrganise/festPartCycle.jsx';

const CycleOrganise = () => {
  return (
    <div className="overflow-hidden">
     <Titre bgImage={bgImage} title="Cycles Organisés" />
     <FestPartOfCycle/>
    </div>
  );
};

export default CycleOrganise;