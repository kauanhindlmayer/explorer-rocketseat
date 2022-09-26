import { Container } from "./styles"

import { Button } from "../../components/Button"

export function Details() {
  return (
    <Container>
      <h1>Hello, World!</h1>
      <Button title="Button 1" loading />
      <Button title="Button 2" />
      <Button title="Button 3" />
    </Container>
  )
}
