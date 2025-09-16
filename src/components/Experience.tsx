import styles from '../styles/Experience.module.css';
import MotionWrapper from './MotionWrapper';

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
  return (
    <MotionWrapper>
      <section id="experience" className={styles.experience}>
        <h2 className={styles.title}>Professional Experience</h2>
        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <div key={index} className={styles.timelineItem}>
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
    </MotionWrapper>
  );
};

export default Experience;
