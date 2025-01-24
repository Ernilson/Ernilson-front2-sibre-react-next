import React from 'react';

import Head from 'next/head';
import Link from 'next/link';

import Menu from '../componete/Menu.js';
import RodaPe from '../componete/RodaPe.js';

import { Jumbotron, Container } from 'reactstrap';

function Home({ data }) {
    return (
        <div>
            <Head>
                <title>Sibre</title>
                <meta name='robots' content='index, follow' />
                <meta name="description" content="Site da Segunda Igreja Batista no Recanto das Emas-DF"></meta>
                <meta name="authores" content="Ernilson Daniel Lima de Souza" />

            </Head>
            <Menu />
            <Jumbotron fluid className="descr-top">
                <style>{`
                .descr-top {
                    background-image: url(/sibre2.jpg);
                    background-repeat: no-repeat;
                    background-size: cover; /* Garante que a imagem ocupe toda a largura */
                    background-position: center; /* Centraliza a imagem */
                    height: 250px; /* Altura padrão */
                    color: #FFF; /* Contraste para o texto */
                    text-align: center;
                    margin-bottom: 0rem !important;
                    overflow: hidden; /* Oculta partes fora do contêiner */
                    background-color: rgba(23, 162, 184, 0.6); /* Azul claro com transparência */
                    background-blend-mode: overlay; /* Combina o fundo azul com a imagem */
                    opacity: 0.6; /* Transparência geral */
                }

                .descr-top * {
                    opacity: 1; /* Texto visível */
                }

                @media (max-width: 768px) { /* Para telas menores que 768px */
                    .descr-top {
                        height: 200px; /* Diminui a altura */
                        padding-top: 20px; /* Ajusta o espaçamento interno */
                    }

                    .descr-top p {
                        display: none; /* Oculta o parágrafo */
                    }

                    .descr-top h1 {
                        font-size: 2.0rem; /* Reduz o tamanho da fonte do título */
                        margin-top: 20px;
                    }

                    .descr-top a {
                        font-size: 0.9rem; /* Diminui o botão */
                        padding: 0.5rem 1rem; /* Ajusta o tamanho interno do botão */
                    }
                }
             
                @media (max-width: 768px) { /* Ajuste para telas menores, como celulares */    
                .col-lg-4 {
                    text-align: center; /* Garante que o conteúdo nas colunas esteja centralizado */
                    margin-bottom: 50px; /* Ajusta a margem inferior para reduzir o espaçamento */
                }   
             
            `}</style>
                <Container>
                    <style>{`
                h1.display-5 {
                    font-weight: 600; /* Torna o texto mais grosso (negrito mais intenso) */
                }
                p.lead {
                    font-style: italic; /* Aplica itálico no texto do parágrafo */
                }
            `}</style>
                    <br></br><h1 className="display-5">Segunda Igreja Batista no Recanto das Emas</h1>
                    <p className="lead pb-4">Um lugar de comunhão, louvor e adoração a Deus.</p>
                </Container>
            </Jumbotron>

            <Jumbotron fluid className="servicos">
                <style>{`.servicos{
            padding-top: 20px;
            padding-buttom:60px;
            background: #FFF;
            margin-bottom: 0ren ! important;

            }.circulo1{
            width: 200px;
            height: 200px;
            background-image: url(/templo_interno.jpg);           
            }.centralizar{
            margin: 0 auto !important;
            float: none !important;

            }.circulo2{
            width: 200px;
            height: 200px;
            background-image: url(/cesta.png);
            }.centralizar2{
            margin: 0 auto !important;
            float: none !important;

            }.circulo3{
            width: 200px;
            height: 200px;
            background-image: url(/psicologo.png);
            }.centralizar3{
            margin: 0 auto !important;
            float: none !important;
            }`}</style>

                <Container className="text-center">
                    <div>
                <p>Resumo das nossas atividades</p>

                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="rounded-circle circulo1 centralizar" />
                            <h2 className="mt-4 mb-4">Nossos Encontros</h2>
                            <Link href="/comunhao">
                                <a className="btn btn-light" style={{ textAlign: 'center', display: 'block' }}>
                                    <p style={{ margin: 0 }}>
                                        Viver em comunhão é uma marca da nossa comunidade. Venha ser igreja com a gente!
                                    </p>
                                    <ul style={{ textAlign: 'center', paddingLeft: 0, margin: '0.5rem 0', listStyleType: 'none' }}>
                                        <li>Encontros de oração às terças-feiras às 7h.</li>
                                        <li>PG homens terça às 20h.</li>
                                        <li>Culto de oração quarta às 20h.</li>
                                        <li>PG mulheres sábado às 17h.</li>
                                        <li>Escola Bíblica Dominical (EBD) às 17h.</li>
                                        <li>Culto noturno domingo às 19h.</li>
                                    </ul>
                                </a>
                            </Link>
                        </div>
                        <div className="col-lg-4">
                            <div className="rounded-circle circulo2 centralizar2" />
                            <h2 className="mt-4 mb-4">Ação Social</h2>
                            <Link href="/acao_social">
                                <a className="btn btn-light"><p>Ajudar como Cristo ajudaria e amar como Ele nos ama é a missão do ministério de Ação Social. Seja servindo com doação de alimentos ou roupas, trabalhamos para socorrer ao próximo em sua necessidade.

                                </p></a>
                            </Link>
                        </div>
                        <div className="col-lg-4">
                            <div className="rounded-circle circulo3 centralizar3" />
                            <h2 className="mt-4 mb-4">Projeto Jiu-Jitsu</h2>
                            <Link href="/apoio_Psicologico">
                                <a className="btn btn-light"><p>A igreja oferece aulas gratuitas de Jiu-Jitsu para a comunidade, promovendo saúde, disciplina e inclusão. Durante as aulas, os alunos também têm a oportunidade de ouvir a Palavra de Deus, fortalecendo a fé e os valores como respeito e trabalho em equipe. Participe e faça parte dessa iniciativa que transforma vidas!.</p></a>
                            </Link>
                        </div>
                    </div>                   
                </Container>
                <Link href="/comunhao">
                        <p style={{ color: 'blue', textDecoration: 'underline', cursor: 'pointer', textAlign: 'center',  marginTop: '20px'  }}>
                            Clique aqui para saber mais...
                        </p>
                    </Link>
            </Jumbotron>   
            <RodaPe />
        </div>
    );
}

export default Home;