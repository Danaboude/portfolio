"use client";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from '../styles/Education.module.css';

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = itemRef.current;
    if (!el) return;

    gsap.fromTo(el, 
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          toggleActions: "play none none none"
        }
      }
    );
  }, []);

  return (
    <section id="education" className={styles.education}>
      <h2 className={styles.title}>Education</h2>
      <div className={styles.educationItem} ref={itemRef}>
        <h3>Bachelor in Information Technology (IT Engineering)</h3>
        <h4>HPU (Hama Private University), Syria</h4>
        <p className={styles.period}>Sep 2019 - Feb 2024 • GPA: 2.76</p>
      </div>
    </section>
  );
};

export default Education;
