import YouTubeForVoting from "./YouTubeForVoting";
import styles from "./YouTubeVotingMachine.module.css";

export default function YouTubeVotingMachine (props) {
    return (
        <div className={styles.container}>
            <div className={styles.background}></div>
            <YouTubeForVoting url="https://www.youtube.com/watch?v=RgKAFK5djSk"/>
            <YouTubeForVoting url="https://www.youtube.com/watch?v=DeumyOzKqgI&list=RDGMEMQ1dJ7wXfLlqCjwV0xfSNbAVMOpQFFLBMEPI&index=4" />
            <YouTubeForVoting url="https://www.youtube.com/watch?v=odZCQhibzGM" />
            <YouTubeForVoting url="https://www.youtube.com/watch?v=bN5JK1LPrnI" />
            <YouTubeForVoting url="https://www.youtube.com/watch?v=o8pQLtHTPaI" />
            <YouTubeForVoting url="https://www.youtube.com/watch?v=WqkjYKUXERQ" />
            <YouTubeForVoting url="https://www.youtube.com/watch?v=dQw4w9WgXcQ" />
            <YouTubeForVoting url="https://www.youtube.com/watch?v=hCuMWrfXG4E" />
        </div>
    )
}