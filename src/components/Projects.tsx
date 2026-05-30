"use client";

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import styles from '../styles/Projects.module.css';

const projectsData = [
  {
    label: 'Enterprise · Flutter · AI',
    name: 'Industrial Inspection Platform',
    description: 'Offline-first Flutter application for industrial image capture and quality validation. Integrated YOLO TFLite AI models achieving sub-150ms defect detection inference with automated batch processing.',
    tags: ['Flutter', 'Dart', 'Hive', 'BLoC', 'TFLite', 'Clean Architecture'],
  },
  {
    label: 'Healthcare · Flutter',
    name: 'Ta3af Mental Health App',
    description: 'Scalable healthcare application supporting patient-therapist interactions, real-time chat, and group sessions with Firebase Auth, PDF generation, and push notifications.',
    tags: ['Flutter', 'Firebase', 'Dio', 'BLoC', 'Freezed', 'GetIt'],
  },
  {
    label: 'E-commerce · Flutter',
    name: 'Ambots Drone Marketplace',
    description: 'Flutter-based e-commerce and education platform for the Saudi drone market with payment systems, OMS workflows, and push notification infrastructure.',
    tags: ['Flutter', 'BLoC', 'Firebase', 'REST APIs'],
    link: 'https://play.google.com/store/apps/details?id=com.ambots.drone',
  },
  {
    label: 'Web · Agency',
    name: 'Elevate Marketing Agency',
    description: 'Modern responsive digital portfolio for a marketing agency with automated inquiry and lead-generation system using Resend for email delivery.',
    tags: ['Next.js', 'React.js', 'Resend', 'Tailwind CSS'],
    link: 'https://elevatemarketinganu.com/',
  },
  {
    label: 'Mobile · Fashion',
    name: 'My Sister Closed',
    description: 'Mobile application for buying and selling new and used clothing targeting the Saudi market with product browsing and a simple seller dashboard.',
    tags: ['Flutter', 'GetX', 'Dart', 'Firebase'],
    link: 'https://play.google.com/store/apps/details?id=com.fashio.app',
  },
  {
    label: 'Desktop · AI · Healthcare',
    name: 'Dental Clinic System',
    description: 'Cross-platform desktop management system with AI-driven image analysis to automate X-ray evaluations and enhance diagnostic accuracy.',
    tags: ['Flutter', 'Python', 'Flask', 'AI (Image Analysis)', 'Clean Architecture'],
    images: [
      '/Dental Clinic Application/1.png',
      '/Dental Clinic Application/2.png',
      '/Dental Clinic Application/3.png',
      '/Dental Clinic Application/4.png',
      '/Dental Clinic Application/5.png',
      '/Dental Clinic Application/6.png',
    ],
  },
];

interface CarouselProps {
  images: string[];
  onImageClick: (src: string) => void;
}

const Carousel: React.FC<CarouselProps> = ({ images, onImageClick }) => {
  const [idx, setIdx] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (trackRef.current) {
      const img = trackRef.current.children[idx] as HTMLElement;
      img?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    }
  }, [idx]);

  return (
    <div className={styles.carouselWrap}>
      <div className={styles.carouselTrack} ref={trackRef}>
        {images.map((src, i) => (
          <Image
            key={i}
            src={src}
            alt={`Screenshot ${i + 1}`}
            width={400}
            height={180}
            style={{ flex: '0 0 100%', width: '100%', height: '180px', objectFit: 'cover', cursor: 'pointer' }}
            onClick={() => onImageClick(src)}
          />
        ))}
      </div>
      {images.length > 1 && (
        <>
          <button className={`${styles.carouselBtn} ${styles.prev}`} onClick={() => setIdx(i => (i === 0 ? images.length - 1 : i - 1))}>‹</button>
          <button className={`${styles.carouselBtn} ${styles.next}`} onClick={() => setIdx(i => (i === images.length - 1 ? 0 : i + 1))}>›</button>
        </>
      )}
    </div>
  );
};

const Projects = () => {
  const [overlay, setOverlay] = useState<{ src: string; all: string[] } | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

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
      { threshold: 0.08 }
    );

    cardRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const nav = (dir: 1 | -1) => {
    if (!overlay) return;
    const i = overlay.all.indexOf(overlay.src);
    const next = (i + dir + overlay.all.length) % overlay.all.length;
    setOverlay({ ...overlay, src: overlay.all[next] });
  };

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <div className={styles.eyebrow}>Projects</div>
          <h2 className={styles.title}>Selected work</h2>
        </div>

        <div className={styles.grid}>
          {projectsData.map((p, i) => (
            <div
              key={i}
              className={styles.card}
              ref={(el) => { cardRefs.current[i] = el; }}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <span className={styles.cardLabel}>{p.label}</span>
              <h3 className={styles.cardName}>{p.name}</h3>
              <p className={styles.cardDesc}>{p.description}</p>
              {p.images && (
                <Carousel images={p.images} onImageClick={(src) => setOverlay({ src, all: p.images! })} />
              )}
              <div className={styles.tags}>
                {p.tags.map((t) => <span key={t} className={styles.tag}>{t}</span>)}
              </div>
              {p.link && (
                <div className={styles.cardFooter}>
                  <a href={p.link} target="_blank" rel="noopener noreferrer" className={styles.visitLink}>
                    View live ↗
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {overlay && (
        <div className={styles.overlay} onClick={() => setOverlay(null)}>
          <button className={styles.overlayClose} onClick={() => setOverlay(null)}>✕</button>
          {overlay.all.length > 1 && (
            <>
              <button className={`${styles.overlayNav} ${styles.prev}`} onClick={(e) => { e.stopPropagation(); nav(-1); }}>‹</button>
              <button className={`${styles.overlayNav} ${styles.next}`} onClick={(e) => { e.stopPropagation(); nav(1); }}>›</button>
            </>
          )}
          <Image src={overlay.src} alt="Full screen" className={styles.overlayImg} width={1200} height={800} onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </section>
  );
};

export default Projects;
