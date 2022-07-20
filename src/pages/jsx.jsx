import Layout from "../components/Layout";

export default function Jsx(){
    const a = 3;
    const b = 2;
    return (
        <Layout title="Usando JSX">
            <h1>JSX e um conceito central</h1>
            <h2>Mesclando html e js {a*b}</h2>
        </Layout>
    )
}