"use client";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from '../styles/Contact.module.css';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const sectionElement = sectionRef.current;

    if (sectionElement) {
      gsap.from(sectionElement, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: sectionElement,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });
    }
  }, []);

  return (
    <section id="contact" className={styles.contact} ref={sectionRef}>
      <h2 className={styles.title}>Contact Me</h2>
      <div className={styles.contactInfo}>
        <p>Email: <a href="mailto:danaboude@gmail.com">danaboude@gmail.com</a></p>
        <p>Phone: +36 703404503</p>
        <p>Location: Szombathely, Hungary</p>
      </div>
    </section>
  );
};

export default Contact;
