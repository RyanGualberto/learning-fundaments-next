import styles from '../styles/Estiloso.module.css'
import Layout from '../components/Layout'
export default function Estiloso(){
    return (
            <Layout title="Exemplo Com CSS Modularizado">
                <div className={styles.roxo}>
                    <h1>Estilo usando CSS Modular</h1>
                </div>
            </Layout>
    )
}