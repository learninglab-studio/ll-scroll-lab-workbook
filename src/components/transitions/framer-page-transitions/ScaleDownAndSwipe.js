import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { useRouter } from 'next/router';
import styles from './ScaleDownAndSwipe.module.css';


const config = {
    variants: {
      in: {
        scale: 0.8,
        y: 100,
        x: "100%",
        transition: {
            duration: 0.4
        }
      },
      center: {
          x: 0,
          scale: 0.8,
          transformOrigin: 'top',
          transition: {
            duration: 0.4
          }
        },
      scaleUp: {
          scale: 1,
          y: 0,
          transition: {
            duration: 0.4,
            delay: 0.5
          }
        },
      scaleDown: {
          scale: 0.8,
          y: 100,
          transition: {
              duration: 0.4
          }
      },
      out: {
          x: "-100%",
          transition: {
          duration: 0.4,
          delay: 0.5
          }
      },
    },
    initial: "in",
    animate: ["center", "scaleUp"],
    exit: ["scaleDown", "out"]
  };

const ScaleDownAndSwipe = ({ children }) => {
    const { asPath } = useRouter();
    const shouldReduceMotion = useReducedMotion();
    return (
            <div className={styles.effect}>
                <AnimatePresence
                    initial={false}
                    exitBeforeEnter
                >
                    <motion.div
                        variants={!shouldReduceMotion ? config.variants : null}
                        initial={config.initial}
                        animate={config.animate}
                        exit={config.exit}
                        key={asPath}
                        >
                            {children}
                    </motion.div>
                </AnimatePresence>
            </div>
        );
};


export default ScaleDownAndSwipe