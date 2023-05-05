import React from 'react'
import './about.css'
import ME from '../../assets/mish.jpeg'
import { FaAward } from 'react-icons/fa'
import { VscFolderLibrary } from 'react-icons/vsc'
import { GiPaintBrush } from 'react-icons/gi'


const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>2+ years Working</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>15+ Completed</small>
            </article>

            <article className='about__card'>
              <GiPaintBrush className='about__icon' />
              <h5>Art</h5>
              <small>Sketch, Paint, Digital</small>
            </article>
          </div>
          <p>
            I love being a full stack developer because it allows me to use my creative and analytical skills to build beautiful and functional websites and applications. I enjoy being able to see my ideas come to life and having the ability to share them with the world.
          </p>
          <p>
            When I'm not coding, you can often find me working on a new art project or capturing moments. I love how art and photography allow me to express my creativity in different ways and capture moments in time that can be shared and enjoyed for years to come.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>

    </section>
  )
}

export default About