//react
import React from 'react'

//components
import Works from './Works'

//styles
import styles from './Portfolio.module.scss'

const Portfolio: React.FC = () => (
  <section className={`${styles.work} section`} id="portfolio">
    <h2 className='section__title'>Portfolio</h2>
    <span className='section__subTitle'>Most resent works</span>
    <Works />
  </section>
)

export default Portfolio