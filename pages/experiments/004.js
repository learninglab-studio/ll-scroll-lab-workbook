import ReactPlayer from 'react-player'
import YouTubeBackground from '../../src/components/video/YouTubeBackground'
import Footer from '../../src/components/layout/Footer'

export default function Page() {
    return (
        <div >
            <YouTubeBackground url='https://www.youtube.com/watch?v=OpQFFLBMEPI' />
            <div style={{
                height: "100vh"
            }}>
            <div
                style={{
                    color: "rgba(255, 255, 255, 0.7)",
                    padding: "20px",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    width: "300px",
                    borderRadius: "10px",
                    marginTop: "100px",
                    marginLeft: "30px"
                }}
            ><h1>cool? </h1>
            <h1>emotionally satisfying?</h1>
            </div>
            </div>
            <Footer />
            
        </div>
    )
}