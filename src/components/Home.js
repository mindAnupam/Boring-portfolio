import React from 'react';
import { Theme, Div, H1, Sub, Img } from './style';
import ContactInfo from './ContactInfo';
import contacts from './info/contacts';
import image from '../assets/images/Anupam.png'

function Home() {
  return (
    <Theme>
      <Div
        home
        className="container d-flex align-items-center justify-content-center flex-md-row flex-column">
        <div className="p-md-4 p-3">
          <Img src={image} alt="profile" />
        </div>
        <div className="p-md-4 p-3">
          <H1>HI, I'M ANUPAM</H1>
          <H1 bottom>KUSHWAHA</H1>
          <Sub className="pb-3">Web Developer</Sub>
          {contacts.map((contact) => (
            <ContactInfo
              key={contact.id}
              link={contact.link}
              logo={contact.logo}
              info={contact.info}
            />
          ))}
        </div>
      </Div>


    </Theme>
  );
}

export default Home;
