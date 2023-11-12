/* eslint-disable react/prop-types */
import styled from "styled-components";
import HabbitItem from "./HabbitItem";

const StyledHabbitsTable = styled.div`
  display: inline-block;
  transition: 0s;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

const HabbitsList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 40px;
  background: #fff;
  border-radius: 4px;
`;

function HabbitsTable({ habbits }) {
  let dates = [];

  for (let i = 0; i < 7; i++) {
    const date = new Date();
    date.setDate(date.getDate() + i);
    dates.push(date);
  }

  return (
    <StyledHabbitsTable>
      <HabbitsList>
        {habbits.map((habbit) => (
          <HabbitItem key={habbit.id} habbit={habbit} dates={dates} />
        ))}
      </HabbitsList>
    </StyledHabbitsTable>
  );
}

export default HabbitsTable;
