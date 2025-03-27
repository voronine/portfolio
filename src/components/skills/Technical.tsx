import React from 'react'
import styles from './Skills.module.scss'

const Technical: React.FC = () => (
  <div className={styles.skillsContent}>
    <h3 className={styles.skillsTitle}>TECHNICAL SKILLS</h3>
    <div className={styles.skillsBox}>
      <div className={styles.skillsGroup}>
        <div className={styles.skillsData}>
          <i className="bx bx-badge-check" />
          <div>
            <h3 className={styles.skillsName}>Web Technologies</h3>
            <span className={styles.skillsLevel}>
              Fetch, REST API, Web sockets, SQL, Mongo DB
            </span>
          </div>
        </div>
        <div className={styles.skillsData}>
          <i className="bx bx-badge-check" />
          <div>
            <h3 className={styles.skillsName}>Design Tools</h3>
            <span className={styles.skillsLevel}>Photoshop, Figma</span>
          </div>
        </div>
      </div>
      <div className={styles.skillsGroup}>
        <div className={styles.skillsData}>
          <i className="bx bx-badge-check" />
          <div>
            <h3 className={styles.skillsName}>Version Control &amp; Development</h3>
            <span className={styles.skillsLevel}>
              Git/GitHub, GitLab, NPM, Gulp, Yarn, Vite
            </span>
          </div>
        </div>
        <div className={styles.skillsData}>
          <i className="bx bx-badge-check" />
          <div>
            <h3 className={styles.skillsName}>UI Libraries</h3>
            <span className={styles.skillsLevel}>BEM, Bootstrap, Material UI</span>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Technical
