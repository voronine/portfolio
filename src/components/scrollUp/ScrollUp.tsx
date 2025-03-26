import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setActiveNav } from '../../features/header/slice'
import styles from './ScrollUp.module.scss'

const ScrollUp: React.FC = () => {
  const dispatch = useDispatch()

  const handlerClick = (): void => {
    dispatch(setActiveNav('#home'))
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollUp = document.querySelector('#scrollUp')
      if (window.pageYOffset >= 560) {
        scrollUp?.classList.add(styles.showScroll)
      } else {
        scrollUp?.classList.remove(styles.showScroll)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <a
      className={styles.scrollUp}
      id="scrollUp"
      href="#home"
      onClick={handlerClick}>
      <i className={`${styles.scrollIcon} uil uil-arrow-up`} />
    </a>
  )
}

export default ScrollUp
