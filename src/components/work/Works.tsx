import React, { useEffect } from 'react'
import { v4 as getRandomKey } from 'uuid'
import { useDispatch, useSelector } from 'react-redux'
import { projectsData, projectsNav } from './data'
import { setProjects, setItem, setActive } from '../../features/works/slice'
import { selectorsWork } from '../../features/works/selectors'
import WorksItem from './WorksItem'
import styles from './Portfolio.module.scss'

const Works: React.FC = () => {
  const { item, projects, active } = useSelector(selectorsWork)
  const dispatch = useDispatch()

  useEffect(() => {
    if (item.name === 'all') {
      dispatch(setProjects(projectsData))
    } else {
      const newProjects = projectsData.filter(
        project => project.category.toLowerCase() === item.name
      )
      dispatch(setProjects(newProjects))
    }
  }, [item, dispatch])

  const handleClick = (e: React.MouseEvent<HTMLSpanElement>, i: number): void => {
    dispatch(setItem({ name: e.currentTarget.textContent?.toLowerCase() || 'all' }))
    dispatch(setActive(i))
  }

  return (
    <>
      <div className={styles.workFilters}>
        {projectsNav.map((item, i: number) => (
          <span
            onClick={e => handleClick(e, i)}
            key={getRandomKey()}
            className={`${styles.workItem} ${active === i ? styles.workItemActive : ''}`}>
            {item.name}
          </span>
        ))}
      </div>

      <div className={`${styles.workContainer} container grid`}>
        {projects.map((project: any) => (
          <WorksItem {...project} key={getRandomKey()} />
        ))}
      </div>
    </>
  )
}

export default Works
