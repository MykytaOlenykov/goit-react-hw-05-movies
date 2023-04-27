import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  row-gap: 24px;
  column-gap: 20px;
  padding: 0 8px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: calc((1280px - 80px - 16px) / 5);

  background-color: ${({ theme }) => theme.colors.primaryBg};
  border-radius: 4px;
  box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
    0px 2px 2px rgba(0, 0, 0, 0.12);

  overflow: hidden;
`;

export const Thumb = styled.div`
  width: 100%;
  height: 320px;
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;

  object-fit: cover;
  object-position: center;
`;

export const TextBox = styled.div`
  flex-grow: 1;
  padding: 8px 12px;
`;

export const PersonName = styled.h3`
  font-size: 20px;
  line-height: 1.5;
`;

export const Character = styled.h3`
  font-size: 16px;
  line-height: 1.5;
`;
