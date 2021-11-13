import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Mint from '../components/Mint';
import { CLICKMINT, WELCOME } from '../data/General';
import Image from 'react-bootstrap/Image';

const WelcomeHero = () => {

  return (
    <div className='hero hero-1' id='welcome'>
      <div className='content-wrapper mt-20'>
        <Row style={{justifyContent: 'center'}}>
          <Row style={{width: '100%', justifyContent: 'center'}}>
              {/* <Image src={CLICKMINT} className='intext-image' /> */}
          </Row>
          <Row className='mt-50' style={{width: '100%', justifyContent: 'center'}}>
              <Mint />
          </Row>
        </Row>
      </div>
      <div className='background-image1'></div>
    </div>
  );
}

export default WelcomeHero;