import { RiShutDownLine } from 'react-icons/ri';
import { Container, Profile, Logout } from "./styles";

export function Header() {
  return (
    <Container>
      <Profile to="/profile">
        <img 
          src="http://github.com/kauanhindlmayer.png"
          alt="user photo"
        />

        <div>
          <span>Welcome</span>
          <strong>Kauan Hindlmayer</strong>
        </div>        

      </Profile>

      <Logout>
        <RiShutDownLine />
      </Logout>
    </Container>
  );
}