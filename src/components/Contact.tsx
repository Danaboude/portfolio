import styles from '../styles/Contact.module.css';
import MotionWrapper from './MotionWrapper';

const Contact = () => {
  return (
    <MotionWrapper>
      <section id="contact" className={styles.contact}>
        <h2 className={styles.title}>Contact Me</h2>
        <div className={styles.contactInfo}>
          <p>Email: <a href="mailto:danaboude@gmail.com">danaboude@gmail.com</a></p>
          <p>Phone: +36 703404503</p>
          <p>Location: Szombathely, Hungary</p>
        </div>
      </section>
    </MotionWrapper>
  );
};

export default Contact;
