// import Header from '../ui/Header';
import styled from 'styled-components'
import HeroSectionHome from '../ui/HeroSectionHome.jsx'
import AboutSection from '../ui/AboutSection.jsx'
import FeaturesSection from '../ui/FeaturesSection.jsx'
import HowWeWorkSection from '../ui/HowWeWorkSection.jsx'
import ContactSection from '../ui/ContactSection.jsx'
import Footer from '../ui/Footer.jsx'
import Form from '@/ui/FormTrigger.jsx'

const StyledHome = styled.div`
    background-color: var(--color-primary-light);
`

function Home() {
    return (
        <StyledHome>
            <HeroSectionHome></HeroSectionHome>
            <AboutSection></AboutSection>
            <FeaturesSection></FeaturesSection>
            <HowWeWorkSection></HowWeWorkSection>
            <ContactSection></ContactSection>
            <Footer></Footer>
        </StyledHome>
    )
}

export default Home
