import styled from "styled-components";
import Container from "../../ui/Container";
import LinkButton from "../../ui/LinkButton";
import LandingFooter from "../../ui/LandingFooter";

const Banner = styled.section`
  position: relative;
  margin: 0 auto;
  width: 100%;
  height: 100vh;
  background: url("/banner.png") center top / cover no-repeat;
  padding: 8rem 0;
`;

const Heading = styled.h1`
  font-size: 4rem;
  text-align: center;
  margin-top: 8rem;
  text-transform: capitalize;
`;

const HowToWork = styled.section`
  /* background-color: var(--color-grey-50); */
  background-image: url(./bghowwork.svg);
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 8em 0;
`;

const HowItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 18rem;
  margin: 1em;
  user-select: none;

  img {
    width: 50%;
  }

  p {
    font-size: 1.3em;
    margin-top: 0.8em;
    text-align: center;
  }
`;
function Landing() {
  let howWorkList = [
    { img: "./choice.svg", text: "Add your habbit" },
    { img: "./building.svg", text: "Do it everyday a bit" },
    { img: "./outerSpace.svg", text: "Make your life better" },
  ];
  return (
    <>
      <Banner>
        <Container className=" text-center">
          <Heading>
            little <span className="text-blue-300">bits</span>,
            <br />
            makes <span className="text-blue-400">habbits</span>.
          </Heading>
          <LinkButton className="mt-20 yelo">Go to app</LinkButton>
        </Container>
      </Banner>

      <HowToWork>
        <Container>
          <div className="flex justify-center items-center flex-wrap">
            {howWorkList.map((item) => (
              <HowItem key={item.text}>
                <img src={item.img} alt="habit" />
                <p>{item.text}</p>
              </HowItem>
            ))}
          </div>
        </Container>
      </HowToWork>
    </>
  );
}

export default Landing;
