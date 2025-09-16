import styles from '../styles/Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.marquee}>
        <div className={styles.marqueeContent}>
          <span>Abdulkareem Dandal • Full-Stack Developer • </span>
          <span>Abdulkareem Dandal • Full-Stack Developer • </span>
          <span>Abdulkareem Dandal • Full-Stack Developer • </span>
          <span>Abdulkareem Dandal • Full-Stack Developer • </span>
        </div>
      </div>
      <div className={styles.heroActions}>
        <a href="#projects" className={styles.ctaButton}>View My Work</a>
        <div className={styles.socialLinks}>
          <a href="https://www.linkedin.com/in/abdalkreem-dandal-a10470234" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/danaboude" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;