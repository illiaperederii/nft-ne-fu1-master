import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import Marquee from "react-easy-marquee";
import { VIEWITEMS } from '../data/General';

const ViewOnMarket = () => {

  return (
    <div className='hero-3 hero' id='market'>
      <Row className='' xs={4} style={{ minHeight: 'calc(100vh + 7px)', backgroundColor: 'purple' }}>


        <div style={{ width: '25vw' }} className='pd-0 marquee-block'>
          <div className='marquee-inner to-left'>
            <span>
              {VIEWITEMS.imgs.sort(() => Math.random() - 0.5).reverse().map((image) => (
                <div className='marquee-item'>
                  <img src={image} alt="" style={{ width: '25vw', height: '25vw' }} />
                </div>))}
            </span>
          </div>
        </div>
        <div style={{ width: '25vw' }} className='pd-0'>
          <div className='marquee-inner to-right'>
            <span>
              {VIEWITEMS.imgs.sort(() => Math.random() - 0.5).reverse().map((image) => (
                <div className='marquee-item'>
                  <img src={image} alt="" style={{ width: '25vw', height: '25vw' }} />
                </div>))}
            </span>
          </div>
        </div>
        <div style={{ width: '25vw' }} className='pd-0'>
          <div className='marquee-inner to-left'>
            <span>
              {VIEWITEMS.imgs.sort(() => Math.random() - 0.5).map((image) => (
                <div className='marquee-item'>
                  <img src={image} alt="" style={{ width: '25vw', height: '25vw' }} />
                </div>))}
            </span>
          </div>
        </div>
        <div style={{ width: '25vw' }} className='pd-0'>
          <div className='marquee-inner to-right'>
            <span>
              {VIEWITEMS.imgs.sort(() => Math.random() - 0.5).map((image) => (
                <div className='marquee-item'>
                  <img src={image} alt="" style={{ width: '25vw', height: '25vw' }} />
                </div>))}
            </span>
          </div>
        </div>
      </Row>
      <div className='content-wrapper'>
        <div className='pd-20'>
          <div className='card pd-20'>
            <div>
              <h3>{VIEWITEMS.heading}</h3>
            </div>
            <div className='mt-30' style={{ opacity: '0.7' }}>
              <h6>{VIEWITEMS.text}</h6>
            </div>
            <div className='mt-40'>
              <Button disabled={VIEWITEMS.disabled}>{VIEWITEMS.buttonText}</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewOnMarket;