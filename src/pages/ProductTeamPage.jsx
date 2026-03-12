import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductHero from '../components/ProductTeam/ProductHero';
import WhatWeBuild from '../components/ProductTeam/WhatWeBuild';
import SevenVisions from '../components/ProductTeam/SevenVisions';
import ApplyCTA from '../components/ProductTeam/ApplyCTA';

const MainContainer = styled.main`
  width: 100%;
  overflow: hidden;
  background-color: var(--bg-color);
  color: var(--text-primary);
`;

const NoiseOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZmlsdGVyIGlkPSJnoiPjxmZVR1cmJ1bGVuY2UgdHlwZT0iZnJhY3RhbE5vaXNlIiBiYXNlRnJlcXVlbmN5PSIwLjY1IiBudW1PY3RhdmVzPSIzIiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI2cpIiBvcGFjaXR5PSIwLjAzIi8+PC9zdmc+');
  pointer-events: none;
  z-index: 9999;
  opacity: 0.5;
`;

const ProgressBar = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: var(--gradient-main);
  transform-origin: 0%;
  z-index: 1000;
`;

function ProductTeamPage() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Scroll to top when mounted
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <MainContainer>
            <NoiseOverlay />
            <ProgressBar style={{ scaleX }} />
            <Navbar />

            <ProductHero />
            <WhatWeBuild />
            <SevenVisions />
            <ApplyCTA />

            <Footer />
        </MainContainer>
    );
}

export default ProductTeamPage;
