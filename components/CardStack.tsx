import React, { useEffect, useRef, useState, useCallback } from 'react';

interface CardStackProps {
    children: React.ReactNode;
}

export const CardStack: React.FC<CardStackProps> = ({ children }) => {
    const cards = React.Children.toArray(children);
    const [activeIndex, setActiveIndex] = useState(0);
    const activeIndexRef = useRef(0);

    useEffect(() => {
        let ticking = false;

        const updateVisuals = () => {
            const viewportHalf = window.innerHeight / 2;
            const sections = document.querySelectorAll('.scroll-section-inner');
            
            let newActiveIndex = activeIndexRef.current;

            sections.forEach((section, index) => {
                const rect = section.getBoundingClientRect();
                const sectionCenter = rect.top + rect.height / 2;
                const distFromCenter = sectionCenter - viewportHalf;
                
                // Maps the distance to a curve: content scrolls away and tilts back.
                // This gives the exact illusion of a cylinder surface rolling underneath.
                // -45 ensures the rotation follows the natural swipe direction.
                const rotateX = (distFromCenter / window.innerHeight) * -45; 
                const scale = Math.max(0.75, 1 - Math.abs(distFromCenter / window.innerHeight) * 0.2);
                const opacity = Math.max(0.1, 1 - Math.abs(distFromCenter / window.innerHeight) * 0.8);
                
                const el = section as HTMLElement;
                el.style.transform = `perspective(1200px) rotateX(${rotateX}deg) scale(${scale})`;
                el.style.opacity = opacity.toFixed(3);
                
                // Active section is whichever is closest to center
                if (Math.abs(distFromCenter) < viewportHalf * 0.5) {
                    newActiveIndex = index;
                }
            });

            if (newActiveIndex !== activeIndexRef.current) {
                activeIndexRef.current = newActiveIndex;
                setActiveIndex(newActiveIndex);
            }
            
            ticking = false;
        };

        const onScroll = () => {
            if (!ticking) {
                requestAnimationFrame(updateVisuals);
                ticking = true;
            }
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll, { passive: true });
        
        // Initial setup
        updateVisuals();

        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onScroll);
        };
    }, []);

    const scrollToIdx = useCallback((idx: number) => {
        const el = document.getElementById(`section-${idx}`);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);

    useEffect(() => {
        const onCustomScroll = (e: Event) => {
            const customEvent = e as CustomEvent<{ index: number }>;
            if (customEvent.detail && typeof customEvent.detail.index === 'number') {
                scrollToIdx(customEvent.detail.index);
            }
        };

        window.addEventListener('scrollToCylinderIndex', onCustomScroll);
        return () => window.removeEventListener('scrollToCylinderIndex', onCustomScroll);
    }, [scrollToIdx]);

    return (
        <div className="scroll-container">
            {cards.map((child, index) => (
                <section key={index} id={`section-${index}`} className="scroll-section">
                    <div className="scroll-section-inner">
                        {child}
                    </div>
                </section>
            ))}

            <div className="scroll-dots">
                {cards.map((_, i) => (
                    <button
                        key={i}
                        className={`scroll-dot ${i === activeIndex ? 'active' : ''}`}
                        onClick={() => scrollToIdx(i)}
                        aria-label={`Go to section ${i + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};
