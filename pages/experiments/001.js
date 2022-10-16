import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import Footer from '../../src/components/layout/Footer'


const MyComponent = () => {
    const controls = useAnimation()
    
    useEffect(() => {
      controls.start({
        x: "100%",
        backgroundColor: "#f00",
        transition: { duration: 3 },
      })
    }, [])
  
    return <motion.div animate={controls} />
  }


const boxStyle = `
    .box {
        width: 200px;
        height: 200px;
        border-radius: 20px;
        background: rgba(0,0,150,0.5);
        display: flex;
    }
`

export default function Page() {
    const controls = useAnimation()
    useEffect(() => {
        controls.start({
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 180, 180, 0],
            borderRadius: ["5%", "20%", "50%", "50%", "5%"]
        })
    }, [])
    return (
        <div className="page">
            <h1>001</h1>
            <style jsx>{boxStyle}</style>
            <motion.div
                className="box"
                animate={controls}
                transition={{
                    duration: 5,
                    ease: "easeInOut",
                    times: [0, 0.2, 0.5, 0.8, 1],
                    repeat: Infinity,
                    repeatDelay: 1
                }}
            ><h1>001</h1></motion.div>
            <Footer />
        </div>
        
    )
}