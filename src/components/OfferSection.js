import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const OfferSectionWrapper = styled.section`
  background: white;
  padding: 80px 20px;
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

const MainTitle = styled(motion.h2)`
  font-size: clamp(2rem, 4vw, 3.2rem);
  font-weight: 600;
  color: #000;
  margin-bottom: 10px;
  letter-spacing: -1px;
  line-height: 1.2;
  
  .highlight {
    font-weight: 800;
    color: #000;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.2rem;
  color: #000;
  margin-bottom: 60px;
  font-weight: 400;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  margin-bottom: 40px;
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const LeftContent = styled.div`
  text-align: left;
  
  @media (max-width: 968px) {
    text-align: center;
  }
`;

const DiscountBanner = styled.div`
  background: linear-gradient(135deg, #8B2C5A 0%, #7A2450 100%);
  color: white;
  padding: 40px 30px;
  border-radius: 12px;
  margin-bottom: 30px;
  box-shadow: 0 10px 30px rgba(139, 44, 90, 0.3);
  text-align: center;
`;

const DiscountTitle = styled.div`
  font-size: 3rem;
  font-weight: 900;
  line-height: 0.8;
  margin-bottom: 8px;
  
  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

const DiscountSubtitle = styled.div`
  font-size: 1.4rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const BenefitsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 30px;
  padding: 25px;
  border: 2px solid #8B2C5A;
  border-radius: 12px;
  background: rgba(139, 44, 90, 0.05);
`;

const BenefitItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 15px;
  
  @media (max-width: 968px) {
    align-items: center;
    text-align: left;
  }
`;

const CheckIcon = styled.div`
  width: 24px;
  height: 24px;
  background: #28a745;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 14px;
  flex-shrink: 0;
  margin-top: 2px;
`;

const BenefitText = styled.div`
  font-size: 1rem;
  color: #000;
  line-height: 1.5;
  
  .highlight {
    font-weight: 600;
    color: #000;
  }
`;

const DevicesVideo = styled.div`
  position: relative;
  text-align: center;
  width: 100%;
  height: 500px;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  
  iframe, video {
    max-width: 100%;
    height: 100%;
    border-radius: 12px;
    object-fit: cover;
    background: white;
    
    @media (min-width: 769px) {
      max-width: 90%;
      height: 500px;
    }
    
    @media (max-width: 768px) {
      height: 200px;
      max-width: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
  
  @media (max-width: 768px) {
    height: 200px;
    background: white;
  }
`;

const PromoText = styled(motion.div)`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 40px;
  font-size: 1.1rem;
  color: #000;
  line-height: 1.6;
  
  .highlight {
    font-weight: 600;
    color: #000;
  }
  
  .discount {
    font-weight: 700;
    color: #1a4d2e;
  }
`;

const UrgencyText = styled(motion.div)`
  text-align: center;
  font-size: 1.1rem;
  color: #000;
  margin-bottom: 30px;
  font-weight: 500;
`;

const CTAButton = styled(motion.button)`
  background: linear-gradient(135deg, #8B2C5A 0%, #C54A7B 50%, #8B2C5A 100%);
  color: white;
  font-size: 1.4rem;
  font-weight: 700;
  padding: 20px 60px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  box-shadow: 0 10px 30px rgba(139, 44, 90, 0.3);
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 40px rgba(139, 44, 90, 0.4);
  }
`;

const WhatsAppFloat = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1001;
  
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px 18px;
    background: #25d366;
    border-radius: 8px;
    color: white;
    font-size: 14px;
    font-weight: 600;
    text-decoration: none;
    box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4);
    transition: all 0.3s ease;
    white-space: nowrap;
    text-transform: uppercase;
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 25px rgba(37, 211, 102, 0.6);
    }
    
    @media (max-width: 768px) {
      padding: 10px 14px;
      font-size: 12px;
    }
  }
`;

const ResponsiveVideo = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);
    
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  // Vimeo IDs: mobile = 1102385786, desktop = 1102385665
  const vimeoId = isMobile ? '1102385786' : '1102385665';
  const vimeoSrc = `https://player.vimeo.com/video/${vimeoId}?badge=0&autopause=0&autoplay=1&muted=0&controls=0&loop=1&responsive=1`;

  return (
    <DevicesVideo>
      <motion.iframe
        key={vimeoId} // Força re-render quando muda o vídeo
        src={vimeoSrc}
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
          borderRadius: '12px',
          boxShadow: 'none',
          background: 'white',
          position: 'absolute',
          top: '0',
          left: '0',
          objectFit: 'cover'
        }}
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        title={isMobile ? "Vídeo Mobile DEFINAMAX" : "Vídeo Desktop DEFINAMAX"}
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      />
    </DevicesVideo>
  );
};

const OfferSection = () => {
  const benefits = [
    {
      text: "Método natural e clinicamente testado – Fortaleça seus fios sem químicas agressivas."
    },
    {
      text: "Estimule o crescimento acelerado – Veja resultados visíveis em poucas semanas."
    },
    {
      text: "Preencha falhas e entradas – Recupere a densidade e o volume que você amava."
    },
    {
      text: "Solução prática para o dia a dia – Tratamento fácil de usar, mesmo na rotina mais agitada."
    },
    {
      text: "Resultados duradouros – Cabelos mais fortes, saudáveis e cheios de vida!"
    }
  ];

  return (
    <>
      <OfferSectionWrapper>
        <Container>
          <MainTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            TUDO QUE O SEU CABELO PRECISA<br />
            <span className="highlight">E NADA MAIS</span> ✨
          </MainTitle>
          
          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            A restauração dos seus cabelos começa aqui
          </Subtitle>

          <ContentGrid>
            <LeftContent>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <DiscountBanner>
                  <DiscountTitle>MAIS NUTRIÇÃO =</DiscountTitle>
                  <DiscountSubtitle>MENOS QUEDA DE CABELOS</DiscountSubtitle>
                </DiscountBanner>
                
                <BenefitsList>
                  {benefits.map((benefit, index) => (
                    <BenefitItem key={index}>
                      <CheckIcon>✓</CheckIcon>
                      <BenefitText>{benefit.text}</BenefitText>
                    </BenefitItem>
                  ))}
                </BenefitsList>
              </motion.div>
            </LeftContent>

            <ResponsiveVideo />
          </ContentGrid>

          <PromoText
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            Fórmula exclusiva com ativos biomiméticos reativa os folículos capilares, bloqueando a queda desde a primeira aplicação, enquanto nutre profundamente a raiz para estimular um crescimento 3x mais rápido e preenche visivelmente as falhas com novos fios saudáveis.
          </PromoText>



          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
          >
            <CTAButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const kitsSection = document.getElementById('kits');
                if (kitsSection) {
                  kitsSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              EU QUERO ACABAR COM A QUEDA
            </CTAButton>
          </motion.div>
        </Container>
      </OfferSectionWrapper>

      <WhatsAppFloat>
        <a href="https://wa.me/5541984549172?text=Olá,%20eu%20estava%20no%20site%20do%20Biocapilar,%20e%20quero%20mais%20informações." target="_blank" rel="noopener noreferrer">
          COMPRE NO WHATSAPP
        </a>
      </WhatsAppFloat>
    </>
  );
};

export default OfferSection; 