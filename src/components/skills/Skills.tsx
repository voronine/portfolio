import React from 'react'
import styles from './Skills.module.scss'

type SkillGroup = { title: string; items: string[] }

const groups: SkillGroup[] = [
  { title: 'Frontend & Mobile', items: ['React', 'TypeScript', 'JavaScript', 'Redux Toolkit', 'React Native', 'HTML / CSS'] },
  { title: 'Backend & Databases', items: ['Node.js', 'REST API', 'WebSocket', 'Microservices', 'MongoDB', 'PostgreSQL'] },
  { title: 'DevOps & Security', items: ['Docker', 'Nginx', 'VPS / Cloud', 'GitHub Actions CI/CD', 'Cloudflare', 'JWT / RBAC'] },
  { title: 'Automation & AI', items: ['Playwright', 'Claude AI', 'Telegram Bot API', 'Chrome Extensions'] },
  { title: 'Marketing & Analytics', items: ['Keitaro', 'Zeus', 'Meta Pixel', 'Google Ads (GCLID)', 'AppsFlyer', 'Google Play Console'] },
  { title: 'Education', items: ["Master's, Radio Electronics and Computer Systems · MNTU", 'Full-Stack course · Mate Academy', 'React course · ItGid'] },
]

const half = (items: string[]) => {
  const mid = Math.ceil(items.length / 2)
  return [items.slice(0, mid), items.slice(mid)].filter(col => col.length)
}

const Skills: React.FC = () => (
  <section className="skills section parallax-section" id="skills">
    <h2 className="section__title">Skills</h2>
    <span className="section__subTitle">My technical stack</span>
    <div className={`${styles.skillsContainer} container grid`}>
      {groups.map(group => (
        <div key={group.title} className={styles.skillsContent}>
          <h3 className={styles.skillsTitle}>{group.title}</h3>
          <div className={styles.skillsBox}>
            {(group.title === 'Education' ? [group.items] : half(group.items)).map(col => (
              <div key={col[0]} className={styles.skillsGroup}>
                {col.map(item => (
                  <div key={item} className={styles.skillsData}>
                    <i className="bx bx-badge-check" />
                    <h3 className={styles.skillsName}>{item}</h3>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
)

export default Skills
