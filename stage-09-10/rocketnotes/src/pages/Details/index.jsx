import { Container, Links } from "./styles"

import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { Section } from "../../components/Section"
import { Tag } from "../../components/Tag"

export function Details() {
  return (
    <Container>
      <Header />
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
    </Container>
  )
}
