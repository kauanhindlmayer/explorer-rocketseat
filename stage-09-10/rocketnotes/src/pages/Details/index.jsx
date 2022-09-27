import { Container, Links, Content } from "./styles"

import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { Section } from "../../components/Section"
import { Tag } from "../../components/Tag"
import { ButtonText } from "../../components/ButtonText"

export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>

          <ButtonText title="Delete note" />

          <h1>React Crash Course</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Fuga, accusantium commodi qui cum quo omnis incidunt temporibus 
            deleniti, quibusdam, tempore eius facilis architecto odit eaque 
            nobis aspernatur quod tempora iste?
          </p>

          <Section title="Useful links">
            <Links>
              <li>
                <a href="#">http://www.rocketseat.com.br/</a>
              </li>
              <li>
                <a href="#">http://www.rocketseat.com.br/</a>
              </li>
            </Links>
          </Section>

          <Section title="Tags">
            <Tag title="express" />
            <Tag title="nodejs" />
          </Section>

          <Button title="Back" />

        </Content>
      </main>

    </Container>
  )
}
