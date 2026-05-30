"use client";
import { useEffect, useRef } from 'react';
import styles from '../styles/Education.module.css';

const Education = () => {
  const cardRef = useRef<HTMLDivElement>(null);

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

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="education" className={styles.education}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <div className={styles.eyebrow}>Education & Languages</div>
          <h2 className={styles.title}>Background</h2>
        </div>

        <div className={styles.card} ref={cardRef}>
          <p className={styles.degree}>Bachelor in Information Technology</p>
          <p className={styles.school}>HPU — Hama Private University, Syria</p>
          <p className={styles.period}>Sep 2019 – Feb 2024</p>

          <div className={styles.langs}>
            <span className={styles.langTag}>
              Arabic <span className={styles.langLevel}>Native</span>
            </span>
            <span className={styles.langTag}>
              English <span className={styles.langLevel}>C2</span>
            </span>
            <span className={styles.langTag}>
              German <span className={styles.langLevel}>A2</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
