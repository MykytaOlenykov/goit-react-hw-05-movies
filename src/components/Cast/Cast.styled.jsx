import styled from 'styled-components';

export const HideTitle = styled.h2`
  position: absolute;
  white-space: nowrap;
  width: 1px;
  height: 1px;
  overflow: hidden;
  border: 0;
  padding: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  margin: -1px;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  row-gap: 24px;
  column-gap: 20px;
  padding: 0 8px;
`;
