import SignupForm from "../features/authentication/SignupForm";
import PartTitle from "../ui/PartTitle";
import Container from "../ui/Container";
import LoginRegisterLayout from "../ui/LoginRegisterLayout";

function Login() {
  return (
    <LoginRegisterLayout>
      <Container>
        <PartTitle as="h4" className="mb-10">
          Create new Account
        </PartTitle>

        <SignupForm />
      </Container>
    </LoginRegisterLayout>
  );
}

export default Login;
