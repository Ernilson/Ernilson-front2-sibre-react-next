import React from 'react';
import { Container, Jumbotron } from 'reactstrap';
import Link from 'next/link';

const RodaPe = () => {
    return (
        <div>
            <Jumbotron fluid className="rodape">
                <style>{`.rodape{
                    padding-top: 10px; /* Ajusta a altura do rodapé */
                    padding-bottom: 10px; /* Ajusta a altura do rodapé */
                    background-color: #17A2B8;
                    margin-bottom: 0rem !important;
                    color: #fff;
                    text-align: center;
                }
                .rodape ul{
                    padding-left: 0; /* Remove a margem padrão da lista */
                }
                .rodape ul li{
                    display: inline-block; /* Alinha os itens horizontalmente */
                    margin: 0 10px; /* Adiciona espaçamento entre os itens */
                }
                .rodape ul li a.link-rodape{
                    color: #fff !important;
                    display: block;
                    padding: 5px 10px;
                }
                .rodape ul li a.link-rodape:hover{
                    color: green !important;
                    text-decoration: none;
                }`}</style>
                <Container>
                    <div className="row justify-content-center">
                        <div className="col-12">
                            <ul className="list-unstyled">
                                <li>
                                    <Link href="https://www.instagram.com/sibre.oficial/" target="_blank">
                                        <a className="link-rodape">Instagram</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://api.whatsapp.com/send?phone=5561999178363" target="_blank">
                                        <a className="link-rodape">WhatsApp</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://goo.gl/maps/nB3GEHK9yLHAeEYx8" target="_blank">
                                        <a className="link-rodape">Localização</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Container>
            </Jumbotron>
        </div>
    )
}

export default RodaPe;

