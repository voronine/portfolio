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
            <span className={styles.skillsLevel}>International Scientific and</span>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Education
