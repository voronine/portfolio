import React from 'react'
import Works from './Works'
import styles from './Portfolio.module.scss'

const Portfolio: React.FC = () => (
  <section className={`${styles.work} section parallax-section`} id="portfolio">
    <h2 className="section__title">Portfolio</h2>
    <span className="section__subTitle">Selected work</span>
    <p className={styles.workNote}>Commercial projects are under NDA: screenshots only.</p>
    <Works />
  </section>
)

export default Portfolio
