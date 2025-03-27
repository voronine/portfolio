import React from 'react'
import styles from './Skills.module.scss'

const Frontend: React.FC = () => (
  <div className={styles.skillsContent}>
    <h3 className={styles.skillsTitle}>Front-end Skills</h3>
    <div className={styles.skillsBox}>
      <div className={styles.skillsGroup}>
        <div className={styles.skillsData}>
          <i className="bx bx-badge-check" />
          <div>
            <h3 className={styles.skillsName}>Typescript</h3>
          </div>
        </div>
        <div className={styles.skillsData}>
          <i className="bx bx-badge-check" />
          <div>
            <h3 className={styles.skillsName}>CSS</h3>
          </div>
        </div>
        <div className={styles.skillsData}>
          <i className="bx bx-badge-check" />
          <div>
            <h3 className={styles.skillsName}>JavaScript</h3>
          </div>
        </div>
      </div>
      <div className={styles.skillsGroup}>
        <div className={styles.skillsData}>
          <i className="bx bx-badge-check" />
          <div>
            <h3 className={styles.skillsName}>React</h3>
          </div>
        </div>
        <div className={styles.skillsData}>
          <i className="bx bx-badge-check" />
          <div>
            <h3 className={styles.skillsName}>GIT</h3>
          </div>
        </div>
        <div className={styles.skillsData}>
          <i className="bx bx-badge-check" />
          <div>
            <h3 className={styles.skillsName}>React Native</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Frontend
