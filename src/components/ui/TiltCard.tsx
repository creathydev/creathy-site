import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface TiltCardProps {
    children: React.ReactNode;
    className?: string;
    maxTilt?: number; // Maximum tilt angle in degrees
    perspective?: number; // Perspective value in px
    scaleOnHover?: number;
}

export const TiltCard = ({
    children,
    className,
    maxTilt = 15,
    perspective = 1000,
    scaleOnHover = 1.05,
}: TiltCardProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    // Motion values for x and y mouse position relative to center (range -0.5 to 0.5)
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Spring physics for smooth animation
    const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
    const springX = useSpring(x, springConfig);
    const springY = useSpring(y, springConfig);

    // Transform mouse position to rotation
    const rotateX = useTransform(springY, [-0.5, 0.5], [maxTilt, -maxTilt]);
    const rotateY = useTransform(springX, [-0.5, 0.5], [-maxTilt, maxTilt]);

    // Optional: Dynamic shadow or glare effect based on tilt
    const brightness = useTransform(springY, [-0.5, 0.5], [1.1, 0.9]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        // Calculate mouse position relative to element center (normalized -0.5 to 0.5)
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
                perspective,
                transformStyle: "preserve-3d",
            }}
            initial={{ scale: 1 }}
            animate={{ scale: isHovered ? scaleOnHover : 1 }}
            transition={{ duration: 0.2 }}
            className={cn("relative w-full h-full cursor-pointer", className)}
        >
            <motion.div
                style={{
                    rotateX,
                    rotateY,
                    filter: `brightness(${brightness})`, // Subtle light effect
                    transformStyle: "preserve-3d",
                }}
                className="w-full h-full"
            >
                {children}

                {/* Optional Glare Overlay */}
                <div
                    className="absolute inset-0 w-full h-full pointer-events-none opacity-0 transition-opacity duration-300 rounded-2xl bg-gradient-to-tr from-transparent via-white/10 to-transparent"
                    style={{
                        opacity: isHovered ? 1 : 0,
                        transform: "translateZ(1px)", // Prevent z-fighting
                    }}
                />
            </motion.div>
        </motion.div>
    );
};
