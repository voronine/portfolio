import React from 'react'
import { experience } from './data'
import styles from './Experience.module.scss'

const Experience: React.FC = () => (
  <section className="section" id="experience">
    <h2 className="section__title">Experience</h2>
    <span className="section__subTitle">Where I have worked</span>
    <div className={`${styles.timeline} container`}>
      {experience.map(job => (
        <article key={`${job.company}-${job.period}`} className={styles.item}>
          <span className={styles.dot} />
          <div className={styles.card}>
            <div className={styles.head}>
              <h3 className={styles.role}>
                {job.role} <span className={styles.company}>· {job.company}</span>
              </h3>
              <span className={styles.period}>{job.period}</span>
            </div>
            <p className={styles.summary}>{job.summary}</p>
            {job.points?.length ? (
              <ul className={styles.points}>
                {job.points.map(point => <li key={point}>{point}</li>)}
              </ul>
            ) : null}
            <p className={styles.stack}>{job.stack.join(' · ')}</p>
          </div>
        </article>
      ))}
    </div>
  </section>
)

export default Experience
