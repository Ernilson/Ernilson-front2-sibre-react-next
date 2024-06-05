import React from 'react';
import Head from 'next/head';
import Menu from '../componete/Menu.js';
import RodaPe from '../componete/RodaPe';
import { Container } from 'reactstrap';
import Image from 'next/image';
import styles from '../styles/encontros.module.css';
import PrLacir from '../public/PrLacir.jpeg';
import CultoPrLaci from '../public/CultoPrLaci.jpeg';
import Louvor2 from '../public/Louvor2.0.jpeg';
import Louvor from '../public/Louvor.jpg';
import oracao1 from '../public/oracao1.png';

function Encontros() {
    return (
        <div>
            <Head>
                <title>Comunhão</title>
                <meta name='robots' content='index, follow' />
                <meta name="description" content="Logo abaixo temos a história da Segunda Igreja Batista no Recanto das Emas-DF"></meta>
                <meta name="author" content="Ernilson Daniel Lima de Souza" />
            </Head>
            <Menu />
            <div className={styles.mainContent}>
                <header className={styles.header}>
                    <div className={styles.headerOverlay}></div>
                    <div className={styles.headerContent}>
                        <Container>
                            <h1 className={styles.title}>Comunhão</h1>
                            <p className={styles.subtitle}>Junte-se a nós em nossos encontros</p>
                        </Container>
                    </div>
                </header>
                <main>
                    <Container>
                        <Section 
                            title="Nossos Encontros"
                            text="Viver em comunhão é uma marca da nossa comunidade. Venha ser igreja com a gente! Encontros de oração: terças às 07hs - PG homens: terça às 20hs - Culto de oração: quarta às 20hs - Escola Bíblica Dominical EBD: domingo às 09hs - Culto de celebração domingo: às 19hs."
                            images={[PrLacir, CultoPrLaci]}
                        />
                        <Section 
                            title="Louvai ao Senhor"
                            text="“Tudo que respira louve ao Senhor!” Como Deus habita no meio dos louvores, no lugar da adoração é onde queremos estar."
                            images={[Louvor, Louvor2]}
                        />
                        <Section 
                            title="Orai sem cessar"
                            text="Buscamos ao Senhor, buscamos a Sua soberana vontade e Sua graça. “A fé sobe pelas escadas que o amor construiu, e olha pelas janelas que a esperança abriu”."
                            images={[oracao1]}
                        />
                    </Container>
                </main>
            </div>
            <footer className={styles.footer}>
                <RodaPe />
            </footer>
        </div>
    );
}

function Section({ title, text, images }) {
    return (
        <div className={styles.section}>
            <div className={styles.sectionText}>
                <h2 className={styles.sectionTitle}>{title}</h2>
                <p className={styles.sectionLead}>{text}</p>
            </div>
            <div className={styles.sectionImages}>
                {images.map((src, index) => (
                    <div key={index} className={styles.sectionImageWrapper}>
                        <Image src={src} className={styles.sectionImage} alt={title} layout="responsive" width={500} height={500} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Encontros;
