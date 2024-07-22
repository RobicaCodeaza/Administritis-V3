import { BiSolidDownload } from 'react-icons/bi'

import Heading from '@/ui/Heading.jsx'
import Row from '@/ui/Row.jsx'
import styled from 'styled-components'
import Icon from '@/ui/Icon.jsx'
const StyledDocumente = styled.div`
    padding: 14rem 6rem;
    border-top: 2px solid var(--color-primary-light--1);
    background-color: var(--color-white);
    min-height: 90dvh;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100dvh;
    @media (max-width: 600px) {
        padding: 14rem 2rem;
    }
`

const StyledLine = styled.img`
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    bottom: -20px;
    object-fit: cover;
`

const DownloadLink = styled.a`
    &:link,
    &:visited {
        display: flex;
        align-items: center;
        gap: 0.8rem;
        transition: all 0.3s;
        border-bottom: 1px solid var(--color-accent1-light);
        width: 100%;
        padding: 1rem 2rem;
    }
    &:hover,
    &:active {
        transform: translateY(-0.1rem);
    }
`

function Documente() {
    return (
        <StyledDocumente>
            <Row $type="horizontal" $justifycontent="center">
                <Heading as="h3">
                    Documente Utile
                    <StyledLine
                        alt="Linie dreapta pentru accent"
                        src="/assets/underline_straight.webp"
                    ></StyledLine>
                </Heading>
            </Row>
            <Row
                $type="horizontal"
                $justifycontent="center"
                $margin="3.2rem 0 4rem 0"
            >
                <p>
                    Mai jos puteti gasi documente ce trebuiesc a fi utilizate in
                    cadrul asociatiei de proprietar. Acestea reprezinta o serie
                    de modele, ce respecta rigorile legale.
                </p>
            </Row>
            <Row $align="start" $size="medium">
                <DownloadLink href="/assets/hotarare_adunare.docx" download>
                    <Icon color={'#F75A47'} hovercolor="#7c2d24" sizes="small">
                        <BiSolidDownload></BiSolidDownload>
                    </Icon>
                    Hotarare Adunare Generală
                </DownloadLink>
                <DownloadLink href="/assets/cheltuieli_persoana.docx" download>
                    <Icon color={'#F75A47'} hovercolor="#7c2d24" sizes="small">
                        <BiSolidDownload></BiSolidDownload>
                    </Icon>
                    Cerere introducere plată cheltuieli persoană
                </DownloadLink>
                <DownloadLink href="/assets/scutire_plata.docx" download>
                    <Icon color={'#F75A47'} hovercolor="#7c2d24" sizes="small">
                        <BiSolidDownload></BiSolidDownload>
                    </Icon>
                    Cerere scutire plată cheltuieli persoană
                </DownloadLink>
                <DownloadLink href="/assets/hotarare_adunare.docx" download>
                    <Icon color={'#F75A47'} hovercolor="#7c2d24" sizes="small">
                        <BiSolidDownload></BiSolidDownload>
                    </Icon>
                    Raport de necesitate
                </DownloadLink>
                <DownloadLink href="/assets/restituire_fond.docx" download>
                    <Icon color={'#F75A47'} hovercolor="#7c2d24" sizes="small">
                        <BiSolidDownload></BiSolidDownload>
                    </Icon>
                    Cerere de restituire a fondului de rulment
                </DownloadLink>
                <DownloadLink href="/assets/convocator_adunare.docx" download>
                    <Icon color={'#F75A47'} hovercolor="#7c2d24" sizes="small">
                        <BiSolidDownload></BiSolidDownload>
                    </Icon>
                    Tabel convocator Adunare Generală
                </DownloadLink>
                <DownloadLink href="/assets/somatie_plata.docx" download>
                    <Icon color={'#F75A47'} hovercolor="#7c2d24" sizes="small">
                        <BiSolidDownload></BiSolidDownload>
                    </Icon>
                    Somatie de plata
                </DownloadLink>
            </Row>
        </StyledDocumente>
    )
}

export default Documente
