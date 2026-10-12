import React from 'react'
import style from './About.module.scss'

const Info: React.FC = () => (
  <div className={`${style.aboutInfo} grid`}>
    <div className={style.aboutBox}>
      <i className={`${style.aboutIcon} bx bx-award`} />
      <h3 className={style.aboutTitle}>Experience</h3>
      <span className={style.aboutSubTitle}>3.5+ years</span>
    </div>
    <div className={style.aboutBox}>
      <i className={`${style.aboutIcon} bx bx-message-square-dots`} />
      <h3 className={style.aboutTitle}>English</h3>
      <span className={style.aboutSubTitle}>B1</span>
    </div>
    <div className={style.aboutBox}>
      <i className={`${style.aboutIcon} bx bx-group`} />
      <h3 className={style.aboutTitle}>Team</h3>
      <span className={style.aboutSubTitle}>4 developers</span>
    </div>
  </div>
)

export default Info
