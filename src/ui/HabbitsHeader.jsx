import styled from "styled-components";

const StyledHabbitsHeader = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80px;
`;

const HeaderLeft = styled.div`
  min-width: 160px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: left;
`;

const HeaderDates = styled.div`
  min-width: 120px;
  border: 1px solid #e6e6e6;
  border-bottom: none;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  height: 80px;
  display: flex;
  transition: 0s;
`;

const DatesCell = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 60px;
  height: 80px;
  transition: 0s;

  &:last-child {
    width: 118px;
  }

  .month {
    margin: 0.1em 0;
    color: #6f7a80;
    font-family: Nunito, sans-serif;
    letter-spacing: 1px;
  }

  .date {
    margin: 0.1em 0;
    color: #545454;
    font-family: Nunito, sans-serif;
    font-size: 1.2em;
    font-weight: 900;
  }

  .day {
    margin: 0.1em 0;
    color: #6f7a80;
    font-size: 0.8em;
  }
`;

const HeaderRight = styled.div`
  min-width: 160px;
  max-width: 160px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: left;
`;

const StateTitle = styled.p`
  direction: rtl;
  width: 33.33%;
  height: 39px;
  line-height: 39px;
  color: #6f7a80;
  font-size: 0.8em;
  word-wrap: break-word;
`;

function HabbitsHeader() {
  let dates = [];

  for (let i = 0; i < 7; i++) {
    const date = new Date();
    date.setDate(date.getDate() + i);
    dates.push(date);
  }

  return (
    <StyledHabbitsHeader>
      <HeaderLeft>
        <button className="w-[40px] items-center justify-center ml-auto cursor-pointer flex flex-1">
          prev
        </button>
        <p className="w-full items-center justify-center flex flex-1">Habits</p>
      </HeaderLeft>

      <HeaderDates>
        {dates.map((date) => (
          <DatesCell key={date}>
            <p className="month">{date.getMonth()}</p>
            <p className="date">{date.getDate()}</p>
            <p className="day">{date.getDay()}</p>
          </DatesCell>
        ))}
      </HeaderDates>

      <HeaderRight>
        <button className="w-[40px] items-center justify-center mr-auto cursor-pointer flex flex-1">
          next
        </button>
        <div className="w-full items-center justify-around flex flex-1">
          <StateTitle>now</StateTitle>
          <StateTitle>long</StateTitle>
          <StateTitle>total</StateTitle>
        </div>
      </HeaderRight>
    </StyledHabbitsHeader>
  );
}

export default HabbitsHeader;
