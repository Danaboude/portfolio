"use client";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from '../styles/Education.module.css';

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
  const sectionRef = useRef(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const sectionElement = sectionRef.current;

    if (sectionElement) {
      gsap.from(itemRefs.current, {
        opacity: 0,
        y: 50,
        duration: 0.5,
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionElement,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });
    }
  }, []);

  return (
    <section id="education" className={styles.education} ref={sectionRef}>
      <h2 className={styles.title}>Education</h2>
      <div className={styles.educationItem} ref={el => itemRefs.current[0] = el}>
        <h3>MSc in Computer Science (Digital Factory specialization)</h3>
        <h4>ELTE University, Szombathely, Hungary (Started Sep 2025)</h4>
      </div>
      <div className={styles.educationItem} ref={el => itemRefs.current[1] = el}>
        <h3>Bachelor in Information Technology</h3>
        <h4>HPU, Homs (Graduated Feb 2024)</h4>
      </div>
    </section>
  );
};

export default Education;
