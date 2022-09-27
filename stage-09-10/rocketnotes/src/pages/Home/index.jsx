import { FiPlus } from 'react-icons/fi';
import { Container, Brand, Menu, Search, Content, NewNote } from './styles';

import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Note } from '../../components/Note';
import { Input } from '../../components/Input';
import { Section } from '../../components/Section';

export function Home() {
  return (
    <Container>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>

      <Header />

      <Menu>
        <li>
          <ButtonText title="All" isActive />
        </li>
        <li>
          <ButtonText title="ReactJS" />
        </li>
        <li>
          <ButtonText title="NodeJS" />
        </li>
      </Menu>

      <Search>
        <Input placeholder="Search by title" />
      </Search>

      <Content>
        <Section title="My notes">
          <Note data={{
            title: 'React Modal', 
            tags: [
              {id: '1', name: 'react'},
              {id: '2', name: 'components'}
            ]
          }} />
        </Section>
      </Content>

      <NewNote to="/new">
        <FiPlus />
        Create Note
      </NewNote>

    </Container>
  );
}