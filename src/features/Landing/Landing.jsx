import styled from "styled-components";
import Container from "../../ui/Container";
import LinkButton from "../../ui/LinkButton";

const Banner = styled.section`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  height: 100vh;
  padding-top: 3.4rem;
  background: url("/banner.png") top center / cover;
`;

const Heading = styled.h1`
  font-size: 4rem;
  text-align: center;
  margin-top: 3rem;
`;

function Landing() {
  return (
    <>
      <Banner>
        <Container className=" text-center">
          <Heading>The habit tracker you get into the habit of using</Heading>
          <LinkButton size="medium" type="primary" className="mt-5 yelo">
            Got to app
          </LinkButton>
        </Container>
      </Banner>
    </>
  );
}

export default Landing;
