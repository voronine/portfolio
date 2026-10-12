import React, { useRef, useState } from 'react'
import { IProjectsData } from '../../features/works/types'
import styles from './Portfolio.module.scss'

const SWIPE_PX = 40

const Slider: React.FC<{ shots: string[]; title: string }> = ({ shots, title }) => {
  const [current, setCurrent] = useState(0)
  const touchX = useRef<number | null>(null)
  const go = (step: number) => setCurrent(i => (i + step + shots.length) % shots.length)

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchX.current === null) return
    const dx = e.changedTouches[0].clientX - touchX.current
    if (Math.abs(dx) > SWIPE_PX) go(dx < 0 ? 1 : -1)
    touchX.current = null
  }

  return (
    <div
      className={styles.slider}
      onTouchStart={e => { touchX.current = e.touches[0].clientX }}
      onTouchEnd={onTouchEnd}>
      <div className={styles.sliderTrack} style={{ transform: `translateX(-${current * 100}%)` }}>
        {shots.map((shot, i) => (
          <img key={shot} className={styles.sliderImage} src={shot} alt={`${title} ${i + 1}`} />
        ))}
      </div>
      {shots.length > 1 && (
        <>
          <button type="button" className={`${styles.sliderArrow} ${styles.sliderPrev}`} onClick={() => go(-1)} aria-label="Previous">
            <i className="bx bx-chevron-left" />
          </button>
          <button type="button" className={`${styles.sliderArrow} ${styles.sliderNext}`} onClick={() => go(1)} aria-label="Next">
            <i className="bx bx-chevron-right" />
          </button>
          <div className={styles.sliderDots}>
            {shots.map((shot, i) => (
              <button
                type="button"
                key={shot}
                onClick={() => setCurrent(i)}
                className={`${styles.sliderDot} ${i === current ? styles.sliderDotActive : ''}`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

const WorksItem: React.FC<IProjectsData> = props => {
  const { image, title, demo, gitHub, gallery, summary, stack } = props

  return (
    <div className={styles.workCard}>
      {(gallery?.length || 0) > 1 ? (
        <Slider shots={gallery as string[]} title={title} />
      ) : (
        <img className={`${styles.workImage} ${summary ? styles.workShot : ''}`} src={image} alt={title} />
      )}
      <h3 className={styles.workTitle}>{title}</h3>
      {summary && <p className={styles.workSummary}>{summary}</p>}
      {stack?.length ? <p className={styles.workStack}>{stack.join(' · ')}</p> : null}
      <div className={styles.workCardLinks}>
        {demo && (
          <a className={styles.workButton} href={demo} rel="noreferrer" target="_blank">
            Demo <i className={`${styles.workButtonIcon} bx bx-right-arrow-alt`} />
          </a>
        )}
        {gitHub && (
          <a className={styles.workButton} href={gitHub} rel="noreferrer" target="_blank">
            GitHub <i className={`${styles.workButtonIcon} bx bx-right-arrow-alt`} />
          </a>
        )}
      </div>
    </div>
  )
}

export default WorksItem
