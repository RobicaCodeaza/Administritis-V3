import styled from 'styled-components';
import {
  IoCallOutline,
  IoMailOutline,
  IoLogoInstagram,
  IoLogoFacebook,
} from 'react-icons/io5';
import  Link  from 'next/link';

import Heading from './Heading.jsx';
import { Button, ButtonTrigger } from './Button.jsx';
import Icon from './Icon.jsx';
import FormTrigger from './FormTrigger.jsx';
import { useEffect, useRef } from 'react';

const StyledHeroSection = styled.div`
  display: flex;
  /* height: 40vw; */
  /* padding: 90vh; */
  height: 100%;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
const HeroSectionLeft = styled.div`
  flex: 0 1 65%;
  padding: 6vw 13vw 6vw 9.6vw;
  background-image: url('/assets/heroPic.webp');
  position: relative;
  background-size: cover;

  &::after {
    display: block;
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    background-image: linear-gradient(
      to top,
      rgba(232, 230, 243, 0.55),
      rgba(232, 230, 243, 0.75)
    );
  }

  @media (max-width: 850px) {
    padding: 6vw 15vw 6vw 4vw;
  }

  @media (max-width: 600px) {
    padding: 9vw;
  }
`;
const HeroSectionRight = styled.div`
  flex: 0 1 35%;
  background-color: var(--color-primary-light--1);
  position: relative;
  padding: 5vw;
  display: flex;
  justify-content: right;
  align-items: center;
  @media (max-width: 1050px) {
    align-items: start;
    justify-content: center;
  }
  @media (max-width: 850px) {
  }
  @media (max-width: 600px) {
    justify-content: space-around;

    padding: 2vw 6vw;
    align-items: center;
  }
`;

const HeroMainImgBox = styled.div`
  position: absolute;
  left: -50%;
  top: 50%;
  transform: translate(5vw, -50%);
  width: 30vw;
  height: 30vw;
  box-shadow: 0 0.75rem 1.5rem 0 var(--shadow);

  @media (max-width: 850px) {
    left: -20%;
    transform: translate(0, -50%);
    height: 30rem;
    width: 30rem;
  }
  @media (max-width: 600px) {
    width: 15rem;
    height: 15rem;
    position: relative;
    left: 0;
    top: 0;
    transform: translate(0, 0);
  }

  &::after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-image: linear-gradient(
      to bottom,
      rgba(209, 205, 230, 0.25),
      rgba(232, 230, 243, 0.1)
    );
  }
`;
const HeroImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: relative;
  border-radius: 0.25rem;
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  z-index: 1;
`;

const HeroDescription = styled.span`
  font-size: 2rem;
  font-weight: 400;
  color: var(--color-grey-dark);
`;

const HeroAction = styled.div`
  margin-top: 3.2rem;
  display: flex;
  gap: 2.4rem;
`;

const HeroContactLinks = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  gap: 0.5rem;
  @media (max-width: 1050px) {
    flex-direction: row;
  }

  & li {
    display: block;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;

    & a {
      display: block;

      cursor: pointer;
    }
  }
`;

export const StyledLink = styled(Link)`
  display: block;
`;

function HeroSectionHome({ children }) {
  const heroSection = useRef(null);

  const heroSectionToUnobserve = heroSection.current;

  useEffect(
    function () {
      const nav = document.getElementById('nav');
      const navHeight = nav.getBoundingClientRect().height;

      function revealMenu(entries, observer) {
        const [entry] = entries;
        if (!entry.isIntersecting) nav.classList.add('sticky');
        else nav.classList.remove('sticky');
      }

      const heroObserver = new IntersectionObserver(revealMenu, {
        root: null,
        threshold: 0,
        rootMargin: `-${navHeight}px`,
      });

      heroObserver.observe(heroSection.current);
    },
    [heroSectionToUnobserve]
  );

  return (
    <StyledHeroSection ref={heroSection} id='hero'>
      <HeroSectionLeft>
        <HeroContent>
          <Heading as='h3' margin='0 0 2.4rem 0' variation='accent'>
            Profesionalism & Incredere
          </Heading>
          <Heading as='h1'>Administrare Imobile in grija noastra</Heading>
          <HeroDescription>
            Servicii complete de administrare imobile. Totul mai facil si
            accesibil proprietarilor.
          </HeroDescription>
          <HeroAction>
            <StyledLink href='/servicii'>
              <Button $variation='secondary'>Servicii</Button>
            </StyledLink>
            <FormTrigger>
              <ButtonTrigger $variation='primary'>Contact</ButtonTrigger>
            </FormTrigger>
          </HeroAction>
        </HeroContent>
      </HeroSectionLeft>
      <HeroSectionRight>
        <HeroMainImgBox>
          <HeroImg src={"/assets/heroMain.webp"} alt='Imagine Imobiliare'></HeroImg>
        </HeroMainImgBox>
        <HeroContactLinks>
          <li>
            <a href='tel:0760956918' aria-label='Call link'>
              <Icon hovercolor='#7c2d24' color={'#626262'} sizes='medium'>
                <IoCallOutline></IoCallOutline>
              </Icon>
            </a>
          </li>
          <li>
            <a
              href='mailto:raadmnstrts.office@gmail.com'
              aria-label='Mail Link'
            >
              <Icon hovercolor='#7c2d24' color={'#626262'} sizes='medium'>
                <IoMailOutline></IoMailOutline>
              </Icon>
            </a>
          </li>
          <li>
            <a aria-label='Instagram Link'>
              <Icon color={'#626262'} hovercolor='#7c2d24'>
                <IoLogoInstagram></IoLogoInstagram>
              </Icon>
            </a>
          </li>
          <li>
            <a aria-label='Facebook Link'>
              <Icon color={'#626262'} hovercolor='#7c2d24' sizes='medium'>
                <IoLogoFacebook></IoLogoFacebook>
              </Icon>
            </a>
          </li>
        </HeroContactLinks>
      </HeroSectionRight>
    </StyledHeroSection>
  );
}

export default HeroSectionHome;
