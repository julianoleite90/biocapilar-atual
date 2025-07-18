import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const VideoSectionContainer = styled.section`
  background: white;
  padding: 120px 20px;
  text-align: center;
  position: relative;
  overflow: hidden;
  
  @media (max-width: 768px) {
    padding: 80px 20px;
  }
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const SectionTitle = styled(motion.h2)`
  font-size: clamp(2rem, 4vw, 3.2rem);
  font-weight: 400;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
  line-height: 1.2;
  
  .highlight {
    font-weight: 700;
    color: #333;
  }
`;

const SectionSubtitle = styled(motion.p)`
  font-size: 1.3rem;
  color: #666;
  margin-bottom: 80px;
  text-align: center;
  font-weight: 300;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 60px;
  }
`;

const VideosGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 54px;
  justify-items: center;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
  
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 45px;
    max-width: 700px;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 18px;
    padding: 0 10px;
    max-width: 600px;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 27px;
    padding: 0 20px;
    max-width: 350px;
  }
`;

const PhoneMockup = styled(motion.div)`
  position: relative;
  width: 280px;
  transition: all 0.3s ease;
  background: white;
  
  &:hover {
    transform: translateY(-10px);
  }
  
  @media (max-width: 768px) {
    width: 100%;
    max-width: 350px;
    background: white;
    border-radius: 0;
  }
  
  @media (max-width: 480px) {
    width: 100%;
    max-width: 100%;
    background: white;
    border-radius: 0;
  }
`;

const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: none;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 768px) {
    height: 400px;
    border-radius: 0;
    background: white;
    box-shadow: none;
  }
  
  @media (max-width: 480px) {
    height: 450px;
    border-radius: 0;
    width: 100%;
    background: white;
    box-shadow: none;
  }
`;

const VideoSection = () => {
  const videos = [
    {
      vimeoId: "1102393072",
      title: "Meus cabelos pararam de cair"
    },
    {
      vimeoId: "1102393088", 
      title: "Crescimento acelerado dos fios"
    },
    {
      vimeoId: "1102393110",
      title: "Minha autoestima voltou"
    }
  ];

  return (
    <VideoSectionContainer>
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          RESULTADOS QUE VOCÊ NÃO ENCONTRA EM <span className="highlight">NENHUM OUTRO LUGAR</span>
        </SectionTitle>
        
        <SectionSubtitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Depoimentos reais de pessoas que mudaram suas vidas com o BIOCAPILAR
        </SectionSubtitle>
        
        <VideosGrid>
          {videos.map((video, index) => (
            <PhoneMockup
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <VideoContainer>
                <iframe
                  src={`https://player.vimeo.com/video/${video.vimeoId}?badge=0&autopause=0&muted=0&controls=1&title=0&byline=0&portrait=0`}
                  style={{
                    width: '100%',
                    height: '100%',
                    border: 'none'
                  }}
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title={video.title}
                />
              </VideoContainer>
            </PhoneMockup>
          ))}
        </VideosGrid>
      </Container>
    </VideoSectionContainer>
  );
};

export default VideoSection;