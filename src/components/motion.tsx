import { motion, type Variants } from "framer-motion";
import { type ReactNode } from "react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: "fadeUp" | "fadeIn" | "scaleIn";
  duration?: number;
}

const variants = { fadeUp, fadeIn, scaleIn };

export const FadeIn = ({
  children,
  className,
  delay = 0,
  variant = "fadeUp",
  duration = 0.5,
}: FadeInProps) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-40px" }}
    transition={{ duration, delay, ease: "easeOut" }}
    variants={variants[variant]}
    className={className}
  >
    {children}
  </motion.div>
);

interface StaggerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}

export const Stagger = ({ children, className, staggerDelay = 0.1 }: StaggerProps) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-40px" }}
    transition={{ staggerChildren: staggerDelay }}
    className={className}
  >
    {children}
  </motion.div>
);

export const StaggerItem = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <motion.div
    variants={fadeUp}
    transition={{ duration: 0.5, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);
