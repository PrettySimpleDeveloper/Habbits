import styled from "styled-components";
import Habbits from "../../ui/Habbits";
import HabbitsHeader from "../../ui/HabbitsHeader";
import HabbitsFooter from "../../ui/HabbitsFooter";

const StyledLayout = styled.main`
  margin-top: 5rem;
`;

function ApplicationLayout() {
  return (
    <StyledLayout>
      <Habbits>
        <HabbitsHeader />

        <HabbitsFooter />
      </Habbits>
    </StyledLayout>
  );
}

export default ApplicationLayout;
