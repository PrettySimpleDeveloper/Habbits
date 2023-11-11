import styled from "styled-components";

const StyledFooter = styled.div`
  display: inline-block;
  background-color: #fff;
  transition: 0s;
`;

const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const AddHabit = styled.button`
  color: #545454;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 160px;
  height: 40px;
  line-height: 40px;
  transition: 0s;
  border: 1px solid transparent;

  &:hover {
    border: 1px solid var(--color-brand-400);
    color: var(--color-brand-400);
    background-color: var(--color-brand-50);
  }
`;

const FooterCounts = styled.div`
  min-width: 120px;
  border: 1px solid #e6e6e6;
  border-top: none;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  height: 40px;
  display: flex;
  transition: 0s;
`;

const CountCell = styled.div`
  display: inline-block;
  width: 60px;
  height: 40px;
  line-height: 45px;
  vertical-align: center;
  text-align: center;
  font-size: 14px;
  color: #6f7a80;

  &:last-child {
    width: 118px;
  }
`;

const StateSlider = styled.div`
  width: 160px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  input {
    -webkit-appearance: none;
    width: 120px;
    height: 28px;
    border: 0;
    appearance: auto;
    cursor: default;
    color: -internal-light-dark(rgb(16, 16, 16), rgb(255, 255, 255));
    padding: initial;
    border: initial;
    margin: 2px;
  }
`;

function HabbitsFooter() {
  let dates = [];

  for (let i = 0; i < 7; i++) {
    const date = new Date();
    date.setDate(date.getDate() + i);
    dates.push(date);
  }

  return (
    <StyledFooter>
      <FooterContainer>
        <AddHabit>Add Habit</AddHabit>
        <FooterCounts>
          {dates.map((date) => (
            <CountCell key={date}>{date.getDay()}</CountCell>
          ))}
        </FooterCounts>

        <StateSlider>
          <input max="3" min="1" type="range" value="1" />
        </StateSlider>
      </FooterContainer>
    </StyledFooter>
  );
}

export default HabbitsFooter;
