import styled from "styled-components";
import SignupForm from "../features/authentication/SignupForm";
import PartTitle from "../ui/PartTitle";
import Container from "../ui/Container";

const RegisterLayout = styled.main`
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

function Login() {
  return (
    <RegisterLayout>
      <Container>
        <PartTitle as="h4" className="mb-10">
          Create new Account
        </PartTitle>

        <SignupForm />
      </Container>
    </RegisterLayout>
  );
}

export default Login;
