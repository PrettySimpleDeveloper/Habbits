import styled from "styled-components";
import Heading from "../ui/Heading";
import LoginForm from "../features/authentication/LoginForm";

const LoginLayout = styled.main`
  margin: 7rem auto 0;
  border-radius: var(--border-radius-sm);
  /* background-color: var(--color-grey-800); */
`;

function Login() {
  return (
    <LoginLayout>
      <Heading as="h4" className="mb-10">
        Log in to your account
      </Heading>

      <LoginForm />
    </LoginLayout>
  );
}

export default Login;
