import { Container, Profile } from "./styles";

export function Header() {
  return (
    <Container>
      <Profile>
        <img 
          src="http://github.com/kauanhindlmayer.png"
          alt="user photo"
        />

        <div>
          <span>Welcome</span>
          <strong>Kauan Hindlmayer</strong>
        </div>        

      </Profile>
    </Container>
  );
}