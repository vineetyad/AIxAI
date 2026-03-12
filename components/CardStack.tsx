import React, { useEffect, useRef, useState, useCallback } from 'react';

interface CardStackProps {
    children: React.ReactNode;
}

export const CardStack: React.FC<CardStackProps> = ({ children }) => {
    const cards = React.Children.toArray(children);
    const numCards = cards.length;
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [animatedRotation, setAnimatedRotation] = useState(0); // Tracks current rotation degree
    const isAnimating = useRef(false);
    const currentIndex = useRef(0);

    const [isMobile, setIsMobile] = useState(() => 
        typeof window !== 'undefined' ? window.innerWidth <= 800 : false
    );

    // Cylinder geometry — 30° steps for smooth circular motion
    const stepAngle = 30;
    const cylinderRadius = 1800;
    const scrollPerCard = 1000; // px per section in scroll height

    // Calculated scroll height (only matters for desktop)
    const totalScrollHeight = typeof window !== 'undefined' 
        ? (scrollPerCard * numCards + window.innerHeight)
        : 5000;

    // Smooth ease-in-out for circular rolling feel
    const easeInOut = (t: number) => t < 0.5
        ? 4 * t * t * t
        : 1 - Math.pow(-2 * t + 2, 3) / 2;

    // Helper to transition cards
    const transitionCard = useCallback((nextIdx: number) => {
        if (nextIdx === currentIndex.current || isAnimating.current) return;

        const startRotation = currentIndex.current * stepAngle;
        const targetRotation = nextIdx * stepAngle;
        const startTime = performance.now();
        const duration = 400; // ms (fast, 120hz feel)

        currentIndex.current = nextIdx;
        setActiveIndex(nextIdx);
        // Sync scroll position
        window.scrollTo({ top: nextIdx * scrollPerCard, behavior: 'auto' });

        isAnimating.current = true;

        const animate = (now: number) => {
            const elapsed = now - startTime;
            const t = Math.min(elapsed / duration, 1);
            const eased = easeInOut(t);
            const rotation = startRotation + (targetRotation - startRotation) * eased;

            setAnimatedRotation(rotation);

            if (t < 1) {
                requestAnimationFrame(animate);
            } else {
                setTimeout(() => {
                    isAnimating.current = false;
                }, 100);
            }
        };

        requestAnimationFrame(animate);
    }, [scrollPerCard]);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 800);
        };
        // Initial check
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        const container = containerRef.current;
        if (!container && !isMobile) return;

        let lastScrollTime = 0;
        let scrollAccumulator = 0;
        let lastScrollDirection = 0;
        let wheelActive = false; 

        const onWheel = (e: WheelEvent) => {
            if (isMobile) return; // Let native scrolling handle mobile
            e.preventDefault();
            const now = performance.now();
            
            const timeSinceLastEvent = now - lastScrollTime;
            lastScrollTime = now;

            if (timeSinceLastEvent > 100) {
                scrollAccumulator = 0;
                wheelActive = true; 
            }

            if (!wheelActive || isAnimating.current) {
                return;
            }

            const currentDirection = Math.sign(e.deltaY);
            if (currentDirection !== lastScrollDirection && currentDirection !== 0) {
                scrollAccumulator = 0;
                lastScrollDirection = currentDirection;
            }

            scrollAccumulator += e.deltaY;
            const THRESHOLD = 120;

            if (Math.abs(scrollAccumulator) >= THRESHOLD) {
                const direction = scrollAccumulator > 0 ? 1 : -1;
                const nextIdx = Math.max(0, Math.min(numCards - 1, currentIndex.current + direction));
                
                if (nextIdx !== currentIndex.current) {
                    transitionCard(nextIdx);
                    wheelActive = false; 
                }
                
                scrollAccumulator = 0;
            }
        };

        const onKeyDown = (e: KeyboardEvent) => {
            if (isMobile || isAnimating.current) return;

            let direction = 0;
            if (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ') {
                direction = 1;
                e.preventDefault();
            } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
                direction = -1;
                e.preventDefault();
            } else if (e.key === 'Home') {
                e.preventDefault();
                transitionCard(0);
                return;
            } else if (e.key === 'End') {
                e.preventDefault();
                transitionCard(numCards - 1);
                return;
            }

            if (direction !== 0) {
                const now = performance.now();
                lastScrollTime = now;
                const nextIdx = Math.max(0, Math.min(numCards - 1, currentIndex.current + direction));
                transitionCard(nextIdx);
            }
        };

        // Touch support for mobile (only if strictly on desktop 3D view but using touch, e.g. tablets)
        let touchStartY = 0;
        const onTouchStart = (e: TouchEvent) => {
            if (isMobile) return;
            touchStartY = e.touches[0].clientY;
        };
        const onTouchEnd = (e: TouchEvent) => {
            if (isMobile) return;
            const now = performance.now();
            if (isAnimating.current || now - lastScrollTime < 1000) return;

            const touchEndY = e.changedTouches[0].clientY;
            const diff = touchStartY - touchEndY;

            if (Math.abs(diff) < 40) return; 

            lastScrollTime = now;
            const direction = diff > 0 ? 1 : -1;
            const nextIdx = Math.max(0, Math.min(numCards - 1, currentIndex.current + direction));
            transitionCard(nextIdx);
        };

        // Custom event for programmatic navigation from Header
        const onCustomScroll = (e: Event) => {
            const customEvent = e as CustomEvent<{ index: number }>;
            if (customEvent.detail && typeof customEvent.detail.index === 'number') {
                const targetIdx = Math.max(0, Math.min(numCards - 1, customEvent.detail.index));
                if (window.innerWidth <= 800) {
                    // Mobile: scroll natively to the section ID
                    document.getElementById(`mobile-section-${targetIdx}`)?.scrollIntoView({ behavior: 'smooth' });
                } else {
                    // Desktop: 3D rotate to it
                    transitionCard(targetIdx);
                }
            }
        };

        if (!isMobile) {
            window.addEventListener('wheel', onWheel, { passive: false });
            window.addEventListener('keydown', onKeyDown);
            window.addEventListener('touchstart', onTouchStart, { passive: true });
            window.addEventListener('touchend', onTouchEnd);
        }
        window.addEventListener('scrollToCylinderIndex', onCustomScroll);

        return () => {
            window.removeEventListener('wheel', onWheel);
            window.removeEventListener('keydown', onKeyDown);
            window.removeEventListener('touchstart', onTouchStart);
            window.removeEventListener('touchend', onTouchEnd);
            window.removeEventListener('scrollToCylinderIndex', onCustomScroll);
        };
    }, [numCards, transitionCard, isMobile]);

    if (isMobile) {
        return (
            <div className="mobile-stack">
                {cards.map((child, index) => (
                    <section key={index} id={`mobile-section-${index}`} className="mobile-section">
                        <div className="cylinder-card-inner">
                            {child}
                        </div>
                    </section>
                ))}
            </div>
        );
    }

    return (
        <div
            ref={containerRef}
            className="cylinder-container"
            style={{ height: `${totalScrollHeight}px` }}
        >
            <div className="cylinder-viewport">
                <div
                    className="cylinder-scene"
                    style={{
                        transform: `translateZ(-${cylinderRadius}px) rotateX(${animatedRotation}deg)`,
                        willChange: 'transform'
                    }}
                >
                    {cards.map((child, index) => {
                        const cardAngle = -index * stepAngle;
                        const effectiveAngle = cardAngle + animatedRotation;

                        let norm = effectiveAngle % 360;
                        if (norm > 180) norm -= 360;
                        if (norm < -180) norm += 360;

                        const absAngle = Math.abs(norm);
                        const isFront = absAngle < 10;
                        const isVisible = absAngle < 60;

                        const opacity = isFront ? 1 : Math.max(0, 1 - ((absAngle - 10) / 35));
                        const blur = isFront ? 0 : Math.min(8, (absAngle - 10) * 0.2);

                        return (
                            <div
                                key={index}
                                className="cylinder-card"
                                style={{
                                    transform: `rotateX(${cardAngle}deg) translateZ(${cylinderRadius}px)`,
                                    opacity: Math.max(0.02, opacity),
                                    visibility: isVisible ? 'visible' : 'hidden',
                                    pointerEvents: isFront ? 'auto' : 'none',
                                    filter: blur > 0 ? `blur(${blur}px)` : 'none',
                                    boxShadow: isFront
                                        ? '0 20px 60px rgba(27,42,74,0.15), 0 0 30px rgba(74,127,181,0.08)'
                                        : `0 8px 24px rgba(27,42,74,${0.08 * opacity})`,
                                    willChange: 'opacity, filter, transform'
                                }}
                            >
                                <div className="cylinder-card-inner">
                                    {child}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="scroll-dots">
                {cards.map((_, i) => (
                    <button
                        key={i}
                        className={`scroll-dot ${i === activeIndex ? 'active' : ''}`}
                        onClick={() => transitionCard(i)}
                        aria-label={`Go to section ${i + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};
