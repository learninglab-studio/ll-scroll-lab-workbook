import ReactPlayer from 'react-player'
import YouTubeBackground from '../../src/components/video/YouTubeBackground'

export default function Page() {
    return (
        <div className="page">
            <YouTubeBackground url='https://www.youtube.com/watch?v=2UUKVPC4Fq4' />
            <h1>Background Change</h1>
        </div>
    )
}