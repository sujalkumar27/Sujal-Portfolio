import { useEffect, useRef, useState } from 'react';
import { useInView, motion, useMotionValue, useTransform, animate } from 'motion/react';

interface Props {
  /** Final numeric value to count up to. */
  to: number;
  /** Optional text prefix, e.g. "Top ". */
  prefix?: string;
  /** Optional text suffix, e.g. "+", "%ile", " Day". */
  suffix?: string;
  /** Animation duration in seconds. */
  duration?: number;
  className?: string;
}

export const AnimatedCounter = ({ to, prefix = '', suffix = '', duration = 1.6, className }: Props) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (v) => Math.round(v).toLocaleString());
  const [display, setDisplay] = useState('0');

  useEffect(() => {
    if (!inView) return;
    const controls = animate(motionValue, to, {
      duration,
      ease: [0.16, 1, 0.3, 1]
    });
    const unsub = rounded.on('change', (v) => setDisplay(v));
    return () => {
      controls.stop();
      unsub();
    };
  }, [inView, to, duration, motionValue, rounded]);

  return (
    <motion.span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </motion.span>
  );
};
