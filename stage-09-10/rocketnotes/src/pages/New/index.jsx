import { Container, Form } from './styles';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Textarea } from '../../components/Textarea';
import { NoteItem } from '../../components/NoteItem';
import { Section } from '../../components/Section';
import { Button } from '../../components/Button';

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

          <Section title="Useful links">
            <NoteItem value="https://rocketseat.com.br" />
            <NoteItem isNew placeholder="New link" />
          </Section>

          <Section title="Tags">
            <div className="tags">
              <NoteItem value="react" />
              <NoteItem isNew placeholder="New tag" />
            </div>
          </Section>

          <Button title="Save" />
        </Form>
      </main>
    </Container>
  );
}