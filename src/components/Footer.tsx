import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.copy}>
          &copy; {new Date().getFullYear()} Abdulkareem Dandal
        </p>
        <div className={styles.socials}>
          <a href="https://linkedin.com/in/abdulkareem-dandal-a10470234" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            in
          </a>
          <a href="https://github.com/danaboude" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            gh
          </a>
          <a href="mailto:danaboude@gmail.com" aria-label="Email">
            @
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
