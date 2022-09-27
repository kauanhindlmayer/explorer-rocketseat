import { Container, Form, Background } from './styles';
import { FiMail, FiLock } from 'react-icons/fi';

import { Link } from 'react-router-dom';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export function SignIn() {
  return (
    <Container>
      <Form>
        <h1>Rocket Notes</h1>
        <p>Application to save and manage your useful links.</p>

        <h2>Login</h2>

        <Input 
          placeholder="E-mail"
          type="text"
          icon={FiMail}
        />

        <Input 
          placeholder="Password"
          type="password"
          icon={FiLock}
        />

        <Button title="Enter" />

        <Link to="/register">New here? Create an account</Link>

      </Form>
      <Background />
    </Container>
  );
}