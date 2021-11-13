import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { FAQS } from '../data/General';

const FAQ = () => {
  const [show, setShow] = useState('x')
  const [width, setWidth] = useState(window.innerWidth)
  const [showImg, setShowImg] = useState(false)

  const updateWindowDimensions = () => {
    setWidth(window.innerWidth)
  }

  const open = (index) => {
    if (index == show) {
      setShow('x')
    } else {
      setShow(index)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', updateWindowDimensions);
  },[])

  useEffect(() => {
    if(width >= 900) {
      // setShowImg(true)
    } else {
      setShowImg(false)
    }
  }, [show, width])

  return (
    <div className='pd-20 hero-6 hero' style={{ minHeight: '100px' }} id='faq'>
      <div className='pd-60'>
        <div><h1>{FAQS.heading}</h1></div>
        <Row className='mt-50' style={{justifyContent: 'center'}}>
          {showImg && <Col className='' style={{ maxWidth: 'fit-content', minWidth: '400px' }}>
            <img src={FAQS.img} alt={FAQS.heading} style={{ maxHeight: '90vh', textAlign: 'left' }} />
          </Col>}
          <Col className='ml-50' style={{ textAlign: 'left', width: '90vw', minWidth: '350px', maxWidth: '900px' }}>
            {FAQS.content.map((faq, index) => (
              <div className='ml-20 pointer' style={{ width: '90%' }}>
                <Row className='mt-20' onClick={() => { open(index) }} style={{ width: '100%' }}>
                <Col style={{maxWidth: '20px'}}><h5>{show == index ? '-' : '+'}</h5></Col>
                <Col><h5>{faq.q}</h5></Col>
                </Row>
                {show == index &&
                  <div className='ml-30 mt-20'>
                    {faq.a}
                  </div>}
                <div className='underline' style={{fontSize: '8px'}}>
                  &nbsp;
                </div>
              </div>
            ))}
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default FAQ;