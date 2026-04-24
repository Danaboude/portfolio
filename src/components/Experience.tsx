"use client";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from '../styles/Experience.module.css';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    role: 'Software Engineer',
    company: 'aeriez',
    location: 'Remote',
    period: 'December 2025 – Present',
    description: 'Architected and deployed a comprehensive machine health monitoring and internal reporting solution using .NET and Angular. Implemented a secure, real-time messaging broker utilizing RabbitMQ and MQTT protocols. Developed a companion mobile application using Flutter for secure, instantaneous operational reports.',
  },
  {
    role: 'Frontend Developer Intern',
    company: 'MOSTRO.xyz',
    location: 'Remote',
    period: 'November 2025 – December 2025',
    description: 'Built reusable and optimized UI components using React Native (Expo) to enhance mobile app performance. Contributed to the development of responsive web applications using React.js, Next.js, and Tailwind CSS.',
  },
  {
    role: 'Full-Stack & Mobile Developer (Freelance)',
    company: 'Remote',
    period: 'Feb 2020 – Present',
    description: 'Designed and delivered 10+ production-ready applications, ranging from custom e-commerce platforms to medical management systems and AI-powered tools. Managed end-to-end project lifecycles, from UI/UX implementation using Figma to backend architecture.',
  },
];

const Experience = () => {
  const sectionRef = useRef(null);
  const timelineItemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    timelineItemRefs.current.forEach((item, index) => {
      if (item) {
        gsap.fromTo(item, 
          { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
          { 
            opacity: 1, 
            x: 0, 
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    });
  }, []);

  return (
    <section id="experience" className={styles.experience} ref={sectionRef}>
      <h2 className={styles.title}>Professional Experience</h2>
      <div className={styles.timeline}>
        {experiences.map((exp, index) => (
          <div 
            key={index} 
            className={styles.timelineItem}
            ref={el => { timelineItemRefs.current[index] = el; }}
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
