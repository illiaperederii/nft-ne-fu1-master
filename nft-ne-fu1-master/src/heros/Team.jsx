import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { TEAM } from '../data/General';

const Team = () => {
  const [teamContent, setTeamContent] = useState('');

  useEffect(() => {
    setTeamContent(
      TEAM.team.map((p) => (<Col className='pd-60' >
        <Row style={{justifyContent: 'center'}}>
          <img src={p.img} alt={p.name} style={{ height: '130px', width: '130px', borderRadius: '50%', backgroundColor: 'white'}} />
        </Row>
        <Row classname='center' style={{justifyContent: 'center'}}>
          <h3 className='mt-20'>{p.name}</h3>
        </Row>
        <Row classname='center' style={{ justifyContent: 'center', opacity: '0.7' }}>
          <h6 className=''>{p.desc}</h6>
        </Row>
      </Col>)
      ))
      console.log('team')
  },[])

  return (
    <div className='pd-20 hero-4 hero' style={{minHeight: '100px'}} id='team'>
      <div className='pd-60'>
        <div><h1>{TEAM.heading}</h1></div>
        <Row className='mt-50'>
        {teamContent}
      </Row>
      </div>
    </div>
  );
}

export default Team;