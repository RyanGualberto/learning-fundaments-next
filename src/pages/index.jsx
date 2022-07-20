import Link from "next/link"
import Navigator from "../components/Navigator"

export default function Home(){
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            flexWrap: 'wrap'
        }}>
            <Navigator route="/estiloso" color="green" text="Estiloso"/>
            <Navigator route="/app" color="red" text="App" />
            <Navigator route="/jsx" color="yellow" text="JSX" />

        </div>
    )
}