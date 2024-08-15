import styled from 'styled-components';
import { useState } from 'react';
import { CiCircleCheck } from 'react-icons/ci';
import Heading from '@/ui/Heading.jsx';
import Row from '@/ui/Row.jsx';
import Icon from '@/ui/Icon.jsx';
import { RiCheckboxMultipleFill } from 'react-icons/ri';
import { IoDocumentTextOutline } from 'react-icons/io5';
import { GiReceiveMoney } from 'react-icons/gi';
import { VscTools } from 'react-icons/vsc';

const StyledServicii = styled.div`
  padding: 14rem 0;
  border-top: 2px solid var(--color-primary-light--1);
  background-color: var(--color-white);
  min-height: 100vh;
`;
const Accordion = styled.div`
  margin-top: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 3.2rem;
  /* align-content: center; */
  padding: 2rem 8rem;
  max-height: 100%;

  @media (max-width: 850px) {
    padding: 2rem 2rem;
  }
`;

const AccordionMenu = styled.ul`
  display: flex;
  list-style: none;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
const AccordionItem = styled.li`
  padding: 1rem 2rem;
  background-color: var(--color-white);
  border: 1px solid var(--color-accent1);
  cursor: pointer;
  transition: all 0.3s;
  text-transform: uppercase;
  font-size: 1.4rem;
  width: auto;
  text-align: center;
  display: flex;
  align-items: center;
  gap: 1.2rem;

  @media (max-width: 850px) {
    padding: 1rem;
  }

  &.active {
    color: var(--color-white);
    background-color: var(--color-accent1);

    svg {
      color: #e8e6f3;
    }
  }
`;

const AccordionContentList = styled.ul`
  padding: 1rem 2rem;
  border: 1px solid var(--color-primary-light--1);
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  transition: all 0.3s;
  width: 100%;
`;
const AccordionContentItem = styled.li`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  /* min-width: 35rem; */
  width: 100%;
  padding: 0.5rem 1rem;
  letter-spacing: 1px;
`;

const contentAccordion = {
  content1: [
    'Acces online pentru proprietari',
    'Intocmirea listelor de plata in conformitate cu prevederile legale',
    'Realizarea Registrelor de Evidenta: Fond Rulment si Fond Reparatii',
    'Intocmire Registre Jurnal, Banca si Casa',
    'Formarea si Depunerea declaratiilor fiscale - remuneratia asociatiei la Administratia financiara',
    'Intocmirea statelor de plata pentru remuneratia Asociatiei',
    'Realizarea ordinelor de plata',
    'Incasarea cotelor de intretinere  - fiecare unitate locativa',
    'Plata facturilor catre furnizorii de utilitati & prestatorii de servicii',
    'Plata personalului angajat',
    'Preluarea sesizarilor venite din partea proprietarilor',
    'Inspectarea periodica a proprietatii comune in vederea fixarii avariilor/defectelor',
    'Supravegherea lucrarilor de intretinere/reparatie',
    'Controlul indeplinirii obligatiilor ale personalului angajat: curatenie, evacuare de gunoi menajer + alte activitati',
    'Comunicarea si instiintareaa comitetului executiv cu privire la masurile necesare pentru efectuarea lucrarilor de intretinere/reparatie.',
    'Verificarea facturarii corecte in functie de furnizori',
    'Achizitia materialelor necesare intretinerii si curateniei imobilului',
  ],
  content2: [
    'Acces online pentru proprietari',
    'Intocmirea listelor de plata in conformitate cu prevederile legale',
    'Realizarea Registrelor de Evidenta: Fond Rulment si Fond Reparatii',
    'Intocmire Registre Jurnal, Banca si Casa',
    'Formarea si Depunerea declaratiilor fiscale - remuneratia asociatiei la Administratia financiara',
    'Intocmirea statelor de plata pentru remuneratia Asociatiei',
    'Realizarea ordinelor de plata',
    'Incasarea cotelor de intretinere  - fiecare unitate locativa',
    'Plata facturilor catre furnizorii de utilitati & prestatorii de servicii',
    'Plata personalului angajat',
  ],
  content3: [
    'Preluarea sesizarilor venite din partea proprietarilor',
    'Inspectarea periodica a proprietatii comune in vederea fixarii avariilor/defectelor',
    'Supravegherea lucrarilor de intretinere/reparatie',
    'Controlul indeplinirii obligatiilor ale personalului angajat: curatenie, evacuare de gunoi menajer + alte activitati',
    'Comunicarea si instiintareaa comitetului executiv cu privire la masurile necesare pentru efectuarea lucrarilor de intretinere/reparatie.',
    'Verificarea facturarii corecte in functie de furnizori',
    'Achizitia materialelor necesare intretinerii si curateniei imobilului',
  ],
};

const StyledLine = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  bottom: -20px;
  object-fit: cover;
`;
function Servicii() {
  const [currentContent, setCurrentContent] = useState(1);

  const content = contentAccordion[`content${currentContent}`];

  return (
    <StyledServicii>
      <Row $type='horizontal' $justifycontent='center'>
        <Heading as='h1'>
          Servicii
          <StyledLine
            alt='Linie dreapta pentru accent'
            src='/assets/underline_straight.webp'
          ></StyledLine>
        </Heading>
      </Row>
      <Accordion>
        <AccordionMenu>
          <AccordionItem
            content='1'
            className={currentContent === 1 ? 'active' : ''}
            onClick={() => setCurrentContent(1)}
          >
            <Icon color={'#7752FE'} hovercolor='#140368' sizes='tiny'>
              <RiCheckboxMultipleFill></RiCheckboxMultipleFill>
            </Icon>
            Administrare Completa
          </AccordionItem>
          <AccordionItem
            content='2'
            className={currentContent === 2 ? 'active' : ''}
            onClick={() => setCurrentContent(2)}
          >
            <Icon color={'#7752FE'} hovercolor='#140368' sizes='tiny'>
              <IoDocumentTextOutline></IoDocumentTextOutline>
            </Icon>
            Contabilitate +
            <Icon color={'#7752FE'} hovercolor='#140368' sizes='tiny'>
              <GiReceiveMoney></GiReceiveMoney>
            </Icon>
            Casierie
          </AccordionItem>

          <AccordionItem
            content='3'
            className={currentContent === 3 ? 'active' : ''}
            onClick={() => setCurrentContent(3)}
          >
            <Icon color={'#7752FE'} hovercolor='#140368' sizes='tiny'>
              <VscTools></VscTools>
            </Icon>
            Administrare tehnica
          </AccordionItem>
        </AccordionMenu>
        <AccordionContentList>
          {content.map((el) => (
            <AccordionContentItem key={el}>
              <Icon color='#7c993f' sizes='tiny'>
                <CiCircleCheck></CiCircleCheck>
              </Icon>
              {el}
            </AccordionContentItem>
          ))}
        </AccordionContentList>
      </Accordion>
    </StyledServicii>
  );
}

export default Servicii;
