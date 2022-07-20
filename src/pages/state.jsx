import { useState } from 'react';
import Layout from '../components/Layout';

export default function Estado(){
    const [numero, setNumero] = useState(0);
    function inc(){
        setNumero(numero + 1)
    }
    return (
        <Layout title="Componente com Estado">
           <span>{numero}</span>
           <button onClick={inc}>Inc</button>
        </Layout>
    )
}