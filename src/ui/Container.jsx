import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 60rem;
  margin: 0 auto;

  @media (min-width: 640px) {
    max-width: 640px;
  }
  @media (min-width: 768px) {
    max-width: 768px;
  }
`;

export default Container;
