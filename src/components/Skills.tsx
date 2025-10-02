"use client";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from '../styles/Skills.module.css';

gsap.registerPlugin(ScrollTrigger);

const skills = {
  Backend: ['Node.js', 'Express.js', 'Python', 'Flask', 'PHP', 'Laravel', 'REST APIs'],
  Frontend: ['Next.js', 'React.js', 'JavaScript', 'HTML', 'CSS', 'Bootstrap', 'Angular'],
  Mobile: ['Flutter', 'Dart'],
  Databases: ['MySQL', 'SQL Server', 'Firebase'],
  'AI & Data': ['Machine Learning', 'FP-Growth', 'Collaborative Filtering'],
  'DevOps & Tools': ['Git', 'CI/CD', 'GitHub'],
  'Hardware Integration': ['Arduino', 'Bluetooth'],
};

const Skills = () => {
  const sectionRef = useRef(null);
  const categoryRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const sectionElement = sectionRef.current;

    if (sectionElement) {
      gsap.from(categoryRefs.current, {
        opacity: 0,
        y: 50,
        duration: 0.5,
        stagger: 0.1,
        scrollTrigger: {
          trigger: sectionElement,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });
    }
  }, []);

  return (
    <section id="skills" className={styles.skills} ref={sectionRef}>
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.grid}>
        {Object.entries(skills).map(([category, skillsList], index) => (
          <div 
            key={category} 
            className={styles.category}
            ref={el => categoryRefs.current[index] = el}
          >
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
