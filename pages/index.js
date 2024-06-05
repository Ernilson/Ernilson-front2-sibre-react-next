import React from 'react';
import Head from 'next/head';
import Seminario from './seminario.js'; 

const Home = ({ data }) => {
    return (
        <div>
            <Head>
                <title>Sibre</title>
                <meta name='robots' content='index, follow' />
                <meta name="description" content="Site da Segunda Igreja Batista no Recanto das Emas-DF"></meta>
                <meta name="author" content="Ernilson Daniel Lima de Souza" />
            </Head>           
            <Seminario />           
        </div>
    );
}

export default Home;
