import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const IngredientsSectionContainer = styled.section`
  background: linear-gradient(135deg, #fdf2f8 0%, #ffffff 50%, #fdf2f8 100%);
  padding: 80px 0;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23fce7f3' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E") repeat;
    pointer-events: none;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 1;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 3rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 20px;
  background: linear-gradient(135deg, #8B2C5A 0%, #C2185B 50%, #AD1457 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }


`;

const SectionSubtitle = styled(motion.p)`
  font-size: 1.2rem;
  text-align: center;
  color: #666;
  margin-bottom: 60px;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 40px;
  }
`;

const CarouselContainer = styled.div`
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
`;

const CarouselWrapper = styled.div`
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

const CarouselTrack = styled(motion.div)`
  display: flex;
  transition: transform 0.3s ease-in-out;
  gap: 30px;
`;

const IngredientCard = styled(motion.div)`
  min-width: 280px;
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(139, 44, 90, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 40px rgba(139, 44, 90, 0.2);
  }
`;

const IngredientImage = styled.div`
  height: 200px;
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  img {
    width: 120px;
    height: 120px;
    object-fit: cover;
    border-radius: 50%;
    border: 2px solid rgba(139, 44, 90, 0.4);
    box-shadow: 0 0 0 1px rgba(139, 44, 90, 0.15), 0 3px 12px rgba(139, 44, 90, 0.2);
    transition: all 0.3s ease;
  }

  &:hover img {
    transform: scale(1.1);
    border: 3px solid rgba(139, 44, 90, 0.7);
    box-shadow: 0 0 0 2px rgba(139, 44, 90, 0.3), 0 6px 20px rgba(139, 44, 90, 0.3);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at center, rgba(139, 44, 90, 0.05) 0%, transparent 70%);
  }
`;

const CardContent = styled.div`
  padding: 25px;
  text-align: center;
`;

const IngredientName = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  color: #8B2C5A;
  margin-bottom: 15px;
  line-height: 1.3;
`;

const IngredientDescription = styled.p`
  font-size: 0.95rem;
  color: #666;
  line-height: 1.6;
  margin: 0;
`;

const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: white;
  border: 2px solid #8B2C5A;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 2;
  color: #8B2C5A;
  font-size: 1.2rem;
  font-weight: bold;

  &:hover {
    background: #8B2C5A;
    color: white;
    transform: translateY(-50%) scale(1.1);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &.prev {
    left: -25px;
  }

  &.next {
    right: -25px;
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 1rem;

    &.prev {
      left: -20px;
    }

    &.next {
      right: -20px;
    }
  }
`;

const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 30px;
`;

const Dot = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background: ${props => props.active ? '#8B2C5A' : '#ddd'};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #8B2C5A;
    transform: scale(1.2);
  }
`;

const ingredients = [
  {
    name: "Biotina",
    image: "/i1.png",
    description: "Vitamina B7 essencial que fortalece a estrutura capilar, reduz a quebra e promove o crescimento saudável dos fios."
  },
  {
    name: "Retinila",
    image: "/i2.png", 
    description: "Vitamina A que estimula a regeneração celular, melhora a saúde do couro cabeludo e fortalece os folículos pilosos."
  },
  {
    name: "DL-Alfatocoferila",
    image: "/i3.png",
    description: "Vitamina E antioxidante que protege os cabelos contra danos ambientais e melhora a circulação no couro cabeludo."
  },
  {
    name: "Ácido Ascórbico",
    image: "/i10.png",
    description: "Vitamina C que estimula a produção de colágeno, fortalece os fios e protege contra radicais livres."
  },
  {
    name: "Nicotinamida",
    image: "/i5.png",
    description: "Vitamina B3 (Niacina) que melhora a circulação sanguínea no couro cabeludo e fortalece a estrutura capilar."
  },
  {
    name: "D-Pantotenato",
    image: "/i6.png",
    description: "Vitamina B5 (Ácido Pantotênico) que hidrata profundamente os fios e previne a quebra e ressecamento."
  },
  {
    name: "Piridoxina",
    image: "/i7.png",
    description: "Vitamina B6 que regula a produção de sebo, fortalece os folículos e promove o crescimento capilar saudável."
  },
  {
    name: "Complexo Vitamínico",
    image: "/i4.png",
    description: "Blend de vitaminas A, E, C, B3, B5, B6 e B7 que trabalham em sinergia para nutrição completa dos cabelos."
  },
  {
    name: "Colágeno Hidrolisado",
    image: "/i9.png",
    description: "Proteína fundamental que restaura a elasticidade e força dos cabelos, prevenindo a queda e melhorando a textura."
  },
  {
    name: "Cobre",
    image: "/i8.png",
    description: "Mineral essencial para a produção de melanina e colágeno, mantendo a cor natural e estrutura dos cabelos."
  }
];

const IngredientsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, ingredients.length - itemsPerView);

  const nextSlide = () => {
    setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Touch/Swipe support for mobile
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  return (
    <IngredientsSectionContainer>
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          FÓRMULA EXCLUSIVA COM INGREDIENTES PODEROSOS
        </SectionTitle>
        
        <SectionSubtitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Descubra a combinação perfeita de ativos naturais e tecnológicos que vão transformar seus fios! Nossa fórmula exclusiva foi desenvolvida para acabar com a queda, fortalecer os fios e acelerar o crescimento. Surpreenda-se com os incríveis resultados!
        </SectionSubtitle>

        <CarouselContainer>
          <NavigationButton 
            className="prev" 
            onClick={prevSlide}
            disabled={currentIndex === 0}
          >
            ‹
          </NavigationButton>

          <CarouselWrapper
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <CarouselTrack
              style={{
                transform: `translateX(-${currentIndex * (280 + 30)}px)`,
                width: `${ingredients.length * (280 + 30)}px`
              }}
            >
              {ingredients.map((ingredient, index) => (
                <IngredientCard
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <IngredientImage>
                    <img src={ingredient.image} alt={ingredient.name} />
                  </IngredientImage>
                  <CardContent>
                    <IngredientName>{ingredient.name}</IngredientName>
                    <IngredientDescription>{ingredient.description}</IngredientDescription>
                  </CardContent>
                </IngredientCard>
              ))}
            </CarouselTrack>
          </CarouselWrapper>

          <NavigationButton 
            className="next" 
            onClick={nextSlide}
            disabled={currentIndex === maxIndex}
          >
            ›
          </NavigationButton>
        </CarouselContainer>

        <DotsContainer>
          {Array.from({ length: maxIndex + 1 }, (_, index) => (
            <Dot
              key={index}
              active={index === currentIndex}
              onClick={() => goToSlide(index)}
            />
          ))}
        </DotsContainer>
      </Container>
    </IngredientsSectionContainer>
  );
};

export default IngredientsSection; 