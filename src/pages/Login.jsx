import styled from "styled-components";
import LoginForm from "../features/authentication/LoginForm";
import PartTitle from "../ui/PartTitle";
import Container from "../ui/Container";

const LoginLayout = styled.main`
  margin: 7rem auto 0;
  border-radius: var(--border-radius-sm);
  /* background-color: var(--color-grey-800); */

  @media (min-width: 640px) {
    width: 600px;
  }

  @media (min-width: 768px) {
    width: 700px;
  }
`;

function Login() {
  return (
    <LoginLayout>
      <Container>
        <PartTitle as="h4" className="mb-10">
          Log in to your account
        </PartTitle>

        <LoginForm />
      </Container>
    </LoginLayout>
  );
}

export default Login;
