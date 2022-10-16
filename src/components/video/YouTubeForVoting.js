import styles from './YouTubeForVoting.module.css'
import ReactPlayer from 'react-player'
import Draggable from 'react-draggable'

const YouTubeForVoting = ({url}) => {
    return (
        <div style={{padding: "20px"}}>
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
        </div>
       
    )
}

export default YouTubeForVoting
