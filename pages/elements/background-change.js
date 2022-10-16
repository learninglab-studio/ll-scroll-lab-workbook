import ReactPlayer from 'react-player'
import Footer from '../../src/components/layout/Footer'
import { useEffect, useState } from 'react'


export default function Page() {
    const [isPlaying, setIsPlaying] = useState()
    useEffect(() => {
        setIsPlaying(true)
    }, [])
    return (
        <div className="page">
            <h1>Background Change</h1>
            <ReactPlayer muted={false} url='https://vimeo.com/532360968' playing={isPlaying} controls={true}/>
            <Footer />
        </div>
    )
}