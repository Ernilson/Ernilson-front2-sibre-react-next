import React, { useState } from 'react';
import Head from 'next/head';
import Menu from '../componete/Menu.js';
import { Jumbotron, Container, Form, FormGroup, Input, Label, Button } from 'reactstrap';
import BotaoWhatsapp from '../componete/BotaoWhatsapp.js';

const Contato = () => {
    const [contato, setContato] = useState({
        nome: '',
        celular: '',
        email: '',
        assuntoMsg: '',
        conteudoMsg: ''
    });

    const [response, setResponse] = useState({
        formSave: false,
        type: '',
        message: '',
        formSuccess: false
    });

    const onchangeInput = e => setContato({ ...contato, [e.target.name]: e.target.value });

    const limparCampos = () => {
        setContato({
            nome: '',
            celular: '',
            email: '',
            assuntoMsg: '',
            conteudoMsg: ''
        });
    };

    const envconteudo_msg = async e => {
        e.preventDefault();
        console.log(contato);
        if (!validate()) return;
        setResponse({ formSave: true });

        console.log("Iniciando envio da mensagem...");

        try {
            const res = await fetch(`https://sibre2023.com.br/contato/gravar`, {
                method: `POST`,
                body: JSON.stringify(contato),
                headers: { 'Content-Type': 'application/json' }
            });

            const contentType = res.headers.get("content-type");
            let responseEnv;

            if (contentType && contentType.includes("application/json")) {
                responseEnv = await res.json();
            } else {
                responseEnv = await res.text();
            }

            console.log(responseEnv);

            if (typeof responseEnv === 'object' && responseEnv.error) {
                setResponse({
                    formSave: false,
                    type: 'error',
                    message: responseEnv.message
                });
            } else {
                setResponse({
                    formSave: false,
                    type: 'success',
                    message: 'Mensagem enviada com sucesso!',
                    formSuccess: true
                });
                limparCampos(); 
            }

        } catch (err) {
            console.error("Erro no envio da mensagem:", err);
            setResponse({
                formSave: false,
                type: 'error',
                message: 'Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente.'
            });
        }
    };

    const validate = () => {
        if (!contato.nome) {
            setResponse({ type: 'error', message: 'Preencha o campo nome!' });
            return false;
        }
        if (!contato.email) {
            setResponse({ type: 'error', message: 'Preencha o campo e-mail!' });
            return false;
        }
        if (!contato.assuntoMsg) {
            setResponse({ type: 'error', message: 'Preencha o campo assunto da mensagem!' });
            return false;
        }
        if (!contato.conteudoMsg) {
            setResponse({ type: 'error', message: 'Preencha o campo conteúdo da mensagem!' });
            return false;
        }

        return true;
    };

    return (
        <div>
            <Head>
                <title>Contato</title>
                <meta name='robots' content='index, follow' />
                <meta name="description" content="Entre em contato com a Segunda Igreja Batista no Recanto das Emas-DF" />
                <meta name="author" content="Ernilson Daniel Lima de Souza" />
            </Head>
            <Menu />
            <Jumbotron fluid className="head-contato">
                <style>{`.head-contato{
                    padding-top: 60px;
                    padding-buttom:5px;
                    background-color: #fff;
                    margin-bottom: 0 !important;
                }`}</style>
                <Container>
                    <h1 className="display-8 text-center">Contato</h1>
                </Container>
            </Jumbotron>

            <Jumbotron fluid className="form-contato">
                <style>{`.head-contato{
                    padding-top: 60px;
                    padding-buttom:5px;
                    background-color: #fff;
                    margin-bottom: 0 !important;
                }`}</style>
                <Container>
                    <div className="row featurette">
                        <div className="col-md-6">
                            {response.type === 'success' && <div className='alert alert-success'>{response.message}</div>}
                            {response.type === 'error' && <div className='alert alert-danger'>{response.message}</div>}
                            <Form onSubmit={envconteudo_msg}>
                                <FormGroup>
                                    <Label for="nome"><span className="text-danger">*</span> Nome:</Label>
                                    <Input type="text" name="nome" id="nome" placeholder="Digite Seu Nome..."
                                        value={contato.nome} onChange={onchangeInput} />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="celular"><span className="text-danger"></span> Celular:</Label>
                                    <Input type="tel" name="celular" id="celular" placeholder="(DDD) 99999-9999"
                                           value={contato.celular} onChange={onchangeInput} />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="email">Email:</Label>
                                    <Input type="email" name="email" id="email" placeholder="Digite Seu Email..."
                                        value={contato.email} onChange={onchangeInput} />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="assuntoMsg">Assunto da Mensagem:</Label>
                                    <Input type="text" name="assuntoMsg" id="assuntoMsg" placeholder="Digite o assunto..."
                                        value={contato.assuntoMsg} onChange={onchangeInput} />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="conteudoMsg"><span className="text-danger">*</span> Mensagem:</Label>
                                    <Input type="textarea" name="conteudoMsg" id="conteudoMsg" placeholder="Digite sua mensagem..."
                                        value={contato.conteudoMsg} onChange={onchangeInput} />
                                </FormGroup>
                                {response.formSave ? <Button type="submit" outline color="warning" disabled>Enviando...</Button> : <Button type="submit" outline color="warning">Enviar</Button>}
                            </Form>
                        </div>
                        <div className="col-md-6">
                            <br />
                            <h3 className="featurette-heading">Contribua com o Reino </h3>
                            <p className="lead">Mercado Pago,
                                Tipo: Conta de Pagamento, pix CNPJ: 186855200001/40 - Pix Email: sibre25@gmail.com</p>
                            <hr />
                            <address>
                                <strong>Endereço</strong><br />
                                Quadra 105 Area Especial 01 <br />
                                Av. Vargem das Benção Recanto das Emas- DF<br />
                                CEP: 72601120 - Tel (61) 991323236 <br />
                            </address>
                        </div>
                    </div>
                </Container>
            </Jumbotron>
            <BotaoWhatsapp />
        </div>
    );
};

export default Contato;
