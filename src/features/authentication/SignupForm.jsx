import { useState } from "react";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import FormRowVertical from "../../ui/FormRowVertical";
import { Link } from "react-router-dom";
// import SpinnerMini from "../../ui/SpinnerMini";

function LoginForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const { login, isLoading } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();

    if (!email || !password) return;
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRowVertical label="Name">
        <Input
          type="text"
          id="name"
          // This makes this form better for password managers
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          // disabled={isLoading}
        />
      </FormRowVertical>
      <FormRowVertical label="Email address">
        <Input
          type="email"
          id="email"
          // This makes this form better for password managers
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          // disabled={isLoading}
        />
      </FormRowVertical>
      <FormRowVertical label="Password">
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          // disabled={isLoading}
        />
      </FormRowVertical>
      <FormRowVertical>
        <Button
          size="medium"
          //  disabled={isLoading}
        >
          {/* {isLoading ? <SpinnerMini /> : "Login"} */}
          Sign up
        </Button>
      </FormRowVertical>

      <FormRowVertical>
        <Link to="/login" className="text-center">
          Have an account?
        </Link>
      </FormRowVertical>
    </Form>
  );
}

export default LoginForm;
