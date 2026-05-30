"use client";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import styles from '../styles/Hero.module.css';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const children = el.querySelectorAll('[data-animate]');
    gsap.fromTo(
      children,
      { y: 32, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        stagger: 0.12,
        ease: 'power3.out',
        delay: 0.1,
      }
    );
  }, []);

  return (
    <section className={styles.hero} ref={containerRef}>
      <div className={styles.eyebrow} data-animate>
        Senior Flutter Engineer · 5+ Years
      </div>

      <h1 className={styles.heading} data-animate>
        Building apps<br />
        that <em>scale</em> &amp;<br />
        perform.
      </h1>

      <p className={styles.subheading} data-animate>
        Cross-platform mobile engineer specialising in Flutter, clean architecture,
        and real-time systems shipping production apps across healthcare, fintech,
        e-commerce, and enterprise.
      </p>

      <div className={styles.actions} data-animate>
        <a href="#projects" className={styles.primaryBtn}>
          View Projects
          <span className={styles.iconCircle}>↗</span>
        </a>
        <a
          href="https://linkedin.com/in/abdulkareem-dandal-a10470234"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.secondaryBtn}
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/danaboude"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.secondaryBtn}
        >
          GitHub
        </a>
      </div>

      <div className={styles.stats} data-animate>
        <div className={styles.stat}>
          <span className={styles.statNum}>10+</span>
          <span className={styles.statLabel}>Apps Shipped</span>
        </div>
        <div className={styles.divider} />
        <div className={styles.stat}>
          <span className={styles.statNum}>5+</span>
          <span className={styles.statLabel}>Years Experience</span>
        </div>
        <div className={styles.divider} />
        <div className={styles.stat}>
          <span className={styles.statNum}>3</span>
          <span className={styles.statLabel}>Companies</span>
        </div>
        <div className={styles.divider} />
        <div className={styles.stat}>
          <span className={styles.statNum}>2</span>
          <span className={styles.statLabel}>Platforms</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
