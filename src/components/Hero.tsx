"use client";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import styles from '../styles/Hero.module.css';

const Hero = () => {
  const heroRef = useRef(null);
  const marqueeRef = useRef(null);
  const actionsRef = useRef(null);

  useEffect(() => {
    const heroElement = heroRef.current;
    const marqueeElement = marqueeRef.current;
    const actionsElement = actionsRef.current;

    if (heroElement && marqueeElement && actionsElement) {
      const tl = gsap.timeline();

      tl.from(marqueeElement, {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      })
      .from(actionsElement, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      }, '-=0.5');
    }
  }, []);

  return (
    <section className={styles.hero} ref={heroRef}>
      <div className={styles.marquee} ref={marqueeRef}>
        <div className={styles.marqueeContent}>
          <span>Abdulkareem Dandal • Full-Stack & Mobile Developer • 5+ Years Experience • </span>
          <span>Abdulkareem Dandal • Full-Stack & Mobile Developer • 5+ Years Experience • </span>
          <span>Abdulkareem Dandal • Full-Stack & Mobile Developer • 5+ Years Experience • </span>
          <span>Abdulkareem Dandal • Full-Stack & Mobile Developer • 5+ Years Experience • </span>
        </div>
      </div>
      <div className={styles.heroActions} ref={actionsRef}>
        <p className={styles.subtitle}>
          Crafting scalable cross-platform applications and AI-powered systems with precision and passion.
        </p>
        <a href="#projects" className={styles.ctaButton}>Explore Projects</a>
        <div className={styles.socialLinks}>
          <a href="https://linkedin.com/in/abdulkareem-dandal-a10470234" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/danaboude" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;