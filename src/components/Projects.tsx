"use client";

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from '../styles/Projects.module.css';
import carouselStyles from '../styles/ImageCarousel.module.css';

gsap.registerPlugin(ScrollTrigger);

const projectsData = [
  {
    name: 'Elevate Marketing Agency',
    description: 'Developed a modern, responsive digital portfolio for a marketing agency focused on visionary storytelling and immersive user experiences. Integrated an automated inquiry and lead-generation system using Resend.',
    technologies: ['Next.js', 'React.js', 'Resend', 'Tailwind CSS'],
    link: 'https://elevatemarketinganu.com/',
  },
  {
    name: 'Ambots',
    description: 'Developed a comprehensive e-commerce and educational platform targeting the Saudi drone market. Implemented a seamless marketplace and specialized educational content.',
    technologies: ['Flutter', 'BLOC', 'Dart', 'RESTful APIs'],
    link: 'https://play.google.com/store/apps/details?id=com.ambots.drone',
  },
  {
    name: 'My Sister Closed',
    description: 'Developed a mobile application for buying and selling new and used clothing, targeting the Saudi market. Features easy product browsing and a simple seller dashboard.',
    technologies: ['Flutter', 'GetX', 'Dart', 'Firebase'],
    link: 'https://play.google.com/store/apps/details?id=com.fashio.app',
  },
  {
    name: 'Beauty Jazan App',
    description: 'Developed a dual mobile application for service providers and clients. Allows service providers to register staff and clients to browse and book beauty services.',
    technologies: ['Flutter', 'BLoC', 'Dart', 'Firebase'],
  },
  {
    name: 'Dental Clinic System',
    description: 'Engineered a cross-platform desktop management system with integrated AI-driven image analysis to automate X-ray evaluations, enhancing diagnostic accuracy.',
    technologies: ['Flutter', 'Python', 'Flask', 'AI (Image Analysis)', 'Clean Architecture'],
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
          <Image
            key={index}
            src={image}
            alt={`Project image ${index + 1}`}
            className={carouselStyles.carouselImage}
            width={400}
            height={200}
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
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;

    gsap.fromTo(el.children, 
      { opacity: 0, scale: 0.95, y: 30 },
      { 
        opacity: 1, 
        scale: 1, 
        y: 0, 
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    );
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
    <section id="projects" className={styles.projects}>
      <h2 className={styles.title}>Key Projects</h2>
      <div className={styles.grid} ref={gridRef}>
        {projectsData.map((project, index) => (
          <div key={index} className={styles.card}>
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
          <Image 
            src={fullScreenImage.src} 
            alt="Full screen" 
            className={carouselStyles.fullScreenImage} 
            width={1200}
            height={800}
          />
        </div>
      )}
    </section>
  );
};

export default Projects;
