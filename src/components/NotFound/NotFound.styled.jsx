import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
`;

export const ErrorMessage = styled.p`
  font-size: 48px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.secondaryText};
`;

export const ErrorCode = styled.p`
  font-size: 60px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.secondaryText};
`;
