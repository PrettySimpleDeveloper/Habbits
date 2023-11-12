import styled from "styled-components";
import Habbits from "./Habbits";
import HabbitsHeader from "./HabbitsHeader";
import HabbitsFooter from "./HabbitsFooter";
import HabbitsTable from "./HabbitsTable";
import habits from "./data";

const StyledLayout = styled.main`
  margin-top: 5rem;
`;

function ApplicationLayout() {
  const habbits = habits;

  console.log(habbits);
  return (
    <StyledLayout>
      <Habbits>
        <HabbitsHeader />

        <HabbitsTable habbits={habbits} />

        <HabbitsFooter />
      </Habbits>
    </StyledLayout>
  );
}

export default ApplicationLayout;
