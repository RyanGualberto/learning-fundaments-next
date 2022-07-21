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
            <Navigator route="/navigation/" color="brown" text="Navigation #01"/>
            <Navigator route="/client/SP/" color="blue" text="Navigation #02"/>
            <Navigator route="/state" color="pink" text="Componente com Estado"/>
            <Navigator route="/integracao" color="violet" text="Integracao"/>
            <Navigator route="/estatico" color="violet" text="Conteudo Estatico"/>
        </div>
    )
}