import styles from '../styles/Skills.module.css';
import MotionWrapper from './MotionWrapper';

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
  return (
    <MotionWrapper>
      <section id="skills" className={styles.skills}>
        <h2 className={styles.title}>Skills</h2>
        <div className={styles.grid}>
          {Object.entries(skills).map(([category, skillsList]) => (
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
    </MotionWrapper>
  );
};

export default Skills;
