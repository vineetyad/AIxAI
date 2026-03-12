import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
    const [position, setPosition] = useState({ x: -100, y: -100 });
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const updatePosition = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
            if (!isVisible) setIsVisible(true);
        };

        const updateHoverState = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            // Check if hovering over standard clickable elements or the scroll dots
            const isClickable = target.closest('a, button, input, textarea, select, .scroll-dot, .clickable');
            setIsHovering(!!isClickable);
        };

        const handleMouseLeave = () => {
            setIsVisible(false);
        };

        const handleMouseEnter = () => {
            setIsVisible(true);
        };

        window.addEventListener('mousemove', updatePosition);
        window.addEventListener('mouseover', updateHoverState);
        document.addEventListener('mouseleave', handleMouseLeave);
        document.addEventListener('mouseenter', handleMouseEnter);

        return () => {
            window.removeEventListener('mousemove', updatePosition);
            window.removeEventListener('mouseover', updateHoverState);
            document.removeEventListener('mouseleave', handleMouseLeave);
            document.removeEventListener('mouseenter', handleMouseEnter);
        };
    }, [isVisible]);

    if (!isVisible) return null;

    return (
        <div
            className="cursor-tracker"
            style={{
                transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
            }}
        >
            <div className={`cursor-dot ${isHovering ? 'hovering' : ''}`}>
                <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {/* The Dot */}
                    <circle cx="50" cy="20" r="8" fill="#2B4A7A" />
                    {/* The A Frame */}
                    <path d="M50 35 L30 85 L38 85 L50 55 L62 85 L70 85 Z" fill="#2B4A7A" />
                    {/* The Crossed Slash */}
                    <path d="M25 45 L75 80 L70 85 L20 50 Z" fill="#2B4A7A" />
                    <path d="M75 45 L25 80 L30 85 L80 50 Z" fill="#2B4A7A" />
                </svg>
            </div>
        </div>
    );
};
