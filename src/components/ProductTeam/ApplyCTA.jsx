import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Section = styled.section`
  padding: 120px 20px;
  background: var(--bg-color);
  position: relative;
  text-align: center;
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 60px;
  background: linear-gradient(180deg, rgba(40, 40, 60, 0.4) 0%, rgba(20, 20, 30, 0.8) 100%);
  border: 1px solid rgba(102, 153, 255, 0.2);
  border-radius: 30px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

const GlowTarget = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(102, 153, 255, 0.15) 0%, transparent 70%);
  filter: blur(40px);
  pointer-events: none;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 20px;
  font-family: var(--font-heading);
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const Text = styled.p`
  font-size: 1.2rem;
  color: #aaa;
  margin-bottom: 40px;
  line-height: 1.6;
  position: relative;
  z-index: 1;
`;

const Button = styled(motion.a)`
  display: inline-block;
  background: linear-gradient(90deg, #6699ff, #9e66ff);
  color: #fff;
  padding: 18px 40px;
  border-radius: 50px;
  font-size: 1.2rem;
  font-weight: 600;
  text-decoration: none;
  position: relative;
  z-index: 1;
  box-shadow: 0 10px 20px rgba(102, 153, 255, 0.3);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 15px 30px rgba(102, 153, 255, 0.5);
  }
`;

const ApplyCTA = () => {
    return (
        <Section>
            <Container>
                <GlowTarget />
                <Title>UMC Product Team과 함께하시겠습니까?</Title>
                <Text>
                    우리의 비전에 공감하고 도전을 즐길 준비가 되었다면 지금 바로 지원하세요.
                </Text>
                <Button
                    href="https://forms.gle/TEmpPLaCecHolDeR"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    지원하기
                </Button>
            </Container>
        </Section>
    );
};

export default ApplyCTA;
