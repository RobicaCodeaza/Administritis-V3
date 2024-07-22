import styled from 'styled-components'
import useMediaQueryResize, { phone, tabPort } from '../hooks/useMediaQuery.js'
import FormTrigger from './FormTrigger.jsx'

const StyledContactSection = styled.div`
    padding: 14rem 0;
    background-color: var(--color-white);
    position: relative;
`

const ContactCard = styled.div`
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 70rem;
    height: 25rem;
    border-radius: 0.5rem;
    overflow: hidden;
    background-size: cover;
    background-image: url('/assets/pattern2.webp');
    box-shadow: 1rem 1rem 2rem 0 var(--shadow-lightest);

    @media (max-width: 850px) {
        width: 60rem;
    }

    @media (max-width: 600px) {
        max-width: 40rem;
        height: 25rem;
    }
    &::after {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-image: linear-gradient(
            var(--color-accent2),
            var(--color-accent1)
        );
        opacity: 0.8;
    }
`

const ContactDetails = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    z-index: 2;
    width: 100%;
    display: flex;

    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 4rem 8rem;

    @media (max-width: 600px) {
        padding: 0rem 4rem;
    }
`

const ContactTitle = styled.p`
    font-size: 2.4rem;
    font-weight: 600;
    color: var(--color-white);
`

const ContactDescription = styled.p`
    display: block;
    color: var(--color-white);
    font-size: 1.6rem;
    font-weight: 400;
    letter-spacing: 1px;
    margin: 1.2rem 0 2.4rem 0;
`

const ContactButton = styled.span`
    font-size: 1.5rem;
    font-weight: 500;
    padding: 1rem 4rem;
    border: none;
    border-radius: 0.25rem;
    background-color: var(--color-accent2);
    color: var(--color-primary-light);
    border: 1px solid var(--color-primary-light);
    transition: all 0.3s;
    cursor: pointer;
    &:hover {
        background-color: var(--color-accent1);
    }
`

function ContactSection() {
    const mediaPhone = useMediaQueryResize(phone)

    return (
        <StyledContactSection>
            <ContactCard>
                <ContactDetails>
                    <ContactTitle>
                        Afla mai multe despre oferta noastra
                    </ContactTitle>
                    <ContactDescription>
                        Ne poti contacta pentru a discuta despre nevoile
                        dumneavoastra.
                    </ContactDescription>
                    <FormTrigger>
                        <ContactButton>Contact</ContactButton>
                    </FormTrigger>
                </ContactDetails>
            </ContactCard>
        </StyledContactSection>
    )
}

export default ContactSection
