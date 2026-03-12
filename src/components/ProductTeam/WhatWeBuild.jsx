import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Section = styled.section`
  padding: 100px 20px;
  background: var(--bg-color);
  position: relative;
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 60px;
`;

const Label = styled.span`
  color: #6699ff;
  font-weight: 600;
  letter-spacing: 2px;
  font-size: 0.9rem;
  text-transform: uppercase;
  margin-bottom: 16px;
  display: inline-block;
`;

const Title = styled.h2`
  font-size: 2.8rem;
  color: #fff;
  margin-bottom: 24px;
  font-family: var(--font-heading);
  word-break: keep-all;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #aaa;
  line-height: 1.6;
  max-width: 700px;
  margin: 0 auto;
  word-break: keep-all;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled(motion.div)`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 40px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(255, 255, 255, 0.1);
    transform: translateY(-5px);
  }
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  color: #fff;
  margin-bottom: 16px;
  font-family: var(--font-heading);
`;

const CardText = styled.p`
  color: #999;
  line-height: 1.6;
`;

const WhatWeBuild = () => {
    return (
        <Section>
            <Container>
                <Header>
                    <Label>Our Mission</Label>
                    <Title>무엇을 만드는가</Title>
                    <Description>
                        우리는 일상과 조직의 문제를 해결하고, 더 나은 커뮤니케이션과 가치를 창출하는 프로덕트를 만듭니다.
                    </Description>
                </Header>
                <Grid>
                    <Card
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <CardTitle>UMC Club Ops App</CardTitle>
                        <CardText>
                            동아리 운영진과 챌린저들이 오직 성장에만 집중할 수 있도록, 불필요한 운영 리소스를 최소화하는 통합 솔루션을 개발합니다.
                        </CardText>
                    </Card>
                    <Card
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <CardTitle>Next Generation Tools</CardTitle>
                        <CardText>
                            우리의 경험을 바탕으로 대학생 커뮤니티와 IT 동아리 생태계에 기여할 수 있는 혁신적인 도구들을 끊임없이 고민합니다.
                        </CardText>
                    </Card>
                </Grid>
            </Container>
        </Section>
    );
};

export default WhatWeBuild;
