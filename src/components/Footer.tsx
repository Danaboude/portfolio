"use client";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from '../styles/Footer.module.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    const footerElement = footerRef.current;

    if (footerElement) {
      gsap.from(footerElement, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: footerElement,
          start: 'top 95%',
          toggleActions: 'play none none none',
        },
      });
    }
  }, []);

  return (
    <footer className={styles.footer} ref={footerRef}>
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
