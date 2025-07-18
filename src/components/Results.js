import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ResultsSection = styled.section`
  background: #f8f9fa;
  padding: 80px 20px;
  text-align: center;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const MainTitle = styled(motion.h2)`
  text-align: center;
  font-size: clamp(2rem, 4vw, 3.2rem);
  font-weight: 400;
  color: #333;
  margin-bottom: 10px;
  line-height: 1.2;
  
  .highlight {
    font-weight: 700;
    color: #333;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 60px;
  font-weight: 400;
`;

const ResultsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  margin-bottom: 50px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

const ResultItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PhotoContainer = styled.div`
  width: 300px;
  height: 350px;
  overflow: hidden;
  border-radius: 8px;
  margin-bottom: 15px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  @media (max-width: 480px) {
    width: 250px;
    height: 280px;
  }
`;

const PersonInfo = styled.div`
  font-size: 0.95rem;
  color: #555;
  
  .name {
    font-weight: 600;
    margin-right: 8px;
  }
  
  .details {
    font-weight: 400;
  }
`;

const CTAButton = styled(motion.button)`
  background: #8B2C5A;
  color: white;
  font-size: 1.4rem;
  font-weight: 700;
  padding: 18px 50px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  margin-bottom: 30px;
  box-shadow: 0 4px 20px rgba(139, 44, 90, 0.3);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 25px rgba(139, 44, 90, 0.4);
  }
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding: 16px 40px;
  }
`;

const Disclaimer = styled.p`
  font-size: 0.85rem;
  color: #666;
  line-height: 1.4;
  max-width: 800px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const Results = () => {
  const results = [
    {
      name: "Luana",
      age: "26 anos",
      image: "/luana.png"
    },
    {
      name: "Renatha Almeida", 
      age: "34 anos",
      image: "/dep03.png"
    },
    {
      name: "Fernanda Costa",
      age: "31 anos", 
      image: "/dep01.png"
    }
  ];

  return (
    <ResultsSection>
      <Container>
        <MainTitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          BASTA TOMAR 2 CÁPSULAS AO DIA<br />
          PARA <span className="highlight">RESTAURAR OS SEUS CABELOS</span>
        </MainTitle>
        
        <Subtitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Veja o que é possível alcançar fazendo o uso corretamente do Biocapilar
        </Subtitle>

        <ResultsGrid>
          {results.map((result, index) => (
                         <ResultItem
               key={index}
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: index * 0.2 }}
               viewport={{ once: true }}
             >
               <PhotoContainer>
                 <img src={result.image} alt={`${result.name} resultado`} />
               </PhotoContainer>
               
               <PersonInfo>
                 <span className="name">{result.name}</span>
                 <span className="details">| {result.age}</span>
               </PersonInfo>
             </ResultItem>
          ))}
        </ResultsGrid>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
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
            EU QUERO RESTAURAR MEUS CABELOS
          </CTAButton>
        </motion.div>

        <Disclaimer>
          *Esses são usuários do Biocapilar® que alcançaram resultado seguindo todas as instruções. Os resultados variam para cada pessoa.
        </Disclaimer>
      </Container>
    </ResultsSection>
  );
};

export default Results; 