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
    width: 7rem;
  }
`;

export const H3 = styled.h3`
  margin: 0;
  padding: 0;
  font-weight: normal;
  font-size: 3.2rem;
  color: ${props => props.theme.colors.blue};

  strong {
    font-weight: bold;
  }
`;

export const SavingDetailTitle = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
`;

const editIcon = require('~/assets/icons/edit.svg') as string;
export const InputTitle = styled.input`
  padding: ${props => props.theme.global.gutterSpace / 2}px 0;
  padding-right: ${props => props.theme.global.gutterSpace * 2}px;
  font-family: ${props => props.theme.global.defaultFont};
  font-size: 3rem;
  font-weight: bold;
  border: none;
  background: url(${editIcon}) no-repeat center right;
  background-size: 20px;
  background-color: transparent;
  outline: 0;

  &::placeholder {
    color: ${props => props.theme.colors.grey};
  }

  &.has-error {
    color: ${props => props.theme.colors.red};
  }
`;

export const Title = styled.h1`
  padding: ${props => props.theme.global.gutterSpace / 2}px 0;
  font-size: 3rem;
  font-weight: bold;
`;

export const SubTitle = styled.h2`
  margin-bottom: ${props => props.theme.global.gutterSpace}px;
  font-weight: normal;
  font-size: 1.6rem;
  color: ${props => props.theme.colors.darkGrey};
`;

export const SavingDetailContent = styled.div`
  display: flex;
  flex-flow: column;
  padding: ${props => props.theme.space[6]}rem;
  width: 100%;
  background-color: ${props => props.theme.colors.white};
  border: solid 1px ${props => props.theme.colors.lightGrey};
  border-radius: 0.8rem;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.05);
`;

// FIELDS
export const FieldsRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: ${props => props.theme.global.gutterSpace * 2}px;
`;

export const Field = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: calc(50% - ${props => props.theme.global.gutterSpace / 2}px);
`;

export const SavingsResults = styled.div`
  display: flex;
  flex-flow: column;
  margin: ${props => props.theme.global.gutterSpace * 2}px 0;
  border: solid 1px ${props => props.theme.colors.lightGrey};
  border-radius: 0.5rem;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.05);
`;

export const MonthlyAmount = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${props => props.theme.space[5]}rem;
  width: 100%;
  font-size: 2.4rem;
`;

export const Amount = styled.span`
  font-size: 5rem;
  font-weight: bold;
  color: ${props => props.theme.colors.lightBlue};
`;

export const Description = styled.span`
  padding: ${props => props.theme.space[4]}rem
    ${props => props.theme.space[5]}rem;
  width: 100%;
  font-size: 1.6rem;
  background-color: ${props => props.theme.colors.superlightGrey};
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
`;

export const Error = styled.span`
  padding: ${props => props.theme.global.gutterSpace * 2}px 0 0;
  width: 100%;
  text-align: center;
  color: ${props => props.theme.colors.red};
  font-size: 1.6rem;
`;
