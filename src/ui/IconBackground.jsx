import styled, { css } from 'styled-components';

const sizes = {
  small: css`
    padding: 0.25rem;
  `,
  medium: css`
    padding: 0.5rem;
  `,
  large: css`
    padding: 1rem;
  `,
};

const StyledIconBackground = styled.div`
  width:${(props)=>props.contentSize};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.$color};
  ${(props) => sizes[props.$size]};
`;

function IconBackground({ children, size, color,contentSize }) {
  if(contentSize==='max-content')
  return (
    <StyledIconBackground $size={size} $color={color} contentSize = 'max-content'>
      {children}
    </StyledIconBackground>

  )
  else  return (
    <StyledIconBackground $size={size} $color={color} contentSize = {contentSize}>
      {children}
    </StyledIconBackground>

  ) ;
}
IconBackground.defaultProps = {contentSize:'max-content'}

export default IconBackground;
