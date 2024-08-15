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
const AboutTitle = styled.p`font-size:1.6rem; 
text-align:center; font-weight:400`

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
<AboutTitle>Administrare Imobile Eficientă și Sigură în Sectoarele 3, 4 și 5 din București</AboutTitle>
          <AboutDescription>
          Serviciile noastre de administrare imobile sunt disponibile în Sectorul 3 și se axează pe asigurarea unui mediu sigur și eficient pentru toți locatarii. Cu o firmă specializată în administrarea blocurilor și a asociațiilor de proprietari, ne asigurăm că fiecare aspect al administrării imobilelor este gestionat profesional. Indiferent dacă este vorba de administrarea contabilității sau de administrarea tehnică, suntem aici pentru a oferi soluții complete și personalizate.
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

              <Heading as='h4' margin='1.2rem 0 0.8rem 0'>
              <IconBackground color='#C2D9FF' size='large' contentSize='min-content'>
                <Icon color={'#7752FE'} hovercolor='#140368' sizes='tiny'>
                  <GrOptimize></GrOptimize>
                </Icon>
              </IconBackground>
                Prioritate
              </Heading>
              <AboutDescription>
              La Administritis, prioritatea noastră este să oferim servicii de administrare rapide și sigure, axate pe protecția datelor și pe securitatea imobilelor. Fie că gestionezi o asociație de proprietari sau un bloc, noi asigurăm administrarea imobilelor cu eficiență maximă, reducând costurile și optimizând cheltuielile. Securitatea datelor este garantată prin măsuri stricte de protecție, fie că informațiile sunt stocate electronic sau pe hârtie.
</AboutDescription>
            </AboutUsBullet>
            <AboutUsBullet>
         
              <Heading as='h4' margin='1.2rem 0 0.8rem 0'>
              <IconBackground color='#C2D9FF' size='large'>
                <Icon color={'#7752FE'} hovercolor='#140368' sizes='tiny'>
                  <GrSecure></GrSecure>
                </Icon>
              </IconBackground> 
              Protectie
              </Heading>
              <AboutDescription>
              Securitatea este un element central al serviciilor noastre. Asigurăm protecția completă a datelor și a informațiilor, indiferent de format. Fiecare aspect al administrării tehnice este gestionat cu atenție, astfel încât imobilele și locatarii să beneficieze de un mediu sigur. Sistemele noastre includ măsuri avansate de securitate, asigurând protecția completă a imobilelor gestionate.
              </AboutDescription>
            </AboutUsBullet>
            <AboutUsBullet>
             
              <Heading as='h4' margin='1.2rem 0 0.8rem 0'>
              <IconBackground color='#C2D9FF' size='large'>
                <Icon color={'#7752FE'} hovercolor='#140368' sizes='tiny'>
                  <TiCloudStorageOutline></TiCloudStorageOutline>
                </Icon>
              </IconBackground>
              Acces Facil
              </Heading>
              <AboutDescription>
              Un alt punct forte al serviciilor noastre este accesul facil pe care îl oferim proprietarilor. Prin intermediul sistemelor noastre online, fiecare proprietar are acces securizat la informațiile relevante ale asociației, poate introduce rapid indexurile la apă, și poate consulta toate detaliile financiare, inclusiv cotele de întreținere. Totul este la un singur clic distanță, oferind un nivel de transparență și eficiență de neegalat.
              </AboutDescription>
            </AboutUsBullet>
          </AboutUsList>
        </Grid>
      </Container>
    </StyledAboutSection>
  );
}

export default AboutSection;
