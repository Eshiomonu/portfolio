import React from 'react'
import './Intro.css'
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'

function Intro() {
  return (
    <div className='intro'>
      <div className='i-left'>
        <div className='i-name'>
          <span>Hy! I Am</span>
          <span>KADIRI ESHIOMONU</span>
          <span>Frontend Developer with high level of experence in web designing and development, producting the quality work</span>
        </div>
        <button className='button i-button'>Hire Me</button>
       
        <div className='i-icons'>
          <img src={Github} alt=""/>
          <img src={LinkedIn} alt=""/>
          <img src={Instagram} alt=""/>
        </div>
      </div>
      <div className='i-right'></div>
    </div>
  )
}

export default Intro