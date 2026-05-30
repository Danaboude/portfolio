import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <div className={styles.headerWrap}>
      <header className={styles.header}>
        <div className={styles.logo}>
          AK<span>.</span>
        </div>
        <nav className={styles.nav}>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <a href="#contact" className={styles.ctaLink}>Contact</a>
        </nav>
      </header>
    </div>
  );
};

export default Header;
