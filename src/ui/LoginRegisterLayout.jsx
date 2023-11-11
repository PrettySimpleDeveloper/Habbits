import styled from "styled-components";

const LoginRegisterLayout = styled.main`
  margin: 5rem auto 0;
  padding-bottom: 5rem;

  border-radius: var(--border-radius-sm);
  /* background-color: var(--color-grey-800); */

  @media (min-width: 640px) {
    width: 600px;
  }

  @media (min-width: 768px) {
    width: 700px;
  }
`;

export default LoginRegisterLayout;
