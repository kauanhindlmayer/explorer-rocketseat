import { Container, Form } from './styles';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Textarea } from '../../components/Textarea';


export function New() {
  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Create note</h1>
            <a href="/">back</a>
          </header>

          <Input placeholder="Title" />

          <Textarea placeholder="Comments" />
        </Form>
      </main>
    </Container>
  );
}