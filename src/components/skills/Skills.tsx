//react
import React from 'react'

//components
import Frontend from './Frontend'
import Backend from './Backend'

//styles
import styles from './Skills.module.scss'

const Skills: React.FC = () => (
  <section className="skills section" id="skills">
    <h2 className='section__title'>Skills</h2>
    <span className='section__subTitle'>My technical level</span>
    <div className={`${styles.skillsContainer} container grid`} >
      <Frontend />
      <Backend />
    </div>
  </section>
)

export default Skills