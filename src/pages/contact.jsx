import React from 'react';
import bgImage from '../assets/images/record-phone-call.avif'
import ContactSection from '../components/contact/contacecttS';
// import MapComponent from '../components/contact/map';
import Titre from '../components/props/titre';

const Contact = () => {
  return (
    <div>
      <Titre bgImage={bgImage} title="Contact" />
      <ContactSection/>
{/*       <MapComponent /> */}
    </div>
  );
};

export default Contact;
