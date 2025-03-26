import React from 'react'
import { useDispatch } from 'react-redux'
import { setActiveNav } from '../../features/header/slice'
import styles from './ScrollUp.module.scss'

const ScrollUp: React.FC = () => {
  const dispatch = useDispatch()

  const hendlerClick = (): void => {
    dispatch(setActiveNav('#home'))
  }

  window.addEventListener('scroll', () => {
    const scrollUp = document.querySelector('#scrollUp')

    if (window.pageYOffset >= 560) {
      scrollUp?.classList.add(`${styles.showScroll}`)
    } else {
      scrollUp?.classList.remove(`${styles.showScroll}`)
    }

  })

  return (
    <a
      className={styles.scrollUp}
      id="scrollUp"
      href="#home"
      onClick={hendlerClick}>
      <i className={`${styles.scrollIcon} uil uil-arrow-up`} />
    </a>
  )
}

export default ScrollUp