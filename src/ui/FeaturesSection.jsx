import styled, { css } from 'styled-components';
import Grid from './Grid.jsx';
import Row from './Row.jsx';
import Heading from './Heading.jsx';
import Container from './Container.jsx';

import IconBackground from './IconBackground.jsx';
import Icon from './Icon.jsx';

import { RiCheckboxMultipleFill } from 'react-icons/ri';
import { IoDocumentTextOutline } from 'react-icons/io5';
import { GiReceiveMoney } from 'react-icons/gi';
import { VscTools } from 'react-icons/vsc';
import { Button } from './Button.jsx';
import { useEffect, useRef } from 'react';
import { StyledLink } from './HeroSectionHome.jsx';

const StyledFeaturesSection = styled.div`
  padding: 14rem 0rem;
  transition: all 0.3s ease-in;
  background-color: var(--color-white);
`;

const FeaturesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-flow: row auto;
  gap: 3.2rem;

  @media (max-width: 850px) {
    display: flex;
    flex-direction: column;
  }
`;

const FeaturesBox = styled.div`
  padding: 2.4rem 3.2rem;
  background-color: var(--color-primary-light);
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  min-width: 31.5rem;
  gap: 1.2rem;
  /* box-shadow: 0 0.5rem 1rem var(--shadow-lightest); */
  align-self: stretch;
  /* justify-self: stretch; */
  @media (max-width: 850px) {
    /* height: 25.5rem; */
    /* align-self: center; */
    /* flex-grow: 1; */
  }
`;

const FeaturesPhoto = styled.img`
  height: 50rem;
  justify-self: center;
  width: 35rem;
  object-fit: cover;
  border-radius: 0.5rem;
  @media (max-width: 1000px) {
    height: 40rem;
    width: 25rem;
  }
  @media (max-width: 850px) {
    height: 45rem;
    width: 30rem;
  }
  @media (max-width: 600px) {
    grid-row: 1/2;
  }
`;

const FeaturesTitle = styled.span`
  display: block;
  /* text-align: center; */
  font-weight: 500;
  text-transform: uppercase;
  /* flex-grow: 1; */
  /* line-height: 1.8; */
  font-size: 1.6rem;
  letter-spacing: 1px;
`;

const FeatureDescription = styled.p`
  font-size: 1.5rem;
  /* font-weight: 500; */
  letter-spacing: 1.5px;
  line-height: 1.75;
  color: var(--color-grey-dark--2);
  /* text-align: center; */
`;

const gridMedia = css`
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-template-rows: max-content 1fr;
    gap: 4.4rem;
  }
`;

const StyledLine = styled.img`
  position: absolute;
  height: 4rem;
  width: auto;
  left: 0%;
  bottom: -40px;
  object-fit: cover;
`;
function FeaturesSection() {
  const section = useRef(null);

  useEffect(function () {
    function revealSection(entries, observer) {
      const [entry] = entries;
      if (!entry.isIntersecting) return;

      section.current.classList.remove('section--hidden');

      observer.unobserve(section.current);
    }

    const sectionObserver = new IntersectionObserver(revealSection, {
      root: null,
      threshold: 0.2,
    });

    sectionObserver.observe(section.current);
  }, []);

  return (
    <StyledFeaturesSection ref={section} className='section--hidden'>
      <Container>
        <Grid margin='0 0 4.8rem 0' gap='0' columns='1fr 1fr'>
          <Row>
            <Row $size='tiny'>
              <Heading as='h4' variation='accent'>
                Servicii
              </Heading>
              <Heading as='h2'>
                Ceea ce oferim
                <StyledLine
                  alt='Linie curbata pentru accent'
                  src='/assets/underline_curved.webp'
                ></StyledLine>
              </Heading>
            </Row>
            <Grid></Grid>
          </Row>
          <span></span>
        </Grid>
        <Grid columns='1fr 1fr' media={gridMedia}>
          <Row $align='start' $size='big'>
            <FeaturesContainer>
              <FeaturesBox>
                <Row $type='horizontal' $size='medium'>
                  <IconBackground color='#C2D9FF' size='large'>
                    <Icon color={'#7752FE'} hovercolor='#140368' sizes='tiny'>
                      <RiCheckboxMultipleFill></RiCheckboxMultipleFill>
                    </Icon>
                  </IconBackground>
                  <FeaturesTitle>Adminstrare Completa</FeaturesTitle>
                </Row>
                <FeatureDescription>
                  Un pachet complet ce include{' '}
                  <strong style={{ fontSize: '1.4rem' }}>Contabilitatea</strong>
                  +
                  <strong style={{ fontSize: '1.4rem' }}>
                    Administrarea tehnica
                  </strong>
                  +<strong style={{ fontSize: '1.4rem' }}>Casierie</strong>.
                </FeatureDescription>
              </FeaturesBox>
              <FeaturesBox>
                <Row $type='horizontal' $size='medium'>
                  <IconBackground color='#C2D9FF' size='large'>
                    <Icon color={'#7752FE'} hovercolor='#140368' sizes='tiny'>
                      <IoDocumentTextOutline></IoDocumentTextOutline>
                    </Icon>
                  </IconBackground>
                  <FeaturesTitle>Contabilitate</FeaturesTitle>
                </Row>
                <FeatureDescription>
                  Rezolvarea aspectelor financiare intr-un mod sigur si
                  transparent.
                </FeatureDescription>
              </FeaturesBox>
              <FeaturesBox>
                <Row $type='horizontal' $size='medium'>
                  <IconBackground color='#C2D9FF' size='large'>
                    <Icon color={'#7752FE'} hovercolor='#140368' sizes='tiny'>
                      <GiReceiveMoney></GiReceiveMoney>
                    </Icon>
                  </IconBackground>
                  <FeaturesTitle>Casierie</FeaturesTitle>
                </Row>
                <FeatureDescription>
                  Colectarea si inregistrarea platilor corespunzatoare fiecarui
                  imobil.
                </FeatureDescription>
              </FeaturesBox>
              <FeaturesBox>
                <Row $type='horizontal' $size='medium'>
                  <IconBackground color='#C2D9FF' size='large'>
                    <Icon color={'#7752FE'} hovercolor='#140368' sizes='tiny'>
                      <VscTools></VscTools>
                    </Icon>
                  </IconBackground>
                  <FeaturesTitle>Adminstrare Tehnica</FeaturesTitle>
                </Row>
                <FeatureDescription>
                  Asigurarea intretinerii si functionarii optime a imobilelor.
                </FeatureDescription>
              </FeaturesBox>
            </FeaturesContainer>
            <StyledLink href='/servicii'>
              <Button $variation='secondary'>Mai multe detalii</Button>
            </StyledLink>
          </Row>
          <FeaturesPhoto
            src={"/assets/features.webp"}
            alt='Documente pe o masa'
          ></FeaturesPhoto>
        </Grid>
      </Container>
    </StyledFeaturesSection>
  );
}

export default FeaturesSection;
