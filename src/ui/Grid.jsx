import styled, { css } from "styled-components";

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.$columns};
  /* grid-auto-flow: row auto; */
  gap: ${(props) => props.$gap};
  align-items: center;
  transition: none;
  margin: ${(props) => (props.$margin ? props.$margin : 0)};
  ${(props) => (props.$media ? props.$media : "")}

  @media (max-width:600px) {
    display: grid;
    grid-template-columns: 1fr;
    gap: ${(props) => props.$gap.replace("0", "")};
  }
`;

function Grid({ children, columns, margin, gap, media }) {
  return (
    <StyledGrid $columns={columns} $margin={margin} $gap={gap} $media={media}>
      {children}
    </StyledGrid>
  );
}

Grid.defaultProps = { gap: "5.6rem" };

export default Grid;
