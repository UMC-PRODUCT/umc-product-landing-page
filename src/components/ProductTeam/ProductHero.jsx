import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import productLogo from '../../assets/productLogo.png';

const Section = styled.section`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 120px 20px 60px;
  background: radial-gradient(circle at 50% 40%, rgba(20, 20, 30, 1) 0%, #000 70%);
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 100px 20px 40px;
    min-height: 60vh;
  }
`;

const Content = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  z-index: 5;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LogoContainer = styled(motion.div)`
  width: 160px;
  height: auto;
  margin-bottom: 24px;
  position: relative;
  z-index: 10;
  
  img {
    width: 100%;
    height: auto;
    object-fit: contain;
    filter: drop-shadow(0 0 20px rgba(102, 153, 255, 0.4));
  }
`;

const Badge = styled(motion.span)`
  display: inline-block;
  padding: 8px 18px;
  background: rgba(255, 255, 255, 0.08);
  color: #ccc;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  letter-spacing: 1px;
`;

const Title = styled(motion.h1)`
  font-size: 4rem;
  line-height: 1.1;
  margin-bottom: 24px;
  letter-spacing: -0.02em;
  font-family: var(--font-heading);
  font-weight: 800;
  color: #fff;
  word-break: keep-all;
  
  span {
    background: linear-gradient(90deg, #6699ff, #9e66ff);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const CenterGlow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(102, 153, 255, 0.2) 0%, transparent 70%);
  filter: blur(60px);
  z-index: 0;
  pointer-events: none;

  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
  }
`;

const ProductHero = () => {
    return (
        <Section>
            <CenterGlow />

            <Content>
                <LogoContainer
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, type: "spring" }}
                >
                    <img src={productLogo} alt="UMC Product Logo" />
                </LogoContainer>

                <Badge
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    University MakeUs Challenge
                </Badge>

                <Title
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <span>UMC Product</span>
                </Title>
            </Content>
        </Section>
    );
};

export default ProductHero;
