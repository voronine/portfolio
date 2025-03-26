import React from 'react'
import Social from './Social'
import Data from './Data'
import ScrollDown from './ScrollDown'
import styles from './Home.module.scss'

const Home: React.FC = () => (
  <section className={`${styles.homeContainer} section parallax-section`} id="home">
    <div className={`${styles.homeContainer} container grid`}>
      <div className={`${styles.homeContent} grid`}>
        <Social />
        <div className={styles.homeImg}></div>
        <Data />
      </div>
      <ScrollDown />
    </div>
  </section>
)

export default Home
