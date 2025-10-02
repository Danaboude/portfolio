"use client";

import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from '../styles/Projects.module.css';
import carouselStyles from '../styles/ImageCarousel.module.css';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    name: 'Royz Store E-commerce Platform',
    description: 'Architected and developed a full-stack e-commerce ecosystem with website, mobile app, admin portal, and delivery system.',
    technologies: ['Node.js', 'Express.js', 'Next.js', 'React.js', 'Flutter', 'MySQL', 'Firebase (FCM)'],
    link: 'https://royzstore.com',
  },
  {
    name: 'BAT Online Store',
    description: 'Developed a wholesale/retail e-commerce app with authentication, smart filtering, and product categorization. Implemented ML-based basket analysis (FP-Growth) and recommendation system.',
    technologies: ['Flutter', 'Laravel (REST API)', 'Python', 'Flask', 'Machine Learning'],
    images: [
      '/BAT Online Store/1.png',
      '/BAT Online Store/2.png',
      '/BAT Online Store/3.png',
      '/BAT Online Store/4.png',
      '/BAT Online Store/5.png',
      '/BAT Online Store/6.png',
      '/BAT Online Store/7.png',
    ],
  },
  {
    name: 'Dental Clinic Application',
    description: 'Designed and developed a cross-platform medical data management system for Windows and mobile. Features include patient records, appointments, invoices, expenses, localization (Arabic/English), and PDF generation.',
    technologies: ['Flutter', 'Dart', 'Provider', 'Sqflite', 'PDF generation libraries'],
    images: [
      '/Dental Clinic Application/1.png',
      '/Dental Clinic Application/2.png',
      '/Dental Clinic Application/3.png',
      '/Dental Clinic Application/4.png',
      '/Dental Clinic Application/5.png',
      '/Dental Clinic Application/6.png',
      '/Dental Clinic Application/7.png',
      '/Dental Clinic Application/8.png',
      '/Dental Clinic Application/9.png',
    ],
  },
];

interface ImageCarouselProps {
  images: string[];
  onImageClick: (imageSrc: string) => void;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, onImageClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollRef.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className={carouselStyles.carouselContainer}>
      <div className={carouselStyles.carouselImages} ref={scrollRef}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Project image ${index + 1}`}
            className={carouselStyles.carouselImage}
            onClick={() => onImageClick(image)}
          />
        ))}
      </div>
      {images.length > 1 && (
        <>
          <button onClick={handlePrev} className={`${carouselStyles.carouselButton} ${carouselStyles.prev}`}>
            &#10094;
          </button>
          <button onClick={handleNext} className={`${carouselStyles.carouselButton} ${carouselStyles.next}`}>
            &#10095;
          </button>
        </>
      )}
    </div>
  );
};

const Projects = () => {
  const [fullScreenImage, setFullScreenImage] = useState<{ src: string; allImages: string[]; } | null>(null);
  const sectionRef = useRef(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const sectionElement = sectionRef.current;

    if (sectionElement) {
      gsap.from(cardRefs.current, {
        opacity: 0,
        scale: 0.9,
        duration: 0.5,
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionElement,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });
    }
  }, []);

  const openFullScreen = (imageSrc: string, allImages: string[]) => {
    setFullScreenImage({ src: imageSrc, allImages });
  };

  const closeFullScreen = () => {
    setFullScreenImage(null);
  };

  const handlePrevFullScreen = () => {
    if (fullScreenImage) {
      const currentIndex = fullScreenImage.allImages.indexOf(fullScreenImage.src);
      const prevIndex = (currentIndex === 0) ? fullScreenImage.allImages.length - 1 : currentIndex - 1;
      setFullScreenImage({ ...fullScreenImage, src: fullScreenImage.allImages[prevIndex] });
    }
  };

  const handleNextFullScreen = () => {
    if (fullScreenImage) {
      const currentIndex = fullScreenImage.allImages.indexOf(fullScreenImage.src);
      const nextIndex = (currentIndex === fullScreenImage.allImages.length - 1) ? 0 : currentIndex + 1;
      setFullScreenImage({ ...fullScreenImage, src: fullScreenImage.allImages[nextIndex] });
    }
  };

  return (
    <section id="projects" className={styles.projects} ref={sectionRef}>
      <h2 className={styles.title}>Key Projects</h2>
      <div className={styles.grid}>
        {projects.map((project, index) => (
          <div 
            key={index} 
            className={styles.card}
            ref={el => cardRefs.current[index] = el}
          >
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <div className={styles.technologies}>
              {project.technologies.map((tech, i) => (
                <span key={i} className={styles.tech}>{tech}</span>
              ))}
            </div>
            {project.images && <ImageCarousel images={project.images} onImageClick={(imageSrc) => openFullScreen(imageSrc, project.images || [])} />}
            {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.link}>Visit Project</a>}
          </div>
        ))}
      </div>

      {fullScreenImage && (
        <div className={carouselStyles.fullScreenOverlay}>
          <button className={carouselStyles.closeButton} onClick={closeFullScreen}>X</button>
          {fullScreenImage.allImages.length > 1 && (
            <>
              <button className={`${carouselStyles.carouselButton} ${carouselStyles.prev}`} onClick={handlePrevFullScreen}>&#10094;</button>
              <button className={`${carouselStyles.carouselButton} ${carouselStyles.next}`} onClick={handleNextFullScreen}>&#10095;</button>
            </>
          )}
          <img src={fullScreenImage.src} alt="Full screen" className={carouselStyles.fullScreenImage} />
        </div>
      )}
    </section>
  );
};

export default Projects;
