import React from 'react'
import styles from './Portfolio.module.scss'

type TWorkItem = {
  id: number
  image: string
  title: string
  category: string
  gitHub: string
  demo: string
}

const WorksItem: React.FC<TWorkItem> = ({ image, title, demo, gitHub }) => (
  <div className={styles.workCard}>
    <img className={styles.workImage} src={image} alt="Portfolio work" />
    <h3 className={styles.workTitle}>{title}</h3>
    <div className={styles.workCardLinks}>
      <a className={styles.workButton} href={demo} rel="noreferrer" target="_blank">
        Demo <i className={`${styles.workButtonIcon} bx bx-right-arrow-alt`} />
      </a>
      <a className={styles.workButton} href={gitHub} rel="noreferrer" target="_blank">
        GitHub <i className={`${styles.workButtonIcon} bx bx-right-arrow-alt`} />
      </a>
    </div>
  </div>
)

export default WorksItem
