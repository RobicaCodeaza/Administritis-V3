import styled, { css } from 'styled-components'

const StyledHeading = styled.h1`
    position: relative;
    ${(props) =>
        props.as === 'h1' &&
        css`
            font-size: 9.6rem;
            font-weight: 500;
            color: var(--color-black);
            line-height: 0.95;
            letter-spacing: -2px;
            &:not(:last-child) {
                margin-bottom: 4.8rem;
            }
            @media (max-width: 850px) {
                font-size: 6rem;
            }
        `}
    ${(props) =>
        props.as === 'h2' &&
        css`
            font-size: 4.8rem;
            font-weight: 500;
            line-height: 1.1;
            /* text-align: center; */

            margin: ${(props) => (props.$margin ? props.$margin : 0)};
        `}
${(props) =>
        props.as == 'h3' &&
        css`
            text-transform: uppercase;
            font-size: 2.4rem;
            font-weight: 600;
            letter-spacing: 1px;
            line-height: 1.2;

            &:not(:last-child) {
                margin: ${(props) => (props.$margin ? props.$margin : 0)};
            }
        `}

    ${(props) =>
        props.as == 'h4' &&
        css`
        
            text-transform: uppercase;
            font-size: 1.6rem;
            font-weight: 600;
            letter-spacing: 1px;
            margin: ${(props) =>
                props.$margin ? props.$margin : 0} !important;
        `}

    ${(props) =>
        props.$variation === 'simple' &&
        css`
            color: var(--color-black);
        `}

    ${(props) =>
        props.$variation === 'accent' &&
        css`
            color: var(--color-accent2);
        `}
`

function Heading({ children, as, margin, variation }) {
    return (
        <StyledHeading as={as} $margin={margin} $variation={variation}>
            {children}
        </StyledHeading>
    )
}
StyledHeading.defaultProps = { $variation: 'simple' }

export default Heading
