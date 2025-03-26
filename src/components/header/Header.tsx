import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setToggle, setActiveNav } from '../../features/header/slice'
import { selectorHeader } from '../../features/header/selectors'
import styles from './Header.module.scss'

const Header: React.FC = () => {
  window.addEventListener('scroll', () => {
    const header = document.querySelector('#header')
    if (window.pageYOffset >= 40) {
      header?.classList.add(`${styles.scrollHeader}`)
    } else {
      header?.classList.remove(`${styles.scrollHeader}`)
    }
  })

  const { toggle, activeNav } = useSelector(selectorHeader)
  const dispatch = useDispatch()

  const toggleMenuOnClick = (): void => {
    dispatch(setToggle(!toggle))
  }

  return (
    <header className={`${styles.header} parallax-section`} id="header">
      <nav className={`${styles.nav} container`}>
        <a href="#/" className={styles.navLogo}>
          Voronin Yevhenii
        </a>

        <div className={ toggle
              ? `${styles.navMenu} ${styles.showMenu}`
              : styles.navMenu
          }>
          <ul className={styles.navList}>
            <li className="nav__item">
              <a
                href="#home"
                onClick={() => dispatch(setActiveNav('#home'))}
                className={ activeNav === '#home'
                    ? `${styles.navLink} ${styles.activeLink}`
                    : styles.navLink }
              >
                <i className={`uil uil-estate ${styles.navIcon}`} /> Home
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#about"
                onClick={() => dispatch(setActiveNav('#about'))}
                className={ activeNav === '#about'
                    ? `${styles.navLink} ${styles.activeLink}`
                    : styles.navLink }
              >
                <i className={`uil uil-user ${styles.navIcon}`} /> About
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#skills"
                onClick={() => dispatch(setActiveNav('#skills'))}
                className={ activeNav === '#skills'
                    ? `${styles.navLink} ${styles.activeLink}`
                    : styles.navLink }
              >
                <i className={`uil uil-file-alt ${styles.navIcon}`} /> Skills
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#portfolio"
                onClick={() => dispatch(setActiveNav('#portfolio'))}
                className={ activeNav === '#portfolio'
                    ? `${styles.navLink} ${styles.activeLink}`
                    : styles.navLink }
              >
                <i className={`uil uil-scenery ${styles.navIcon}`} /> Portfolio
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#contact"
                onClick={() => dispatch(setActiveNav('#contact'))}
                className={ activeNav === '#contact'
                    ? `${styles.navLink} ${styles.activeLink}`
                    : styles.navLink }
              >
                <i className={`uil uil-message ${styles.navIcon}`} /> Contact
              </a>
            </li>
          </ul>
          <i className={`uil uil-times ${styles.navClose}`} onClick={toggleMenuOnClick} />
        </div>

        <div className={styles.navToggle} onClick={toggleMenuOnClick}>
          <i className="uil uil-apps" />
        </div>
      </nav>
    </header>
  )
}

export default Header
