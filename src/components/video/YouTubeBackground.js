import styles from './YouTubeBackground.module.css'
import ReactPlayer from 'react-player'

const YouTubeBackground = ({url}) => {
    return (
        <div className={styles.playerWrapper}>
            <ReactPlayer
                className={styles.reactPlayer}
                url={url}
                width='100%'
                height='100vh'
            />
        </div>
    )
}

export default YouTubeBackground
