import { motion } from "framer-motion";
import Footer from '../../src/components/layout/Footer'


const boxStyle = `
    .box {
        width: 200px;
        height: 200px;
        border-radius: 20px;
        background: rgba(0,0,150,0.5);
    }
`


export default function Page() {
    return (
        <div className="page">
            <h1>Variable Fonts</h1>
            <motion.div
                className="box"
                whileInView={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
            <style jsx>{boxStyle}</style>
            test
            </motion.div>
            <br />
            <motion.div
            className="box"
            animate={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 180, 180, 0],
                borderRadius: ["5%", "20%", "50%", "50%", "5%"]
            }}
            transition={{
                duration: 5,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
                repeat: Infinity,
                repeatDelay: 1
            }}
            />
            <Footer />
        </div>
        
    )
}