import { useState } from 'react';
import { Container, Form, Background } from './styles';
import { FiMail, FiLock } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const { signIn } = useAuth();

  function handleSignIn() {
    signIn({ email, password });
  }

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
          onClick={e => setEmail(e.target.value)}
        />

        <Input 
          placeholder="Password"
          type="password"
          icon={FiLock}
          onClick={e => setPassword(e.target.value)}
        />

        <Button title="Enter" onClick={handleSignIn} />

        <Link to="/register">New here? Create an account</Link>

      </Form>
      <Background />
    </Container>
  );
}