// import images
import logo from './img/logo.png'
import clickMint from './img/click-mint.png'
import roadmapimg from './img/raodmap-FF.jpg'

import story1 from './img/story-boarding-designs-FF-01.png'
import story2 from './img/story-boarding-designs-FF-02.png'
import story3 from './img/story-boarding-designs-FF-03.png'
import story4 from './img/story-boarding-designs-FF-04.png'
import story5 from './img/story-boarding-designs-FF-05.png'
import story6 from './img/story-boarding-designs-FF-06.png'
import story7 from './img/story-boarding-designs-FF-07.png'

import person1 from './img/person1.jpg'

import x000 from './img/x000.png'

import roadmapcard1 from './img/roadmapcard1.png'

import faq from './img/faq.png'

import mar1 from './img/marquee/01.png'
import mar2 from './img/marquee/02.png'
import mar3 from './img/marquee/03.png'
import mar4 from './img/marquee/04.jpg'
import mar5 from './img/marquee/05.jpg'
import mar6 from './img/marquee/06.jpg'
import mar7 from './img/marquee/07.jpg'
import mar8 from './img/marquee/08.jpg'
import mar9 from './img/marquee/09.jpg'
import mar10 from './img/marquee/10.jpg'
import mar11 from './img/marquee/11.jpg'
import mar12 from './img/marquee/12.jpg'
import mar13 from './img/marquee/13.jpg'
import mar14 from './img/marquee/14.jpg'
import mar15 from './img/marquee/15.jpg'
import mar16 from './img/marquee/16.jpg'
import mar17 from './img/marquee/17.jpg'
import mar18 from './img/marquee/18.jpg'
import mar19 from './img/marquee/19.jpg'
import mar20 from './img/marquee/20.jpg'



// general
export const WEBSITE_NAME = "Cool NFT"

// images
export const LOGO = logo;
export const CLICKMINT = clickMint;

// links navbar
export const MENU_LINKS = [
  { name: "Home", to: '#welcome' },
  { name: 'Story', to: '#story' },
  { name: 'Market', to: '#market' },
  { name: 'Team', to: '#team' },
  { name: 'Roadmap', to: '#roadmap' },
  { name: 'FAQ', to: '#faq' },
];

// story
export const STORY = {
  heading: 'STORY TIME',
  font: 'Irish Grover', // fonts: https://fonts.google.com/
  content: [
    {
      image: story1,
      imgDirection: 'top', // top, left, right
      text: 'Crypto Snowmen have always been mythical creatures hiding in the snow and only come out when there’s is large snowfall. All these years people never knew the snowmen were actually real and move around. They protect the children in the city from the evil snowmen each winter by guarding their house from the backyard or front yard. '
    },
    {
      image: story2,
      imgDirection: 'left', // top, left, right
      text: 'Year after year after the winter just before spring the snowmen migrate to the north pole and the south pole to stay cold during the summer months. King Snow Carrot-nose has declared a emergency because of global warming thanks to the humans. He said \“The winters have become shorter with less cold days for snowmen to stay safe, We must move to the north pole and stay there\”'
    },
    {
      image: story3,
      imgDirection: 'right', // top, left, right
      text: 'The Queen Snowlady Alazka has asked the King \“what about our enemies the Evil Snowmen from the South Pole and their minions?\“'
    },
    {
      image: story4,
      imgDirection: 'left', // top, left, right
      text: 'The King replied \“We will just have to fortify our kingdom in the north and prepare for a battle!\”  The Snowmen from the North call it Snowman Land where they can roam freely without hiding away from kids. The reason they come back down every summer is to help protect kids from the evil snowmen who want to attack during the winter stormy nights. '
    },
    {
      image: story5,
      imgDirection: 'top', // top, left, right
      text: 'Snow Broomstick said to the King, “We will need to bring our weapons, armor , and whatever belongings we can carry with us while we migrate because we may not be coming back. '
    },
    {
      image: story6,
      imgDirection: 'top', // top, left, right
      text: 'The Evil snowman Devil found out about their plans and wants to race them to the north pole as the weather is too warm for them to go back to the south pole. They could melt or worst evaporate!!! So the King and his people plan to rush to the North pole to beat the Evil snowmen from getting there first,  and taking all there clothes and snowballs with them.  Help rescue the snowmen so they can get to the North pole and have a fighting chance against the south pole snowmen.'
    },
    {
      image: story7,
      imgDirection: 'top', // top, left, right
      text: 'So the King and his people plan to rush to the North pole to beat the Evil snowmen from getting there first,  and taking all there clothes and snowballs with them.  Help rescue the snowmen so they can get to the North pole and have a fighting chance against the south pole snowmen.'
    },

  ]
}

export const VIEWITEMS = {
  heading: 'View the Collection',
  text: 'Coming soon on OpenSea..',
  buttonText: 'View on OpenSea',
  disabled: true,
  link: 'http://www.google.de',
  imgs: [
    mar1, mar2, mar3, mar4, mar5, mar6, mar7, mar8, mar9, mar10, mar11, mar12, mar13, mar14, mar15, mar16, mar17, mar18, mar19, mar20
  ]
}

export const TEAM = {
  heading: 'TEAM',
  team: [
    {
      name: 'NEFU',
      desc: 'Dev / Digital Marketing',
      img: mar3
    },
    {
      name: 'BARBARA',
      desc: 'Artist',
      img: mar13
    },
    {
      name: 'KURT',
      desc: 'Developer',
      img: mar15
    },
    {
      name: 'DODI',
      desc: 'Discord Community Leader',
      img: mar7
    },
    {
      name: 'LUMBERJACK',
      desc: 'Discord Lead Admin',
      img: mar17
    },
    
  ]
}

export const ROADMAP = {
  heading: '...our beautiful roadmap',
  image: roadmapimg,
  roadmap: [ // deleted in forntend
    {
      img: x000,
      heading: '2000 NFTs',
      desc: 'Last Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
    },
    {
      img: x000,
      heading: '3000 NFTs',
      desc: 'Last Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
    },
    {
      img: x000,
      heading: '4000 NFTs',
      desc: 'Last Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
    },
    {
      img: x000,
      heading: '5000 NFTs',
      desc: 'Last Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
    },
  ],
  cards: [
    {
      img: roadmapcard1,
      heading: '2000',
      desc: 'First 2000 to Mint get Airdrop of Exotic Metaverse Token.'
    },
    {
      img: roadmapcard1,
      heading: 'Prizes',
      desc: 'If you Win any Prizes we may send you the Cash equivalent value of the prize in ethereum.'
    },
    {
      img: roadmapcard1,
      heading: 'Wallet',
      desc: 'Community Wallet will be created to buy the floor using 5% of sales.'
    },

  ]
}

export const FAQS = {
  img: faq,
  heading: 'FAQ',
  content: [
    {
      q: 'How much are the NFT?',
      a: '0.025 ETH'
    },
    {
      q: 'How many NFTs can I mint?',
      a: '20 at a time'
    },
    {
      q: 'How can i tell rarity?',
      a: 'Rarity will be posted After Launch'
    },
    {
      q: 'My transaction didn\'t go thru who can talk to ?',
      a: 'You can bring your issue to Support section in Discord'
    },
  ]
}

export const FOOTER = {
  copyright: 'COPYRIGHT BY Cryptosnowmen.com',
  links: [
    {
      name: 'INTERFACE CONTRACT',
      to: '#'
    },
    {
      name: 'IMPLEMENTATION CONTRACT',
      to: '#'
    },
  ],
  socialmedia: {
    telegram: {
      show: false,
      link: 'http://www.google.de'
    },
    twitter: {
      show: true,
      link: 'https://twitter.com/cryptosnowmen'
    },
    discord: {
      show: true,
      link: 'https://discord.gg/cryptosnowmen'
    },
    youtube: {
      show: false,
      link: 'http://www.google.de'
    },
    tiktok: {
      show: false,
      link: 'http://www.google.de'
    },
    github: {
      show: false,
      link: 'http://www.google.de'
    },
    reddit: {
      show: false,
      link: 'http://www.google.de'
    },
    medium: {
      show: true,
      link: 'https://exoticmetaverse.medium.com/cryptosnowman-story-75255271e817'
    },


  }
}
