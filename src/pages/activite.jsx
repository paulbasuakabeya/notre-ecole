import React from 'react';
import bgImage from "../assets/images/uniforme-sortie.jpg";
import Titre from '../components/props/titre';
import ExtracurricularActivities from '../components/activite/activiteParaSco';

const Activite = () => {
  return (
    <div>
      <Titre bgImage={bgImage} title="Nos Activités Parascolaires" />
      <ExtracurricularActivities/>
    </div>
  );
};

export default Activite;