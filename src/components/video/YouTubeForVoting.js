import styles from './YouTubeForVoting.module.css'
import ReactPlayer from 'react-player'
import Draggable from 'react-draggable'
import { useEffect, useState } from 'react'


const YouTubeForVoting = ({url}) => {
    const [hasWindow, setHasWindow] = useState()
    useEffect(() => {
        if (typeof window !== undefined) {
            setHasWindow(true)
        }
    }, [])
    return (
        <div style={{padding: "20px"}}>
            { hasWindow && 
                <Draggable>
                    <div style={{maxWidth: "150px", alignContent: "right"}}>
                        <div className={styles.playerWrapper}>
                            <ReactPlayer
                                className={styles.reactPlayer}
                                url={url}
                                height="110px"
                                width="150px"
                                controls={false}
                            />
                        </div>
                        <div className={styles.dragHandle}>drag</div>
                    </div>
                </Draggable>
            }
        </div>
       
    )
}

export default YouTubeForVoting