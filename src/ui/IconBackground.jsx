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
  width: max-content;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.$color};
  ${(props) => sizes[props.$size]};
`;

function IconBackground({ children, size, color }) {
  return (
    <StyledIconBackground $size={size} $color={color}>
      {children}
    </StyledIconBackground>
  );
}

export default IconBackground;
