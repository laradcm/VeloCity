import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <>
      <Container>
        <h2>Welcome to</h2>
        <h1>Vélocity</h1>
        <h4>Already a member? Sign in</h4>
        <Link to="/signin">
          <Button>Sign in</Button>
        </Link>
        <h4>
          Start profiting from a network of thousands of bikes around the city.
          Sign up below
        </h4>
        <Link to="/signup">
          <Button>Sign up</Button>
        </Link>
      </Container>
    </>
  );
}
