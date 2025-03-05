import React, { useState } from 'react';
import DevoirDetail from './devoirDetail';
import CommunicationDetail from './communicationDetail';
import background from '../../assets/images/enseignant-au-travail-.jpg';
import './Dashboard.css';

const SchoolDashboard = () => {
  const [activeComponent, setActiveComponent] = useState('devoir');

  return (
    <div
      className="relative min-h-screen flex items-center justify-center bg-fixed bg-cover bg-center "
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* Conteneur du tableau de bord */}
      <div className="">
        {/* Boutons de navigation */}
        <div className="button-group flex justify-center gap-4 mb-4 pt-8">
          <button
            className={`nav-button px-4 py-2 rounded-lg ${activeComponent === 'devoir' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
            onClick={() => setActiveComponent('devoir')}
          >
            Devoir
          </button>
          <button
            className={`nav-button px-4 py-2 rounded-lg ${activeComponent === 'communication' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700'}`}
            onClick={() => setActiveComponent('communication')}
          >
            Communication
          </button>
        </div>

        {/* Affichage dynamique des composants */}
        <div className="content-area">
          {activeComponent === 'devoir' && <DevoirDetail />}
          {activeComponent === 'communication' && <CommunicationDetail />}
        </div>
      </div>
    </div>
  );
};

export default SchoolDashboard;
