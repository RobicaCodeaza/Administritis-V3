import styled, { css } from 'styled-components'

const sizes = {
    tiny: css`
        gap: 0.4rem;
    `,
    small: css`
        gap: 0.8rem;
    `,
    medium: css`
        gap: 1.6rem;
    `,
    big: css`
        gap: 3.2rem;
    `,
    huge: css`
        gap: 4.4rem;
    `,
}

const Row = styled.div`
    display: flex;
    margin: ${(props) => props.$margin};
    ${(props) =>
        props.$justifycontent !== '' &&
        css`
            justify-content: ${(props) => props.$justifycontent};
        `}
    ${(props) =>
        props.$justify !== '' &&
        css`
            justify-items: ${(props) => props.$justify};
        `}
        ${(props) =>
        props.$align !== '' &&
        css`
            /* flex-wrap: nowrap; */
            align-items: ${(props) => props.$align};
        `}
        ${(props) =>
        props.$aligncontent !== '' &&
        css`
            align-content: ${(props) => props.$aligncontent};
        `}
        ${(props) => sizes[props.$size]};
    ${(props) =>
        props.$type === 'horizontal' &&
        css`
            align-items: center;
        `}
    ${(props) =>
        props.$type === 'vertical' &&
        css`
            flex-direction: column;
        `};
`
Row.defaultProps = {
    $type: 'vertical',
    $size: 'medium',
    $justify: '',
    $align: '',
    $justifycontent: '',
    $aligncontent: '',
}

export default Row
