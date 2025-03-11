import React from 'react'
import styles from './Skills.module.scss'

const Backend: React.FC = () => {
  return (
    <div className={styles.skillsContent}>
      <h3 className={styles.skillsTitle}>Back-end Skills</h3>
      <div className={styles.skillsBox}>
        <div className={styles.skillsGroup}>
          <div className={styles.skillsData}>
            <i className='bx bx-badge-check' />
            <div>
              <h3 className={styles.skillsName}>Node JS</h3>
              <span className={styles.skillsLevel}>Intermediate</span>
            </div>
          </div>
          <div className={styles.skillsData}>
            <i className='bx bx-badge-check' />
            <div>
              <h3 className={styles.skillsName}>Axios</h3>
              <span className={styles.skillsLevel}>Basic</span>
            </div>
          </div>
          <div className={styles.skillsData}>
            <i className='bx bx-badge-check' />
            <div>
              <h3 className={styles.skillsName}>SQL</h3>
              <span className={styles.skillsLevel}>Basic</span>
            </div>
          </div>
        </div>
        <div className={styles.skillsGroup}>
          <div className={styles.skillsData}>
            <i className='bx bx-badge-check' />
            <div>
              <h3 className={styles.skillsName}>Next.js</h3>
              <span className={styles.skillsLevel}>Basic</span>
            </div>
          </div>
          <div className={styles.skillsData}>
            <i className='bx bx-badge-check' />
            <div>
              <h3 className={styles.skillsName}>MongoDB</h3>
              <span className={styles.skillsLevel}>Basic</span>
            </div>
          </div>
          <div className={styles.skillsData}>
            <i className='bx bx-badge-check' />
            <div>
              <h3 className={styles.skillsName}>Express</h3>
              <span className={styles.skillsLevel}>Basic</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Backend