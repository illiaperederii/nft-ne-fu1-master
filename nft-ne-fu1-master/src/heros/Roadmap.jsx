import React, { useEffect, useState } from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import { ROADMAP } from '../data/General';

const Roadmap = () => {
  const [content, setContent] = useState('');
  const [cards, setCards] = useState('')
  const [width, setWidth] = useState(window.innerWidth)

  const updateWindowDimensions = () => {
    setWidth(window.innerWidth)
  }
  useEffect(() => {
    console.log('width: ' + width)
    window.addEventListener('resize', updateWindowDimensions);
    setContent(
      ROADMAP.roadmap.map((r, index) => (
        index % 2 == 0 || width < 800 ?
          <Row className='mt-50' style={{ maxWidth: '70%' }}>
            <Col style={{ textAlign: 'right' }} > <img src={r.img} alt={r.heading} style={{ maxWidth: '180px' }} /></Col>
            <Col style={{ textAlign: 'left' }}>
              <Row>
                <h3 className='mt-20'>{r.heading}</h3>
              </Row>
              <Row>
                <div className='' style={{ opacity: '0.8' }}>
                  {r.desc}
                </div>
              </Row>
            </Col>
          </Row>
          :
          <Row className='mt-50' style={{ maxWidth: '70%' }}>
            <Col style={{ textAlign: 'right' }}>
              <Row className='justify-content-end' style={{ textAlign: 'right' }}>
                <h3 className='mt-20'>{r.heading}</h3>
              </Row>
              <Row>
                <div className='' style={{ opacity: '0.8' }}>
                  {r.desc}
                </div>
              </Row>
            </Col>
            <Col style={{ textAlign: 'left' }}> <img src={r.img} alt={r.heading} style={{ maxWidth: '180px' }} /></Col>
          </Row>
      ))
    )

    setCards(
      ROADMAP.cards.map(c => (<Col>
        <Row className='pd-20'  style={{ justifyContent: 'center' }}>
          <div className='small-card pd-20'>
            <div>
              <img src={c.img} alt={c.heading} style={{ maxWidth: '40px' }} />
            </div>
            <div className='mt-20 bold'>
              <h5>{c.heading}</h5>
            </div>
            <div className='mt-20' style={{ opacity: '0.8' }}>
              {c.desc}
            </div>
          </div>
        </Row></Col>
      ))
    )

    console.log('roadmap')
  }, [width])

  return (
    <div className='pd-20 hero-5 hero' style={{ minHeight: '100px' }} id='roadmap'>
      <div className='pd-60' style={{ justifyContent: 'center' }}>
        <div><h1>{ROADMAP.heading}</h1></div>
        {/* <div className='mt-60 center'>
          <center>
            {content}
          </center>
        </div> */}
        <Row className='mt-50' >
          <Col>
          <Image src={ROADMAP.image} className='' style={{maxWidth: '100vw'}}/>
          </Col>
        </Row>
        <Row className='mt-100' style={{ justifyContent: 'center', display: 'flex' }}>
          {cards}
        </Row>
      </div>
    </div>
  );
}

export default Roadmap;