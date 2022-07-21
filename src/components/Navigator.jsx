import Link from "next/link"
import styles from "../styles/Navigator.module.css"

export default function Navigator(props){
    return (
        <Link href={props.route} passHref>
            <div 
            className={styles.navigator}
            style={{
                backgroundColor: props.color ?? 'dodgerblue'
            }}
            >
                {props.text}
            </div>
        </Link>
    )
}