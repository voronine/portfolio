//react
import React from 'react'

//componetns
import Social from './Social'
import Data from './Data'
import ScrollDown from './ScrollDown'

//styles
import styles from './Home.module.scss'

const Home: React.FC = () => (
  <section className={`${styles.homeContainer} section`} id="home">
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