import styled from 'styled-components'
import Container from './Container.jsx'
import Grid from './Grid.jsx'
import Heading from './Heading.jsx'
import Row from './Row.jsx'

import useMediaQueryResize, { phone } from '../hooks/useMediaQuery.js'
import { useEffect, useRef } from 'react'

const StyledHowWeWorkSection = styled.div`
    padding: 14rem 0rem 25rem 0;
    transition: all 0.3s ease-in;

    /* background-color: var(--color-white); */
`

const StepList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 4.4rem;
`

const StepItem = styled.li`
    position: relative;
    display: flex;
    gap: 2.4rem;
    position: relative;
    background-color: var(--color-white);
    border-radius: 0.5rem;
    @media (max-width: 600px) {
        padding: 3.2rem 4.4rem;
    }

    &::before {
        content: '';
        display: block;
        position: absolute;
        right: 0;
        bottom: 0;
        height: 1px;
        width: 10rem;
        box-shadow: 0 1rem 2.5rem 0.2rem var(--shadow-lightest);
    }
    &::after {
        content: '';
        display: block;
        position: absolute;
        right: 0;
        bottom: 0;
        height: 50%;
        width: 1px;
        background-color: transparent;
        box-shadow: 1rem 0 2.5rem 0.2rem var(--shadow-lightest);
    }
`
const SpacedStepItem = styled(StepItem)`
    margin-left: 22.4rem;
    @media (max-width: 850px) {
        margin-left: 5rem;
    }
    @media (max-width: 600px) {
        margin-left: 0;
    }
`

const ItemPhoto = styled.img`
    display: block;
    height: 20rem;
    width: 20rem;
    object-fit: cover;
    position: relative;

    @media (max-width: 600px) {
        height: 100%;
        width: 100%;
        left: 0;
        top: 0;
        position: absolute;
        z-index: 0;
    }
`

const ItemOverlay = styled.div`
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 0;
    height: 100%;
    width: 100%;
    background-image: linear-gradient(
        var(--color-primary-light),
        var(--color-primary-light)
    ) !important;
    /* filter: blur(5px); */

    opacity: 0.94;
`
const ItemStep = styled.div`
    color: var(--color-secondary--1);
    font-size: 1.4rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px;
    z-index: 2;
    @media (max-width: 600px) {
        color: var(--color-primary-dark);
    }
`
const ItemTitle = styled.div`
    font-size: 2rem;
    font-weight: 600;
    /* line-height: 1.2; */
    z-index: 2;
    @media (max-width: 600px) {
        color: var(--color-primary-dark);
    }
`
const ItemDescription = styled.p`
    color: var(--color-grey-dark--1);
    font-size: 1.7rem;
    z-index: 2;
    @media (max-width: 600px) {
        color: var(--color-primary-dark);
    }
`
const StyledLine = styled.img`
    position: absolute;
    height: 4rem;
    width: auto;
    left: 0%;
    bottom: -40px;
    object-fit: cover;
`

function HowWeWorkSection() {
    const mediaPhone = useMediaQueryResize(phone)

    // if (mediaPhone) console.log('phone');
    // else console.log('smth bigger');

    const section = useRef(null)

    useEffect(function () {
        function revealSection(entries, observer) {
            const [entry] = entries
            if (!entry.isIntersecting) return

            section.current.classList.remove('section--hidden')

            observer.unobserve(section.current)
        }

        const sectionObserver = new IntersectionObserver(revealSection, {
            root: null,
            threshold: 0.2,
        })

        sectionObserver.observe(section.current)
    }, [])

    return (
        <StyledHowWeWorkSection
            ref={section}
            name="colaborare"
            className="section--hidden"
        >
            <Container>
                <Grid margin="0 0 4.8rem 0" columns="1fr 1fr">
                    <Row $size="tiny">
                        <Heading as="h4" variation="accent">
                            Abordare
                        </Heading>
                        <Heading as="h2">
                            Cum vom comunica
                            <StyledLine
                                src="/assets/underline_curved.webp"
                                alt="Linie curbata pentru accent"
                            ></StyledLine>
                        </Heading>
                    </Row>
                </Grid>
                <StepList>
                    <StepItem>
                        <ItemPhoto
                            src={"/assets/intalnire.webp"}
                            alt="Doua persoane care colaboreaza si vizualizeaza ideile pe o masa"
                        ></ItemPhoto>
                        {mediaPhone && <ItemOverlay></ItemOverlay>}
                        <Row $size="small" $justifycontent="center">
                            <ItemStep>Pasul 1</ItemStep>
                            <ItemTitle>Întâlnirea inițială</ItemTitle>
                            <ItemDescription>
                                Stabilirea obiectivelor prin evaluarea situatiei
                                curente si determinarea serviciilor necesare.
                            </ItemDescription>
                        </Row>
                    </StepItem>
                    <SpacedStepItem>
                        <ItemPhoto
                            src={"/assets/elaborare.webp"}
                            alt="Persoana care semneaza documente"
                        ></ItemPhoto>
                        {mediaPhone && <ItemOverlay></ItemOverlay>}

                        <Row
                            $size="small"
                            $justifycontent="center"
                            alt="Doua persoane care isi strang mainile in urma acceptarii unei colaborari"
                        >
                            <ItemStep>Pasul 2</ItemStep>
                            <ItemTitle>Elaborarea planului</ItemTitle>
                            <ItemDescription>
                                Identificarea prioritatilor, crearea unui plan
                                de servicii si estimarea costurilor.
                            </ItemDescription>
                        </Row>
                    </SpacedStepItem>
                    <StepItem>
                        <ItemPhoto
                            src={"/assets/implementare.webp"}
                            alt="Doua persoane ce incheie un contract"
                        ></ItemPhoto>
                        {mediaPhone && <ItemOverlay></ItemOverlay>}
                        <Row $size="small" $justifycontent="center">
                            <ItemStep>Pasul 3</ItemStep>
                            <ItemTitle>Implementarea planului</ItemTitle>
                            <ItemDescription>
                                Semnarea contractului si inițierea serviciilor,
                                continuând cu permanenta comunicare și
                                raportare.
                            </ItemDescription>
                        </Row>
                    </StepItem>
                    <SpacedStepItem>
                        <ItemPhoto
                            src={"/assets/monitorizare.webp"}
                            alt="Clepsidra ce seminifica monitorizarea continua"
                        ></ItemPhoto>
                        {mediaPhone && <ItemOverlay></ItemOverlay>}
                        <Row $size="small" $justifycontent="center">
                            <ItemStep>Pasul 4</ItemStep>
                            <ItemTitle>Monitorizare</ItemTitle>
                            <ItemDescription>
                                Inspectia periodica a situatiei si reactionarea
                                la feedbackul venit din partea proprietarilor.
                            </ItemDescription>
                        </Row>
                    </SpacedStepItem>
                </StepList>
            </Container>
        </StyledHowWeWorkSection>
    )
}

export default HowWeWorkSection
