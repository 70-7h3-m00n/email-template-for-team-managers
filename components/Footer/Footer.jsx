import { footerStyles as stls } from './footerStyles'
import {
  Container,
  Row,
  Column,
  Footer as FooterPostonents
} from 'postonents'

const Footer = () => {
  return (
    <FooterPostonents style={stls.container}>
      <Container alignment='center'>
        <Row>
          <Column>
            &copy; {new Date().getFullYear()} МИПО
          </Column>
        </Row>
      </Container>
    </FooterPostonents>
  )
}

export default Footer
