import Layout from '../../components/Layout'
import { useRouter } from 'next/router'
export default function ClientFromCode(){
const router = useRouter();
console.log(router);
    return (
        <Layout title="Navegacao Dinamic">
            <span>Codigo = {router.query.code}</span>
            <span>Codigo = {router.query.code}</span>
        </Layout>
    )
}