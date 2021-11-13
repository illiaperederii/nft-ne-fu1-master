import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { FOOTER, LOGO, WEBSITE_NAME } from '../data/General';
import { FaTelegramPlane, FaTwitter,  FaDiscord, FaYoutube, FaGithub, FaRedditAlien, FaMedium} from 'react-icons/fa'
import { SiTiktok } from 'react-icons/si'

const Footer = () => {
  const iconStyle = {fontSize: '28px', color: 'white'}
  return (
    <div className='pd-20 footer hero' style={{minHeight: '100px'}} id='footer'>
      <Row className='mt-50' style={{width: '80vw'}}>
      <Col style={{textAlign: 'left'}}>
      <img src={LOGO} alt={WEBSITE_NAME} className="header-logo-image" />
      </Col>
      <Col style={{textAlign: 'right'}}>
      {FOOTER.socialmedia.telegram.show && <a href={FOOTER.socialmedia.telegram.link} target='_blank'><FaTelegramPlane style={iconStyle} /> &nbsp;&nbsp;</a>}
      {FOOTER.socialmedia.twitter.show && <a href={FOOTER.socialmedia.twitter.link} target='_blank'><FaTwitter style={iconStyle} />&nbsp;&nbsp;</a>}
      {FOOTER.socialmedia.discord.show && <a href={FOOTER.socialmedia.discord.link} target='_blank'><FaDiscord style={iconStyle} />&nbsp;&nbsp;</a>}
      {FOOTER.socialmedia.youtube.show && <a href={FOOTER.socialmedia.youtube.link} target='_blank'><FaYoutube style={iconStyle} />&nbsp;&nbsp;</a>}
      {FOOTER.socialmedia.tiktok.show && <a href={FOOTER.socialmedia.tiktok.link} target='_blank'><SiTiktok style={iconStyle} />&nbsp;&nbsp;</a>}
      {FOOTER.socialmedia.github.show && <a href={FOOTER.socialmedia.github.link} target='_blank'><FaGithub style={iconStyle} />&nbsp;&nbsp;</a>}
      {FOOTER.socialmedia.reddit.show && <a href={FOOTER.socialmedia.reddit.link} target='_blank'><FaRedditAlien style={iconStyle} />&nbsp;&nbsp;</a>}
      {FOOTER.socialmedia.medium.show && <a href={FOOTER.socialmedia.medium.link} target='_blank'><FaMedium style={iconStyle} />&nbsp;&nbsp;</a>}
      
      </Col>
    </Row>
    <Row className='mt-30' style={{width: '80vw'}}>
      <Col style={{textAlign: 'left'}}>
      <div className='bold'>
        <h5>{FOOTER.copyright}</h5>
      </div>
      </Col>
      <Col style={{textAlign: 'right'}}>
      {FOOTER.links.map(link => (
        <a href={link.to} className='bold' style={{textDecoration:'none !important', color: 'inherit'}} target='_blank'>{link.name} &nbsp; &nbsp;</a>
      ))}
      </Col>
    </Row>
    </div>
  );
}

export default Footer;