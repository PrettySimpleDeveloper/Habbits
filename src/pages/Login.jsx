import LoginForm from "../features/authentication/LoginForm";
import PartTitle from "../ui/PartTitle";
import Container from "../ui/Container";
import LoginRegisterLayout from "../ui/LoginRegisterLayout";

function Login() {
  return (
    <LoginRegisterLayout>
      <Container>
        <PartTitle as="h4" className="mb-10">
          Log in to your account
        </PartTitle>

        <LoginForm />
      </Container>
    </LoginRegisterLayout>
  );
}

export default Login;
