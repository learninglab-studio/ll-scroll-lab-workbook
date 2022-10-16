import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { useRouter } from 'next/router';
import styles from './SimpleTransition.module.css'

const variants = {
    out: {
      opacity: 0,
      // y: 100,
      x: 1000,
      transition: {
        duration: .5
      }
    },
    inactive: {
        opacity: 1,
        y: 0,
        x: 0,
        transition: {
          duration: .5,
          ease: 'easeInOut'
        },
    },
    in: {
        opacity: 0,
        x: -200,
        transition: {
          duration: .75,
          delay: 0.5
        }
      }
  };

  const SimpleTransition = ({ children }) => {
    const { asPath } = useRouter();
    const shouldReduceMotion = useReducedMotion();
    return (
            <div className={styles.effect}>
                <AnimatePresence
                    initial={false}
                    exitBeforeEnter
                >
                    <motion.div
                        variants={!shouldReduceMotion ? variants : null}
                        initial="in"
                        animate="inactive"
                        exit="out"
                        key={asPath}
                        >
                            {children}
                    </motion.div>
                </AnimatePresence>
            </div>
        );
};

export default SimpleTransition;