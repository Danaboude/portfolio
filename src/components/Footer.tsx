import styles from '../styles/Footer.module.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.socials}>
        <a href="https://www.linkedin.com/in/abdalkreem-dandal-a10470234" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/danaboude" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
      </div>
      <p>&copy; {new Date().getFullYear()} Abdulkareem Dandal. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
