import Layout from '../../components/Layout'
import { useRouter } from 'next/router'
export default function ClientFromCode(){
    const route = useRouter()
    console.log(route);
    return (
        <Layout title="Navegacao Dinamica">
            <span>Codigo = {route.query.codigo}</span>
        </Layout>
    )
}