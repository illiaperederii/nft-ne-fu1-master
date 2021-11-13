import React, { useEffect, useRef, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { STORY } from '../data/General';
import Image from 'react-bootstrap/Image';
import { useIsVisible } from 'react-is-visible'
import GoogleFontLoader from 'react-google-font-loader';


const Story = () => {
  const nodeRef = useRef()
  const isVisible = useIsVisible(nodeRef)

  const [story, setStory] = useState('');
  const [expand, setExpand] = useState(false);
  const [width, setWidth] = useState(window.innerWidth)

  const updateWindowDimensions = () => {
    setWidth(window.innerWidth)
    console.log(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', updateWindowDimensions);
  },[])
  
  useEffect(() => {
    if (!expand && STORY.content.length > 2) {
      setStory(showEntries(2))
    } else {
      setStory(showEntries(STORY.content.length))
    }
    console.log('story')
  }, [expand, width])


  const showEntries = (max) => {
    let cutStory = STORY.content.slice(0, max);
    return (
      cutStory.map(s => (<>
        {s.imgDirection == 'left' && width > 900 && <>
          <Row className='mt-100' style={{ justifyContent: 'center', maxWidth: '70%', minWidth: '300px' }}>
            <Col className='' style={{ maxWidth: 'fit-content', justifyContent: 'center' }}>
              <Image className='mt-50' src={s.image} style={{ maxHeight: '15vw', maxWidth: '90%', minHeight: '18vh'}} />
            </Col>
            <Col style={{ maxWidth: '55vw', textAlign: '' }}>
              <p className="subhead mt-20" style={{ maxWidth: '80%', minWidth: '350px' }}>{s.text}</p>
            </Col>
          </Row>
        </>}
        {s.imgDirection == 'right' && width > 900 && <>
          <Row className='mt-100 pd-0' style={{ justifyContent: 'center', maxWidth: '70%', minWidth: '300px' }}>
            <Col style={{ maxWidth: '55vw', textAlign: ''}}>
              <p className="subhead mt-20" style={{ maxWidth: '80%', minWidth: '300px' }}>{s.text}</p>
            </Col>
            <Col className='' style={{ justifyContent: 'center' }}>
              <Image className='mt-50' src={s.image} style={{ maxHeight: '15vw', maxWidth: '90%', minHeight: '18vh'}} />
            </Col>
          </Row>
        </>}
        {(width < 901 || s.imgDirection != 'left' && s.imgDirection != 'right') && <>
          <div className='mt-100 pd-0'>
            <Image className='' src={s.image} style={{ maxHeight: '15vw', maxWidth: '90%', minHeight: '18vh'}}/>
          </div>
          <p className="subhead mt-20" style={{ width: '800px', maxWidth: '80%'}}>{s.text}</p>
        </>}

      </>))
    )
  }

  const toggleExpand = () => {
    let e = expand;
    setExpand(!e);
  }

  return (

    <div ref={nodeRef} className='pd-60 hero-2 hero' id='story'>
      <GoogleFontLoader
        fonts={[
          {
            font: STORY.font,
            weights: [400, '400i'],
          },
        ]}
      />
      <h2 className='mt-30' style={{fontFamily: STORY.font}}>{STORY.heading}</h2>
      <div className='' style={{ alignItems: 'center', fontFamily: STORY.font, maxWidth: '90vw' }}>
        <center>
          {story}
        </center>
        {!expand && <Button className='mt-50' onClick={toggleExpand}>KEEP READING</Button>}
        {isVisible && expand && <Button className='stick-bottom' variant='danger' onClick={toggleExpand}>X</Button>}
      </div>
    </div>

  );
}

export default Story;