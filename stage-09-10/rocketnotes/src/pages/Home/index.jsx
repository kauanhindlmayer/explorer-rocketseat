import { FiPlus } from 'react-icons/fi';
import { Container, Brand, Menu, Search, Content, NewNote } from './styles';

import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';

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

      </Content>

      <NewNote>
        <FiPlus />
        Create Note
      </NewNote>

    </Container>
  );
}