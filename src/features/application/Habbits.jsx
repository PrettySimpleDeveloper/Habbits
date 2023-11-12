import styled from "styled-components";

const StyledHabbits = styled.div`
  margin-top: 2em;
  padding-bottom: 2em;
  width: 100%;
`;

const HabbitsApp = styled.div`
  margin: 0 auto;
  height: 100%;
  min-width: 490px;
`;

const HabbitsContent = styled.div`
  margin: 0 10px;
`;

const HabbitsLayout = styled.div`
  position: relative;
  margin: 0 auto;
  text-align: center;
`;

function Habbits({ children }) {
  return (
    <StyledHabbits>
      <HabbitsApp>
        <HabbitsContent>
          <HabbitsLayout>
            <div className="inline-block w-full">{children}</div>
          </HabbitsLayout>
        </HabbitsContent>
      </HabbitsApp>
    </StyledHabbits>
  );
}

export default Habbits;
