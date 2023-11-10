import styled from "styled-components";

const StyledFooter = styled.footer`
  width: 100%;
  padding: 1rem 0;
  background-color: var(--color-brand-300);
  text-align: center;

  p {
    font-size: 1.3rem;
  }
`;

function LandingFooter() {
  return (
    <StyledFooter>
      <p>
        Made With <span className="text-lg">🍕</span> by Coderof.
      </p>
    </StyledFooter>
  );
}

export default LandingFooter;
