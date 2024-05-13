//react
import React from 'react'

//styles
import styles from './Home.module.scss'

const Social: React.FC = () => (
  <div className={`${styles.homeSocial}`}>
    <a href="https://t.me/voronine" className={`${styles.homeSocialIcon}`} target="__blank">
      <i className="uil uil-telegram" />
    </a>
    <a href="https://github.com/voronine" className={`${styles.homeSocialIcon}`} target="__blank">
      <i className="uil uil-github" />
    </a>
    <a href="https://www.linkedin.com/in/yevhenii-voronin-kyiv/" className={`${styles.homeSocialIcon}`} target="__blank">
      <i className="uil uil-linkedin" />
    </a>
  </div>
)

export default Social