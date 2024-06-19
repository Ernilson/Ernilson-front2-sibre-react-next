import React from 'react';
import { useSpring, animated } from 'react-spring';
import WhatsAppIcon from '../public/WhatsApp_icone.png'; 
import Image from 'next/image';
import styles from '../styles/BotaoWhatsapp.module.css'; 

const BotaoWhatsapp = () => {
  const springProps = useSpring({
    to: async (next, cancel) => {
      while (true) {
        await next({ transform: 'translate3d(0,0,0) scale(1)' });
        await next({ transform: 'translate3d(0,-10px,0) scale(1.1)' });
        await next({ transform: 'translate3d(0,0,0) scale(1)' });
        await next({ transform: 'translate3d(0,10px,0) scale(1.1)' });
      }
    },
    from: { transform: 'translate3d(0,0,0) scale(1)' },
    config: { tension: 200, friction: 10 }, 
    delay: 500,
  });

  return (
    <animated.div style={{ ...springProps }} className={styles['botao-whatsapp']}>
      <a
        href="https://api.whatsapp.com/send?phone=5561991323236"
        target="_blank"
        rel="noopener noreferrer"
      >        
        <Image
          src={WhatsAppIcon}
          alt="WhatsApp"
          width={44} 
          height={44} 
          layout="fixed"
        />
      </a>
    </animated.div>
  );
};

export default BotaoWhatsapp;
