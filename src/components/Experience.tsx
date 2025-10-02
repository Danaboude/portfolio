"use client";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from '../styles/Experience.module.css';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    role: 'Full-Stack Developer (Freelance)',
    company: 'Remote',
    period: 'Feb 2020 – Present',
    description: 'Developed and maintained a portfolio of web and mobile applications for various clients, demonstrating expertise in full-stack development, e-commerce solutions, and AI integration.',
  },
  {
    role: 'Project Manager',
    company: 'Alamoudifitness.com.sa',
    location: 'Riyadh, Saudi Arabia',
    period: 'Jun 2023 – Sep 2024',
    description: 'Led the development and optimization of a high-traffic e-commerce platform, ensuring smooth UX and performance. Improved user retention by 25% through UI/UX enhancements and bug resolution. Managed product listings and implemented SEO best practices. Conducted data analysis to improve sales performance and customer engagement.',
  },
];

const Experience = () => {
  const sectionRef = useRef(null);
  const timelineItemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const sectionElement = sectionRef.current;

    if (sectionElement) {
      timelineItemRefs.current.forEach((item, index) => {
        if (item) {
          gsap.from(item, {
            opacity: 0,
            x: index % 2 === 0 ? -100 : 100,
            duration: 1,
            scrollTrigger: {
              trigger: item,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          });
        }
      });
    }
  }, []);

  return (
    <section id="experience" className={styles.experience} ref={sectionRef}>
      <h2 className={styles.title}>Professional Experience</h2>
      <div className={styles.timeline}>
        {experiences.map((exp, index) => (
          <div 
            key={index} 
            className={styles.timelineItem}
            ref={el => timelineItemRefs.current[index] = el}
          >
            <div className={styles.timelineContent}>
              <h3>{exp.role}</h3>
              <h4>{exp.company} {exp.location && `| ${exp.location}`}</h4>
              <p className={styles.period}>{exp.period}</p>
              <p>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
