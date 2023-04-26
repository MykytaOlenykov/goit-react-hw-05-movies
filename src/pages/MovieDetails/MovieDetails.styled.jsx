import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
`;

export const Thumb = styled.div`
  height: auto;
  max-width: 320px;
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: auto;

  object-fit: cover;
`;

export const PrimaryTitle = styled.h1`
  margin-bottom: 12px;

  font-size: 28px;
  line-height: 1.5;
`;

export const UserScore = styled.p`
  display: inline-block;
  margin-bottom: 8px;

  padding: 4px 8px;

  background-color: ${({ theme }) => theme.colors.primaryBg};
  border: 1px solid ${({ theme }) => theme.colors.secondaryText};
  border-radius: 8px;
`;

export const OverviewTitle = styled.h2`
  margin-bottom: 12px;

  font-size: 24px;
  line-height: 1.5;
`;

export const Overview = styled.p`
  display: inline-block;
  margin-bottom: 8px;

  padding: 4px 8px;
  max-width: 520px;

  background-color: ${({ theme }) => theme.colors.primaryBg};
  border: 1px solid ${({ theme }) => theme.colors.secondaryText};
  border-radius: 8px;
`;

export const GenresTitle = styled.h2`
  margin-bottom: 12px;

  font-size: 20px;
  line-height: 1.5;
`;

export const GenresList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;

  & > li {
    padding: 4px 8px;

    background-color: ${({ theme }) => theme.colors.primaryBg};
    border: 1px solid ${({ theme }) => theme.colors.secondaryText};
    border-radius: 8px;
  }
`;

export const GoBackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 4px 8px;

  font-size: 16px;
  line-height: 1.5;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primaryText};

  background-color: ${({ theme }) => theme.colors.primaryBg};
  border: 1px solid ${({ theme }) => theme.colors.secondaryText};
  border-radius: 8px;

  transition: color
      ${({ theme }) => `${theme.duration} ${theme.timingFunction}`},
    background-color
      ${({ theme }) => `${theme.duration} ${theme.timingFunction}`};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.secondaryBg};
  }
`;
