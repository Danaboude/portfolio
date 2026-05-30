"use client";
import { useEffect, useRef } from 'react';
import styles from '../styles/Experience.module.css';

const experiences = [
  {
    role: 'Contract Software Engineer',
    company: 'aeriez',
    companyUrl: 'https://aeriez.com/',
    location: 'Remote',
    period: 'Dec 2025 – Present',
    bullets: [
      'Developed enterprise Flutter applications for industrial operations and real-time employee reporting workflows.',
      'Built secure real-time notification systems using RabbitMQ and MQTT for critical machine alerts.',
      'Implemented offline-first mobile workflows and encrypted local data handling for restricted industrial environments.',
      'Integrated AI-powered image validation workflows using YOLO TFLite models for industrial quality inspection.',
      'Collaborated with Angular and .NET backend systems for operational monitoring infrastructure.',
    ],
  },
  {
    role: 'Frontend Developer Intern',
    company: 'MOSTRO.xyz',
    companyUrl: 'https://MOSTRO.xyz',
    location: 'Remote',
    period: 'Nov 2025 – Dec 2025',
    bullets: [
      'Built reusable, optimised UI components with React Native (Expo) for a music creator monetisation platform on the Sallona blockchain.',
      'Contributed to responsive web interfaces using React.js, Next.js, and Tailwind CSS.',
      'Wrote unit tests with Jest achieving 90%+ code coverage.',
    ],
  },
  {
    role: 'Flutter Engineer (Independent)',
    company: 'Self-Employed',
    location: 'Remote',
    period: 'Feb 2020 – Present',
    bullets: [
      'Designed, developed, and deployed 10+ Flutter production applications independently.',
      'Built scalable cross-platform applications across healthcare, e-commerce, and service marketplace domains.',
      'Implemented Firebase Authentication, push notifications, payment systems, deep linking, and real-time communication.',
      'Published and maintained production applications on Google Play and Apple App Store.',
      'Developed scalable Flutter architectures using BLoC, Clean Architecture, and REST API integrations.',
    ],
  },
];

const Experience = () => {
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
    <section id="experience" className={styles.experience}>
      <div className={styles.header}>
        <div className={styles.eyebrow}>Experience</div>
        <h2 className={styles.title}>Where I&apos;ve worked</h2>
      </div>

      <div className={styles.timeline}>
        {experiences.map((exp, i) => (
          <div
            key={i}
            className={styles.card}
            ref={(el) => { cardRefs.current[i] = el; }}
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <div className={styles.cardTop}>
              <h3 className={styles.role}>{exp.role}</h3>
              <span className={styles.period}>{exp.period}</span>
            </div>
            <p className={styles.company}>{exp.company} · {exp.location}</p>
            <ul className={styles.bullets}>
              {exp.bullets.map((b, j) => (
                <li key={j}>{b}</li>
              ))}
            </ul>
            {exp.companyUrl && (
              <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer" className={styles.companyLink}>
                {exp.companyUrl}
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
