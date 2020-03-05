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

export const SavingsHeading = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${props => props.theme.space[4]}rem 0;
  width: 100%;

  &:after {
    content: '';
    width: 7rem;
  }
`;

export const H1 = styled.h1`
  margin: 0;
  padding: 0;
  font-weight: bold;
  font-size: 3.2rem;
  color: ${props => props.theme.colors.blue};
`;

export const ListOfGoals = styled.ul`
  margin: 0;
  padding: 0 0 ${props => props.theme.space[3]}rem 0;
  width: 100%;
  list-style: none;
`;

export const ItemGoal = styled.li`
  margin: ${props => props.theme.space[3]}rem 0;
  background-color: ${props => props.theme.colors.white};
  border: solid 1px ${props => props.theme.colors.lightGrey};
  border-radius: 0.8rem;
`;

export const LinkGoal = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${props => props.theme.space[4]}rem
    ${props => props.theme.space[6]}rem;
  text-decoration: none;
  color: ${props => props.theme.colors.almostBlack};
  font-weight: bold;
  font-size: 2rem;
  border-radius: 0.8rem;
  transition: box-shadow 100ms linear;

  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
`;

export const ItemGoalActions = styled.div`
  display: flex;
  align-items: center;
`;

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: ${props => props.theme.global.gutterSpace}px;
  width: 3.6rem;
  height: 3.6rem;
  background-color: ${props => props.theme.colors.lightGrey};
  border-radius: 50%;
  border: solid 1px ${props => props.theme.colors.grey};
  transition: box-shadow 100ms linear;
  outline: 0;

  &:hover,
  &:focus {
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.5);
  }
`;
