import React from 'react';
import Head from 'next/head';
import Menu from '../componete/Menu.js';
import RodaPe from '../componete/RodaPe';
import { Jumbotron, Container } from 'reactstrap';

function sobre() {
    return (<div>
        <Head>
            <title>Sobre</title>
            <meta name='robots' content='index, follow' />
            <meta name="description" content="Logo abaixo temos a historia da Segunda Igreja Batista no Recanto das Emas-DF"></meta>
            <meta name="author" content="Ernilson Daniel Lima de Souza" />
        </Head>
        <Menu />
        Sobre<br />
        <Jumbotron fluid className="head-sobre">
            <style>{`.head-sobre{
            padding-top: 40px;
            padding-buttom:20px;
            background: #FFF;
            margin-bottom: 0ren ! important;
        }`}</style>
            <Container>
                <h2 className="text-center">Nossa história</h2>
            </Container>
        </Jumbotron>
        <Jumbotron fluid className="sobre">
            <style>{`.sobre{
            padding-top: 40px;
            padding-buttom:10px;
            background: #FFF;
            margin-bottom: 0ren ! important;
        }.featurette-divider{
            margin: 5rem 0;            
        }`}</style>
            <Container>
                <div className="row featurette">
                    <div className="col-md-7 order-md-2">
                        <h2 className="featurette-heading">Segunda Igreja Batista no Recanto das Emas - DF.</h2>
                        <p className="lead">A Segunda Igreja Batista foi organizada como igreja no dia 31 de maio de 2003, anteriormente sendo uma congregação da Segunda Igreja Batista do Plano Piloto.
                             Inicialmente, ficava localizada na quadra 103 do Recanto das Emas. Naquela época, a SIBPP adquiriu um lote para a construção de um local próprio e definitivo para a congregação.
A construção do templo foi realizada pela Segunda Igreja Batista do Plano Piloto, contando com a ajuda de um grupo de irmãos norte-americanos que vieram ao Brasil com essa finalidade. Atualmente,
a SIBRE está localizada na quadra 105, área especial 01 - Avenida Vargem da Benção.
Ao relembrarmos nossa história, algumas pessoas foram determinantes para o estabelecimento e crescimento de nossa igreja. Entre elas, destacamos: Pr. Jaime França e sua família, Pr. Alexandre e sua esposa Raquel Mousinho de Moura Fé,
Pr. Daniel Ventura, Pr. Edvan Xavier, Pr. Regivaldo Dantas e Pr. Josias Alves da Costa.
Hoje, a SIBRE é pastoreada pelo Pr. Lacir, com o auxílio dos seminaristas Jairo Guimarães e Gustavo Lenor..
</p>
                    </div>
                    <div className="col-md-5 order-md-1">
                        <img src="/img002.png" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                            width="500" height="500" alt="Sibre" />

                    </div>
                </div>
                <hr className="featurette-divider" />

                <div className="row featurette">
                    <div className="col-md-7 order-md-2">
                        <h2 className="featurette-heading">Missão</h2>
                        <p className="lead">Amar a Deus, servir ao próximo, fazer o maior número discípulos
                         até a volta do Senhor Jesus Cristo. <br/> "E disse-lhes: Ide por todo o mundo, e pregai o evangelho a toda criatura".
                         Marcos 16:15
                          </p>                         
                    </div>
                    <div className="col-md-5 order-md-1">
                        <img src="/img007.png" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                            width="500" height="500" alt="Sibre" />

                    </div>
                </div>

            </Container>
        </Jumbotron>

        <RodaPe />
    </div>)
}

export default sobre;