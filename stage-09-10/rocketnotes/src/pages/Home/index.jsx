import { useState, useEffect } from 'react';  
import { FiPlus } from 'react-icons/fi';
import { Container, Brand, Menu, Search, Content, NewNote } from './styles';

import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Note } from '../../components/Note';
import { Input } from '../../components/Input';
import { Section } from '../../components/Section';
import { api } from '../../services/api';

export function Home() {
  const [tags, setTags] = useState([]);
  const [tagsSelected, setTagsSelected] = useState([]);

  function handleTagSelected(tagName) {
    const alreadySelected = tagsSelected.includes(tagName);

    if (alreadySelected) {
      const filteredTags = tagsSelected.filter(tag => tag !== tagName);
      setTagsSelected(filteredTags);
    } else {
      setTagsSelected(prevState => [...prevState, tagName])
    }
  }

  useEffect(() => {
    async function fetchTags() {
      const response = await api.get("/tags");
      setTags(response.data);
    }

    fetchTags();
  }, []);

  return (
    <Container>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>

      <Header />

      <Menu>
        <li>
          <ButtonText
            title="All"
            onClick={() => handleTagSelected("all")}
            isActive={tagsSelected.length === 0}
          />
        </li>
        {
          tags && tags.map(tag => (
            <li key={String(tag.id)}>
              <ButtonText 
                title={tag.name}  
                onClick={() => handleTagSelected(tag.name)}
                isActive={tagsSelected.includes(tag.name)}
              />
            </li>
          ))
        }

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