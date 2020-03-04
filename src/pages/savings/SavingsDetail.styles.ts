import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BackButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 0.5rem;
  width: 7rem;
  height: 7rem;
  background-color: ${props => props.theme.colors.white};
  border: solid 1px ${props => props.theme.colors.lightGrey};
  border-radius: 50%;
`;

export const Section = styled.section`
  margin: 0 auto;
  padding: ${props => props.theme.space[4]}rem 0;
  width: 750px;
`;

export const SavingDetailHeading = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${props => props.theme.space[4]}rem 0;

  &:after {
    content: '';
  }
`;

export const H3 = styled.h1`
  margin: 0;
  padding: 0;
  font-weight: normal;
  font-size: 3.2rem;
  color: ${props => props.theme.colors.blue};

  strong {
    font-weight: bold;
  }
`;

export const SavingDetailContent = styled.div`
  display: flex;
  flex-flow: column;
  padding: ${props => props.theme.space[6]}rem;
  width: 100%;
  background-color: ${props => props.theme.colors.white};
  border: solid 1px ${props => props.theme.colors.lightGrey};
  border-radius: 0.8rem;
`;

// FIELDS
export const FieldsRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Field = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: calc(50% - ${props => props.theme.global.gutterSpace / 2}px);
`;
