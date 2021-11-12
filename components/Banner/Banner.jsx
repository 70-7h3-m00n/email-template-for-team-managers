import { bannerStyles as stls } from './bannerStyles'
import {
  Container,
  Row,
  Column,
  Link,
  Image
} from 'postonents'

const Banner = () => {
  return (
    <Container alignment='center' style={stls.container}>
      <Row>
        <Column style={stls.column}>
          <h1 style={stls.title}>
            Московский <br />
            институт <br />
            профессионального <br />
            образования
          </h1>
          <Link href={'https://ipo.msk.ru/'} style={stls.btn}>
            Перейти на сайт
          </Link>
        </Column>
      </Row>
    </Container>
  )
}

export default Banner
