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

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const VisionCard = styled(motion.div)`
  background: linear-gradient(145deg, rgba(30, 30, 45, 0.4) 0%, rgba(20, 20, 30, 0.2) 100%);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;

  /* Number watermark */
  &::after {
    content: '${props => props.number}';
    position: absolute;
    top: -10px;
    right: 10px;
    font-size: 8rem;
    font-weight: 900;
    color: rgba(255, 255, 255, 0.03);
    z-index: 0;
    line-height: 1;
    font-family: var(--font-heading);
  }
`;

const IconWrapper = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 12px;
  background: rgba(102, 153, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  margin-bottom: 20px;
  z-index: 1;
`;

const CardTitle = styled.h3`
  font-size: 1.3rem;
  color: #fff;
  margin-bottom: 12px;
  z-index: 1;
`;

const CardText = styled.p`
  color: #aaa;
  font-size: 0.95rem;
  line-height: 1.6;
  z-index: 1;
`;

const visions = [
    { id: 1, icon: '🎯', title: 'User-Centric', desc: '모든 결정의 중심에는 항상 사용자가 있습니다.' },
    { id: 2, icon: '📊', title: 'Data-Driven', desc: '직관이 아닌 데이터에 기반하여 의사결정을 내립니다.' },
    { id: 3, icon: '⚡️', title: 'Agile Execution', desc: '완벽함보다는 빠른 실행과 반복적인 개선을 추구합니다.' },
    { id: 4, icon: '🧩', title: 'Problem Solving', desc: '표면적인 현상이 아닌 본질적인 문제를 파악하고 해결합니다.' },
    { id: 5, icon: '✨', title: 'Continuous Polish', desc: '타협하지 않고 끊임없이 디테일을 다듬어 완성도를 높입니다.' },
    { id: 6, icon: '🤝', title: 'Collaborative Creativity', desc: '서로 다른 전문성을 가진 팀원들의 협업으로 창의성을 극대화합니다.' },
    { id: 7, icon: '🌱', title: 'Sustainable Growth', desc: '단기적인 성과를 넘어 프로덕트와 팀의 지속 가능한 성장을 목표로 합니다.' }
];

const SevenVisions = () => {
    return (
        <Section>
            <Container>
                <Header>
                    <Title>우리의 7가지 비전</Title>
                </Header>
                <Grid>
                    {visions.map((v, index) => (
                        <VisionCard
                            key={v.id}
                            number={v.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <IconWrapper>{v.icon}</IconWrapper>
                            <CardTitle>{v.title}</CardTitle>
                            <CardText>{v.desc}</CardText>
                        </VisionCard>
                    ))}
                </Grid>
            </Container>
        </Section>
    );
};

export default SevenVisions;
