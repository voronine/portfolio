import React from 'react'
import styles from './Skills.module.scss'

const Education: React.FC = () => (
  <div className={styles.skillsContent}>
    <h3 className={styles.skillsTitle}>EDUCATION</h3>
    <div className={styles.skillsBox}>
      <div className={styles.skillsGroup}>
        <div className={styles.skillsData}>
          <i className="bx bx-badge-check" />
          <div>
            <h3 className={styles.skillsName}>
              Magistr of Radio electronic devices and computer systems
            </h3>
            <span className={styles.skillsLevel}>MNTU - 2011</span>
          </div>
        </div>

        <div className={styles.skillsData}>
          <i className="bx bx-badge-check" />
          <div>
            <h3 className={styles.skillsName}>
              Courses
            </h3>
            <span className={styles.skillsLevel}>
                Full-stack course at Mate Academy
            </span>
            <span className={styles.skillsLevel}>
                The course of React in ItGid
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Education
