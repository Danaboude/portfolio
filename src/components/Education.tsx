import styles from '../styles/Education.module.css';
import MotionWrapper from './MotionWrapper';

const Education = () => {
  return (
    <MotionWrapper>
      <section id="education" className={styles.education}>
        <h2 className={styles.title}>Education</h2>
        <div className={styles.educationItem}>
          <h3>MSc in Computer Science (Digital Factory specialization)</h3>
          <h4>ELTE University, Szombathely, Hungary (Started Sep 2025)</h4>
        </div>
        <div className={styles.educationItem}>
          <h3>Bachelor in Information Technology</h3>
          <h4>HPU, Homs (Graduated Feb 2024)</h4>
        </div>
      </section>
    </MotionWrapper>
  );
};

export default Education;
