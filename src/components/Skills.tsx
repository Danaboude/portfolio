"use client";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from '../styles/Skills.module.css';

gsap.registerPlugin(ScrollTrigger);

const skillsData = {
  'Mobile Development': ['Flutter', 'React Native', 'React.js', 'Next.js', 'Tailwind CSS', 'State Management (BLOC, GetX)', 'Angular'],
  Backend: ['Node.js (Express.js)', '.NET', 'Python (Django/Flask)', 'RESTful APIs'],
  'Database & Auth': ['PostgreSQL', 'MongoDB', 'SQL Server', 'Firebase'],
  'DevOps & Tools': ['Docker', 'CI/CD (GitHub Actions)', 'AWS', 'Figma (UI/UX translation)'],
  Languages: ['English', 'Arabic', 'German'],
};

const Skills = () => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;

    const children = el.children;
    
    gsap.fromTo(children, 
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.6,
        stagger: 0.1,
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
    <section id="skills" className={styles.skills}>
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.grid} ref={gridRef}>
        {Object.entries(skillsData).map(([category, skillsList]) => (
          <div key={category} className={styles.category}>
            <h3>{category}</h3>
            <ul>
              {skillsList.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
