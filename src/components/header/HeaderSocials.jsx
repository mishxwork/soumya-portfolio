import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiInstagram} from 'react-icons/si'



const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/soumyxmishrx/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/mishxwork" target="_blank"><FaGithub/></a>
        <a href="https://www.instagram.com/" target="_blank"><SiInstagram/></a>
    </div>
  )
}

export default HeaderSocials