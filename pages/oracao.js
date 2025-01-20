import React, { useState } from 'react';
import Head from 'next/head';
import Menu from '../componete/Menu.js';
import RodaPe from '../componete/RodaPe';

import { Jumbotron, Container, Form, FormGroup, Input, Label, Button } from 'reactstrap';

const Oracao = () => {
    const [oracao, setOracao] = useState({
        nome: '',
        email: '',
        msg: ''
    });

    const [response, setResponse] = useState({
        formSave: false,
        type: '',
        message: ''
    });

    const onchangeInput = e => setOracao({ ...oracao, [e.target.name]: e.target.value });

    const limparCampos = () => {
        setOracao({
            nome: '',
            email: '',
            msg: ''
        });
    };

    const envMsg = async (e) => {
        e.preventDefault();
        if (!validate()) return;
        setResponse({ formSave: true });

        try {
            const res = await fetch(`http://localhost:8080/oracao`, {
                method: `POST`,
                body: JSON.stringify(oracao),
                headers: { 'Content-Type': 'application/json' }
            });

            if (!res.ok) {
                throw new Error(`Erro na requisição: ${res.status} ${res.statusText}`);
            }

            const responseEnv = await res.json();          

            const message = responseEnv.message || (responseEnv.error ? 'Erro ao salvar mensagem.' : 'Seu pedido foi cadastrado com sucesso. Nossa equipe de oração intercederá por você.');

            setResponse({
                formSave: true,
                type: responseEnv.error ? 'error' : 'success',
                message: message
            });
            
            if (!responseEnv.error) {
                limparCampos();               
            }

        } catch (err) {
            console.error("Erro no envio da mensagem:", err);
            setResponse({
                formSave: false,
                type: 'error',
                message: 'Erro ao enviar a mensagem. Tente novamente mais tarde.'
            });
        }
    };

    const validate = () => {
        if (!oracao.nome) return setResponse({ type: 'error', message: 'Preenchimento do campo Nome é obrigatório!' });
        if (!oracao.msg) return setResponse({ type: 'error', message: 'Preenchimento da mensagem é obrigatório!' });
        return true;
    };

    return (
    <div>
            <Head>
                <title>Oração</title>
                <meta name='robots' content='index, follow' />
                <meta name="description" content="Orai uns pelos outros. Segunda Igreja Batista no Recanto das Emas-DF"></meta>
                <meta name="author" content="Ernilson Daniel Lima de Souza" />
            </Head>
            <Menu />
            <Jumbotron fluid className="head-oracao">
                <style>{`.head-oracao{
                padding-top: 60px;
                padding-buttom:1px;
                background-color: #fff;
                margin-bottom: 0ren ! important;
         }`}</style>
                <Container>
                    <h1 className="display-8 text-center">Pedi e dar-se-vos-á</h1>
                </Container>
            </Jumbotron>
            <Jumbotron fluid className="form-oracao">
                <style>{`.head-oracao{
                padding-top: 120px;
                padding-buttom:1px;
                background-image: url(/peticao.png);
                margin-bottom: 0ren ! important;
         }`}</style>
                <Container>
                    <div className="row featurette">
                        <div className="col-md-6">
                            {response.type === 'success' ? <div className='alert alert-success'>{response.message}</div> : ""}
                            {response.type === 'error' ? <div className='alert alert-danger'>{response.message}</div> : ""}
                            <Form onSubmit={envMsg}>
                                <FormGroup>
                                    <Label for="nome">Nome:</Label>
                                    <Input type="text" name="nome" id="nome" placeholder="Digite seu nome."  value={oracao.nome}
                                        onChange={onchangeInput} />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="email">Contato:</Label>
                                    <Input 
                                        type="text" 
                                        name="email" 
                                        id="email" 
                                        placeholder="Digite seu telefone ou e-mail." 
                                        value={oracao.email}
                                        pattern=".*" 
                                        title="Por favor, insira um telefone ou um e-mail válido." 
                                        onChange={onchangeInput} />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="msg">Mensagem:</Label>
                                    <Input type="textarea" name="msg" id="mgs" placeholder="Digite aqui seu pedido de oração."  value={oracao.msg}  pattern=".*" 
                                        onChange={onchangeInput} />
                                </FormGroup>
                                {response.formSave ? <Button type="submit" outline color="warning" disabled>Enviar...
                                  </Button> : <Button type="submit" outline color="warning">Enviar</Button>}
                            </Form>
                        </div>
                        <div className="col-md-6"><br />
                        <h3 className="featurette-heading">Orai sem cessar</h3>
                        <p>A oração feita por um justo pode muito em seus efeitos.</p>
                        <p>Tiago 5:16.</p>
                        <hr />
                        <address>
                            <strong>Encontros de oração</strong><br /><br />
                            <p>Nossos encontros de oração ocorre nas terças-feiras às 07:00, e nas quartas às 20:00. Nessas reuniões, nossa 
                            equipe de oração estará intercedendo por seus pedidos no altar, clamando ao Deus Altíssimo. Portanto, 
                            <strong>faça seu pedido e conte com o apoio da nossa igreja.</strong></p>
                            Pedi, e dar-se-vos-á; buscai, e encontrareis; batei, e abrir-se-vos-á...<br />
                            Mateus 7:7 <br />
                        </address>
                        </div>
                    </div>
                </Container>
            </Jumbotron>
            <RodaPe />
    </div>)    
}
export default Oracao;