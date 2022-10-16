import styles from '../../../styles/Home.module.css'
import Link from 'next/link'

const frontPageLinks = [
    { 
      path: "/elements/variable-fonts",
      text: "variable fonts" 
    },
    { 
      path: "/elements/background-change",
      text: "background change" 
    },
    { 
      path: "/experiments/001",
      text: "experiment 001" 
    },
    { 
        path: "/experiments/003",
        text: "experiment 003" 
    },
    { 
      path: "/experiments/music-video-poll-001",
      text: "music video poll 003" 
  },
]

const LinkButton = ({path, text}) => {
    return (
      <div
        style={{
          padding: ".5rem",
          borderRadius: "3px",
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor: "black",
          margin: "10px"
        }}
      >
        <Link href={path} scroll={false}>{text}</Link>
      </div>
    )
  }

const Footer = () => {
    return (      
    <footer className={styles.footer}>
        {frontPageLinks.map((e, i)=> {
          return (
            <LinkButton text={e.text} path={e.path} key={i} />
          )
        })}
      </footer>
      )
}

export default Footer