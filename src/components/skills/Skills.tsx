import React from 'react'
import Frontend from './Frontend'
import Backend from './Backend'
import Education from './Education'
import Technical from './Technical'
import styles from './Skills.module.scss'

const Skills: React.FC = () => (
  <section className={`skills section parallax-section`} id="skills">
    <h2 className="section__title">Skills</h2>
    <span className="section__subTitle">My technical level</span>
    <div className={`${styles.skillsContainer} container grid`}>
      <Frontend />
      <Backend />
      <Education />
      <Technical />
    </div>
  </section>
)

export default Skills
