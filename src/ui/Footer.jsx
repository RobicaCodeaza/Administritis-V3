import styled from 'styled-components';
import  Link  from 'next/link';
import {
  IoCallOutline,
  IoLogoInstagram,
  IoMailOutline,
  IoLogoFacebook,
} from 'react-icons/io5';
import { FaRegShareFromSquare } from "react-icons/fa6";
import Icon from './Icon.jsx';
import Logo from './Logo.jsx';
import Grid from './Grid.jsx';

import { animateScroll as scroll, scroller } from 'react-scroll';
import FormTrigger from './FormTrigger.jsx';

const StyledFooter = styled.footer`
  background-color: var(--color-black);

  padding: 6rem 12rem;

  @media (max-width: 850px) {
    padding: 4rem 6rem;
  }

  @media (max-width: 600px) {
    padding: 4rem 4rem;
  }
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 4.8rem 0 2.4rem 0;
  gap: 0 12rem;
  @media (max-width: 850px) {
    gap: 3.2rem 0;
    display: flex;
    flex-direction: column;
  }
`;

const FooterRow = styled.div`
  align-self: start;
  border-top: 1px solid var(--color-accent2-light);
  padding: 2.4rem 4rem 0 4rem;
  width: 100%;
  text-align: center;

  @media (max-width: 600px) {
    padding: 2.4rem 2.4rem 0 2.4rem;
  }
`;

const ContactRow = styled(FooterRow)`
  justify-self: right;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2.4rem;

  @media (max-width: 600px) {
    justify-self: center;
  }
`;

const OtherServices = styled(FooterRow)`
  justify-self: left;
  display: grid;
  grid-template-columns: 1fr 1fr;
  /* text-align: center; */

  @media (max-width: 600px) {
    justify-self: center;
    justify-content: center;
  }
`;

const ContactDetails = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  color: var(--color-accent2-light);
  gap: 0.4rem;
  font-size: 1.4rem;
`;

const FooterContactLinks = styled.ul`
  justify-self: right;
  justify-content: center;
  align-items: center;
  /* padding: 2.4rem 0; */
  list-style: none;
  display: flex;
  gap: 2.4rem;
`;

const StyledLink = styled(Link)`
  &:link,
  &:visited {
    display: block;
    font-size: 1.4rem;
    text-decoration: none;
    color: var(--color-accent2-light);
    border: 1px solid transparent;
    transition: all 0.3s;
    padding: 0.4rem 0.8rem;
    position: relative;
    text-transform: uppercase;
    letter-spacing: 1px;
    /* border-radius: 0.5rem; */

    /* background-color: #201658; */
    /* color: var(--color-primary-light--2); */

    &::before {
      content: '';
      display: block;
      position: absolute;
      left: 50%;
      bottom: 0;
      transform: translateX(-50%);
      /* bottom: -10px; */
      width: 0;
      height: 1px;
      transition: all 0.3s;
      background-image: linear-gradient(
        var(--color-accent1),
        var(--color-accent1-dark)
      );
    }
  }

  &:hover {
    transform: translateY(-1.5px);
    /* background-color: var(--color-accent1);
    color: var(--color-primary-light); */
    color: #fbada3;
    letter-spacing: 1px;
    &::before {
      width: 15rem;

      @media (max-width: 600px) {
        width: 5rem;
      }
    }
  }
`;
const StyledNoLink = styled.a`
  &,
  &:link,
  &:visited {
    display: block;
    font-size: 1.4rem;
    text-decoration: none;
    color: var(--color-accent2-light);
    border: 1px solid transparent;
    transition: all 0.3s;
    padding: 0.4rem 0.8rem;
    position: relative;
    text-transform: uppercase;
    letter-spacing: 1px;
    /* border-radius: 0.5rem; */

    /* background-color: #201658; */
    /* color: var(--color-primary-light--2); */

    &::before {
      content: '';
      display: block;
      position: absolute;
      left: 50%;
      bottom: 0;
      transform: translateX(-50%);
      /* bottom: -10px; */
      width: 0;
      height: 1px;
      transition: all 0.3s;
      background-image: linear-gradient(
        var(--color-accent1),
        var(--color-accent1-dark)
      );
    }
  }

  &:hover,
  &:active {
    transform: translateY(-1.5px);
    color: #fbada3;
    letter-spacing: 1px;
    &::before {
      width: 15rem;
      @media (max-width: 600px) {
        width: 5rem;
      }
    }
  }
`;

const StyledNoHref = styled.span`
  & {
    display: block;
    font-size: 1.4rem;
    text-decoration: none;
    color: var(--color-accent2-light);
    border: 1px solid transparent;
    transition: all 0.3s;
    padding: 0.4rem 0.8rem;
    position: relative;
    text-transform: uppercase;
    letter-spacing: 1px;
    /* border-radius: 0.5rem; */

    /* background-color: #201658; */
    /* color: var(--color-primary-light--2); */

    &::before {
      content: '';
      display: block;
      position: absolute;
      left: 50%;
      bottom: 0;
      transform: translateX(-50%);
      /* bottom: -10px; */
      width: 0;
      height: 1px;
      transition: all 0.3s;
      background-image: linear-gradient(
        var(--color-accent1),
        var(--color-accent1-dark)
      );
    }
  }

  &:hover,
  &:active {
    transform: translateY(-1.5px);
    color: #fbada3;
    letter-spacing: 1px;
    &::before {
      width: 15rem;
      @media (max-width: 600px) {
        width: 5rem;
      }
    }
  }
`;

function Footer() {
  const goTo = function (to) {
    if (to === 'top') {
      scroll.scrollToTop({ duration: 300, smooth: true });
      return;
    }
    if (to === 'bottom') {
      scroll.scrollToBottom();
      return;
    }

    scroller.scrollTo(to, { duration: 350, smooth: 'easeInOutQuart' });
  };

  return (
    <StyledFooter>
      <Logo></Logo>
      <StyledGrid>
        <ContactRow>
          <ContactDetails>
            <li>R&A Administritis</li>
            <li>
              <a href='mailto:&#114;&#097;&#097;&#100;&#109;&#110;&#115;&#116;&#114;&#116;&#115;&#046;&#111;&#102;&#102;&#105;&#099;&#101;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;'>
                Email
              </a>
            </li>
            <li>Telefon: 0760956918</li>
            <li>Bucuresti,Sector 3</li>
          </ContactDetails>
          <FooterContactLinks>
            <li>
              <a
                href='tel:0760956918'
                aria-label='Link to phone'
                rel='noreferrer'
              >
                <Icon hovercolor='#fbada3' color={'#fddeda'} sizes='small'>
                  <IoCallOutline></IoCallOutline>
                </Icon>
              </a>
            </li>
            <li>
              <a
                href='mailto:raadmnstrts.office@gmail.com'
                aria-label='Link to mail'
                rel='noreferrer'
              >
                <Icon hovercolor='#fbada3' color={'#fddeda'} sizes='small'>
                  <IoMailOutline></IoMailOutline>
                </Icon>
              </a>
            </li>
            <li>
              <a aria-label='Link to instagram'>
                <Icon color={'#fddeda'} hovercolor='#fbada3' sizes='small'>
                  <IoLogoInstagram></IoLogoInstagram>
                </Icon>
              </a>
            </li>
            <li>
              <a aria-label='Link to facebook'>
                <Icon color={'#fddeda'} hovercolor='#fbada3' sizes='small'>
                  <IoLogoFacebook></IoLogoFacebook>
                </Icon>
              </a>
            </li>
            <li>
              <div
                className='fb-share-button'
                data-href='https://developers.facebook.com/docs/plugins/'
                data-layout=''
                data-size=''
              >
                <a
                  target='_blank'
                  href='https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse'
                  className='fb-xfbml-parse-ignore text-yellow-50'
                  rel='noreferrer'
                >
                 <Icon sizes='small' hovercolor='#fbada3' color={'#fddeda'}>
                  <FaRegShareFromSquare ></FaRegShareFromSquare>
                 </Icon>
                </a>
              </div>
            </li>
          </FooterContactLinks>
        </ContactRow>
        <OtherServices>
          <StyledNoLink onClick={() => goTo('top')}>Acasa</StyledNoLink>
          <StyledLink href='/servicii'>Servicii</StyledLink>
          <StyledLink href='/documente'>Documente utile</StyledLink>
          <FormTrigger>
            <StyledNoHref href='smth' rel='noreferrer'>
              Contact
            </StyledNoHref>
          </FormTrigger>
          <StyledNoLink
            href='https://www.e-bloc.ro'
            target='_blank'
            rel='noreferrer'
          >
            Avizier
          </StyledNoLink>
          <StyledNoLink onClick={() => goTo('colaborare')}>Colaborare</StyledNoLink>
        </OtherServices>
      </StyledGrid>
    </StyledFooter>
  );
}

export default Footer;
