import styled from "styled-components";
import Container from "../../ui/Container";

const Banner = styled.section`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  height: 100vh;
  padding-top: 3.4rem;
  background: url("/bg2.png") top center / cover;
`;

const Heading = styled.h1`
  font-size: 4rem;
  text-align: center;
`;

function Landing() {
  return (
    <div>
      <Banner>
        <Container>
          <Heading>The habit tracker you get into the habit of using</Heading>
        </Container>
      </Banner>
    </div>
  );
}

export default Landing;
