import styled from 'styled-components';
import Container from './Container.jsx';
import Heading from './Heading.jsx';
import Row from './Row.jsx';
import Grid from './Grid.jsx';


import { GrOptimize, GrSecure } from 'react-icons/gr';
import { TiCloudStorageOutline } from 'react-icons/ti';
import Icon from './Icon.jsx';
import IconBackground from './IconBackground.jsx';
import { useEffect, useRef } from 'react';

const StyledAboutSection = styled.section`
  padding: 14rem 0;
  transition: all 0.3s ease-in;
`;
const AboutDescription = styled.p`
  font-size: 1.4rem;
  font-weight: 500;
  letter-spacing: 1px;
  line-height: 1.7;
  align-self: end;
  color: var(--color-grey-dark);
`;

const AboutPhoto = styled.img`
  height: 50rem;
  justify-self: center;
  /* width: auto; */
  width: 35rem;
  object-fit: cover;
  border-radius: 0.5rem;

  @media (max-width: 1000px) {
  }
  @media (max-width: 850px) {
    /* height: 50rem;
    width: 35rem; */
    height: 40rem;
    width: 25rem;
  }
`;

const AboutUsList = styled.ul`
  align-self: center;
  display: flex;
  gap: 2.4rem;
  flex-direction: column;
  list-style: none;
`;

const AboutUsBullet = styled.li`
  display: flex;
  flex-direction: column;
`;

const StyledLine = styled.img`
  position: absolute;
  height: 4rem;
  width: auto;
  left: 0%;
  bottom: -40px;
  object-fit: cover;
`;

function AboutSection() {
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
    <StyledAboutSection ref={section} className='section--hidden'>
      <Container>
        <Grid columns='1fr 1fr' margin='0 0 4.8rem 0' gap='0 4.4rem'>
          <Row $size='tiny'>
            <Heading as='h4' variation='accent'>
              Scopul | Promptitudine in Servicii
            </Heading>
            <Heading as='h2'>
              De ce sa ne alegi pe noi?
              <StyledLine
                alt='Linie curbata pentru accent'
                src='/assets/underline_curved.webp'
              ></StyledLine>
            </Heading>
          </Row>
          <Row typeof='vertical'>
<div>Administrare Imobile Eficientă și Sigură în Sectoarele 3, 4 și 5 din București</div>
          <AboutDescription>
          Administrarea imobilelor este o responsabilitate complexă care necesită o abordare profesionistă, orientată către nevoile reale ale proprietarilor și locatarilor. La Administritis, ne dedicăm oferirii de servicii de administrare imobile în Sectoarele 3, 4 și 5 din București, punând accent pe eficiența costurilor, promptitudinea serviciilor și siguranța datelor.
          </AboutDescription>
          </Row>
        </Grid>
        <Grid columns='1fr 1fr' gap='0 4.4rem'>
          <AboutPhoto
            src={"/assets/aboutUs.webp"}
            alt='Doua persoane care incheie o negociere'
          ></AboutPhoto>
          <AboutUsList>
            <AboutUsBullet>
              {/* <Icon></Icon> */}

              <IconBackground color='#C2D9FF' size='large'>
                <Icon color={'#7752FE'} hovercolor='#140368' sizes='tiny'>
                  <GrOptimize></GrOptimize>
                </Icon>
              </IconBackground>
              <Heading as='h4' margin='1.2rem 0 0.8rem 0'>
                Prioritate
              </Heading>
              <AboutDescription>
              Pentru noi, securitatea și satisfacția clienților sunt pe primul loc. Ne concentrăm pe optimizarea cheltuielilor pentru asociațiile de proprietari, asigurând totodată un răspuns prompt la orice problemă sau necesitate. Ne angajăm să îți oferim soluții rapide și eficiente pentru orice situație, astfel încât tu să te poți bucura de confortul locuinței tale, fără griji suplimentare.
              </AboutDescription>
            </AboutUsBullet>
            <AboutUsBullet>
              <IconBackground color='#C2D9FF' size='large'>
                <Icon color={'#7752FE'} hovercolor='#140368' sizes='tiny'>
                  <GrSecure></GrSecure>
                </Icon>
              </IconBackground>
              <Heading as='h4' margin='1.2rem 0 0.8rem 0'>
                Protectie
              </Heading>
              <AboutDescription>
              În era digitală, protecția datelor este esențială. La Administritis, ne asigurăm că toate informațiile tale sunt protejate, fie că vorbim despre documente pe suport de hârtie sau despre date stocate electronic pe servere securizate. Implementăm cele mai bune practici în domeniul securității cibernetice, garantând astfel că informațiile tale sunt în siguranță, indiferent de circumstanțe.
              </AboutDescription>
            </AboutUsBullet>
            <AboutUsBullet>
              <IconBackground color='#C2D9FF' size='large'>
                <Icon color={'#7752FE'} hovercolor='#140368' sizes='tiny'>
                  <TiCloudStorageOutline></TiCloudStorageOutline>
                </Icon>
              </IconBackground>
              <Heading as='h4' margin='1.2rem 0 0.8rem 0'>
                Acces Facil
              </Heading>
              <AboutDescription>
              Unul dintre obiectivele noastre principale este să asigurăm un acces facil și transparent la informațiile relevante pentru toți proprietarii. Prin intermediul sistemelor online pe care le punem la dispoziție, fiecare proprietar poate accesa rapid informațiile despre asociație, poate introduce indexul la apă sau poate verifica alte detalii importante, totul cu un singur clic. Acest nivel de accesibilitate și transparență este esențial pentru o administrare modernă și eficientă a imobilelor.
              </AboutDescription>
            </AboutUsBullet>
          </AboutUsList>
        </Grid>
      </Container>
    </StyledAboutSection>
  );
}

export default AboutSection;
