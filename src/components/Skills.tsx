"use client";
import { useEffect, useRef } from 'react';
import styles from '../styles/Skills.module.css';

const skillsData = [
  {
    name: 'Mobile Development',
    pills: ['Flutter', 'Dart', 'BLoC', 'Cubit', 'GetX', 'Kotlin', 'React Native (Expo)'],
  },
  {
    name: 'Mobile Features',
    pills: ['Firebase Auth', 'FCM', 'Google Login', 'Apple Login', 'Push Notifications', 'Payment Gateway', 'Deep Linking', 'Offline Storage', 'Background Services'],
  },
  {
    name: 'Architecture & Patterns',
    pills: ['Clean Architecture', 'Repository Pattern', 'Modular Architecture', 'State Management', 'REST API Integration'],
  },
  {
    name: 'Database',
    pills: ['Firebase Firestore', 'PostgreSQL', 'MongoDB', 'MySQL', 'SQL Server', 'SQLite'],
  },
  {
    name: 'Backend & APIs',
    pills: ['.NET Core', 'Node.js', 'Python Flask', 'REST APIs', 'GraphQL'],
  },
  {
    name: 'DevOps & Tools',
    pills: ['Git', 'GitHub Actions', 'CI/CD', 'Docker', 'AWS', 'Figma', 'Postman'],
  },
];

const Skills = () => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    cardRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <div className={styles.eyebrow}>Skills</div>
          <h2 className={styles.title}>Tech stack</h2>
        </div>

        <div className={styles.grid}>
          {skillsData.map((cat, i) => (
            <div
              key={cat.name}
              className={styles.category}
              ref={(el) => { cardRefs.current[i] = el; }}
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <p className={styles.categoryName}>{cat.name}</p>
              <div className={styles.pills}>
                {cat.pills.map((pill) => (
                  <span key={pill} className={styles.pill}>{pill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
