import React from 'react';
import Cards from './Cards';
import Motto from '../../assets/imgs/mauve-motto.png';
import Footer from '../Footer';

const Home = () => {
  return (
    <>
      {/* photo */}
      <div className="home-img">
        <img src="img/womenintech.jpg" />
      </div>
      {/* end photo */}

      <img src={Motto} alt="motto" />
      {/* about cards */}
      <div className="cards">
        <Cards title={"Our Mission"} description={"Our mission is to empower and connect women in tech. "} />
        <Cards title={"Our Values"} description={"We value collaboration, and connections between women in tech who are at the beginning of their career"} />
        <Cards title={"Our Vision"} description={"Our vision is to bridge the gender gap within tech by providing women with the tools and support to succeed."} />
      </div>
      {/* end about cards */}
      <Footer />
    </>
  );
}

export default Home;