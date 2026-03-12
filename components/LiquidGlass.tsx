import React, { useRef, useCallback } from 'react';

interface LiquidGlassProps {
    children: React.ReactNode;
    className?: string;
    variant?: 'full' | 'card';
    style?: React.CSSProperties;
}

export const LiquidGlass: React.FC<LiquidGlassProps> = ({
    children,
    className = '',
    variant = 'card',
    style,
}) => {
    const ref = useRef<HTMLDivElement>(null);

    const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        const el = ref.current;
        if (!el) return;

        const rect = el.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;

        el.style.setProperty('--mouse-x', `${x}%`);
        el.style.setProperty('--mouse-y', `${y}%`);
    }, []);

    const handleMouseLeave = useCallback(() => {
        const el = ref.current;
        if (!el) return;

        // Smoothly reset to center
        el.style.setProperty('--mouse-x', '50%');
        el.style.setProperty('--mouse-y', '50%');
    }, []);

    const glassClass = variant === 'full' ? 'glass' : 'glass-card';

    return (
        <div
            ref={ref}
            className={`${glassClass} ${className}`}
            style={style}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <div className="glass-edge-shine" />
            <div style={{ position: 'relative', zIndex: 4 }}>
                {children}
            </div>
        </div>
    );
};
