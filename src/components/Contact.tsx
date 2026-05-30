"use client";
import { useEffect, useRef } from 'react';
import styles from '../styles/Contact.module.css';

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.inner} ref={sectionRef}>
        <div className={styles.eyebrow}>Contact</div>
        <h2 className={styles.title}>
          Let&apos;s build<br />something great.
        </h2>
        <p className={styles.subtitle}>
          Open to contract work, freelance projects, and full-time roles.
        </p>

        <div className={styles.links}>
          <a href="mailto:danaboude@gmail.com" className={`${styles.contactLink} ${styles.emailCta}`}>
            danaboude@gmail.com ↗
          </a>
          <a href="https://linkedin.com/in/abdulkareem-dandal-a10470234" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
            LinkedIn
          </a>
          <a href="https://github.com/danaboude" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
            GitHub
          </a>
          <a href="tel:+12687327344" className={styles.contactLink}>
            +1 268 732 7344
          </a>
        </div>

        <p className={styles.meta}>Based in Saint John&apos;s, Antigua and Barbuda · Available remotely worldwide</p>
      </div>
    </section>
  );
};

export default Contact;
