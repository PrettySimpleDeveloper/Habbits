import styled from "styled-components";

const StyledHabbitItem = styled.li`
  position: relative;
  border-left: 1px solid #e6e6e6;
  border-right: 1px solid #e6e6e6;
  color: rgba(0, 0, 0, 0.87);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  background: #fff;
  font-size: 14px;
  transition: 0.1s;
`;

const HabbitHandler = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  width: 160px;
  line-height: 40px;
  background-color: #fff;

  /* &:first-child {
    border-top: 1px solid #e6e6e6;
  } */
`;

const ActionsList = styled.div`
  position: relative;
  margin-right: 0.5em;
  opacity: 1;
  transition: 0.1s;
  display: flex;

  span {
    color: #6f7a80;
    font-size: 1.1em;
    cursor: pointer;
    padding: 0.3em;
  }
`;

const HabbitStates = styled.div`
  display: flex;
  height: 40px;
  width: 160px;
  line-height: 40px;
  background-color: #fff;

  /* &:first-child {
    border-top: 1px solid #e6e6e6;
  } */

  p {
    text-align: center;
    color: #6f7a80;
    width: 33.33%;
    height: 40px;
    transition: background 0.2s ease-in-out;
  }
`;

const HabbitDates = styled.div`
  display: flex;
  transition: 0s;
`;

const HabbitCell = styled.div`
  width: 60px;
  height: 40px;
  line-height: 40px;
  vertical-align: center;
  text-align: center;
  display: inline-block;
  cursor: pointer;
  color: #fff;
  background-color: #fff;
  transition: 0s;

  &:last-child {
    width: 118px;
  }
`;

function HabbitItem({ habbit, dates }) {
  const { name, currentStreak, longestStreak, totalCount } = habbit;

  return (
    <StyledHabbitItem>
      <HabbitHandler>
        <ActionsList>
          <span>d</span>
          <span>e</span>
          <span>c</span>
        </ActionsList>
        {name}
      </HabbitHandler>

      <HabbitDates>
        {dates.map((date) => (
          <HabbitCell />
        ))}
      </HabbitDates>

      <HabbitStates>
        <p>{currentStreak}</p>
        <p>{longestStreak}</p>
        <p>{totalCount}</p>
      </HabbitStates>
    </StyledHabbitItem>
  );
}

export default HabbitItem;
