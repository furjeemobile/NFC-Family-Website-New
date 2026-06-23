import { motion } from "motion/react";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  animationType?: 'float-y' | 'float-y-slow' | 'float-y-fast' | 'float-x';
  delay?: number;
  duration?: number;
};

export function FloatingElement({
  children,
  className = "",
  animationType = "float-y",
  delay = 0,
  duration = 6
}: Props) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        y: animationType === 'float-y' ? [0, -8, 0] :
            animationType === 'float-y-slow' ? [0, -4, 0] :
            animationType === 'float-y-fast' ? [0, -12, 0] :
            [0, -8, 0]
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay
      }}
    >
      {children}
    </motion.div>
  );
}