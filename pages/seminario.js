import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AiFillHome } from 'react-icons/ai'; 
import styles from '../styles/seminario.module.css';
import Pessoa1 from '../public/Pessoa1.jpg';
import Pessoa2 from '../public/Pessoa2.jpg';
import Pessoa3 from '../public/Pessoa3.png';
import Mapa from '../public/google-maps-icon.png';
import WhatsApp from '../public/WhatsApp_icone.png'

function Seminario() {
  return (
    <div className={styles.AppContainer}>
      <div className={styles.BackgroundImage}></div>
      <div className={styles.AppContent}>
        <header className={styles.AppHeader}>
          <Link href="/home">
            <a className={styles.homeLink}>            
            <AiFillHome size={24} />
            <span className={styles.homeLinkText}>Início</span>
            </a>
          </Link>
          <div className={styles.spacer}></div>
          <h1>Seminário Mulheres</h1>
          <h2>De corpo, alma e espírito</h2>
          <p className={styles.subtitle}>06 de julho de 2024</p>
        </header>
        <main className={styles.AppMain}>
          <section className={styles.section}>
            <p className={styles.centeredText}>
              A sensação de não sobrar tempo para nada em nossos dias corridos é enorme. E a dupla jornada que se apresenta para algumas mulheres agrava esse quadro e, não incomum, ficam para segundo plano os cuidados com a saúde física, mental e, também, a espiritual.
              <br />
              Atento a este quadro, a Sibre apresenta o Seminário Mulheres – de corpo, alma e espírito com a proposta de ajudar as irmãs na conscientização do cuidado nestas áreas, trazendo informações úteis e de aplicação prática.
              <br />
              Assim, serão ministradas palestras por profissionais e missionárias da área da saúde (corpo), psicologia (alma) e teologia (espírito), contribuindo para que as mulheres cristãs enfrentem os desafios da vida com mais saúde e santidade, de forma leve e eficaz.
            </p>
          </section>

          <section className={styles.section}>
            <h3>PALESTRANTES</h3>
            <div className={styles.speakers}>
              <div className={styles.speaker}>
                <Image src={Pessoa1} alt="Raquel Pinheiro" className={styles.speakerImage} width={150} height={150} />
                <p>
                  <strong>Raquel Pinheiro</strong>
                  <br />
                  Presidente Estadual de As Auxiliares (Gideões Internacionais)
                  <br />
                  Diaconisa e Professora EBD Classe Novos convertidos
                </p>
              </div>
              <div className={styles.speaker}>
                <Image src={Pessoa3} alt="Sabrina Braga" className={styles.speakerImage} width={150} height={150} />
                <p>
                  <strong>Sabrina Braga</strong>
                  <br />
                  Psicóloga (CU-UDF) pós-graduada em Terapia Cognitivo-Comportamental e Psicologia Hospitalar
                  <br />
                  Atua como Psicóloga Clínica e Hospitalar (COVID-19, UTI Adulto, Enfermarias, Centro Obstétrico e Maternidade)
                  <br />
                  Professora de EBD e Líder de Jovens
                </p>
              </div>
              <div className={styles.speaker}>
                <Image src={Pessoa2} alt="Monique" className={styles.speakerImage} width={150} height={150} />
                <p>
                  <strong>Monique Batista Nogueira Moura</strong>
                  <br />
                  Médica Cardiologista e medicina estética
                  <br />
                  Ministra palestras sobre saúde e auto cuidado para mulheres sob a perspectiva do evangelho
                  <br />
                  Atua como Missionária (Igreja Batista Millenium Brasília), bem como no ministério kids e capelania hospitalar  
                  <br />
                  Médica missionária nas comunidades ribeirinhas na Amazônia em 2023 -  Manaus/Barco JJ Mesquita
                </p>
              </div>              
            </div>
          </section>

          <section className={styles.section}>
            <h3>PROGRAMAÇÃO</h3>
            <ul>
              <li>16h30 – Credenciamento</li>
              <li>16h45 - Abertura</li>
              <li>17h – Palestra sobre a Saúde da Mulher</li>
              <li>18h – Palestra sobre a Saúde Mental</li>
              <li>19h15 – Mensagem Bíblica</li>
              <li>20h – Encerramento</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h3>LOCAL</h3>
            <div className={styles.sectionComMapaContent}>
              <div className={styles.mapLink}>
                <a
                  href="https://www.google.com/maps/place/2%C2%AA+Igreja+Batista+de+Recanto+das+Emas/@-15.902251,-48.0777192,15z/data=!4m6!3m5!1s0x935a2cd59fa807a5:0xf96903564109be2b!8m2!3d-15.902251!4d-48.0777192!16s%2Fg%2F11c0vym11l?entry=ttu"
                  target="_blank"
                >
                  <Image src={Mapa} alt="Como chegar" width={60} height={70} />
                </a>
                <span className={styles.text}> Segunda Igreja Batista no Recanto das Emas – SIBRE  <br /> Q 105 área especial, 01 - Recanto das Emas, Brasília - DF, 70297-400</span>
              </div>
            </div>
          </section>

          <section className={styles.section}>
  <h3>CONTATO</h3>
  <div className={styles.sectionComMapaContent}>
    <div className={styles.mapLink}>
      <a
        href="https://api.whatsapp.com/send?phone=5561985308920"
        target="_blank"
      >
        <Image src={WhatsApp} alt="WhatsApp" width={30} height={40} />
      </a>
      <span className={styles.text}>
        <strong>Responsável pelo Evento:</strong> Aline de Moraes Carvalho - Ministério de Mulheres<br />
        <strong>Telefone:</strong> (61) 98496-9591 <br />
      </span>
    </div>
  </div>
  <div className={styles.sectionComMapaContent}>
    <div className={styles.mapLink}>
      <a
        href="https://api.whatsapp.com/send?phone=5561985308920"
        target="_blank"
      >
        <Image src={WhatsApp} alt="WhatsApp" width={30} height={40} style={{ visibility: 'hidden' }} />
      </a>
      <span className={styles.text}>
        <br /><br /> 
        <strong>Apoio:</strong> Seminarista Jairo Correia<br />
        <strong>Telefone:</strong> (61) 98496-9591 <br />
      </span>
    </div>
  </div>
</section>

        </main>
        <footer className={styles.AppFooter}>
          <div className={styles.footerContent}>
            <p>Deus seja louvado.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Seminario;
