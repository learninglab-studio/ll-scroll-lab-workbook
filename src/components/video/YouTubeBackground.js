import styles from './YouTubeBackground.module.css'
import ReactPlayer from 'react-player'
import { useEffect, useState } from 'react'

const YouTubeBackground = ({url}) => {
    const [hasWindow, setHasWindow] = useState()
    useEffect(() => {
        if (typeof window !== undefined) {
            setHasWindow(true)
        }
    }, [])
    return (
        <div className={styles.playerWrapper}>
            {hasWindow && <ReactPlayer
                className={styles.reactPlayer}
                url={url}
                width='100%'
                height='100vh'
            />}
        </div>
    )
}

export default YouTubeBackground
