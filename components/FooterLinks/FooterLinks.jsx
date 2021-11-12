import { footerLinksStyles as stls } from './footerLinksStyles'
import { Row, Column, Footer, Link, Text } from 'postonents'

const FooterLinks = () => {
  return (
    <Footer style={stls.container}>
      <Row>
        <Column>
          <Link
            href={`https://ipo.msk.ru/professionalnaja-perepodgotovka/`}
            style={stls.link}>
            ПРОФЕССИИ
          </Link>
          <Text style={stls.separator}>|</Text>
          <Link
            href={`https://ipo.msk.ru/povyshenie-kvalifikacii/`}
            style={stls.link}>
            КУРСЫ
          </Link>
          <Text style={stls.separator}>|</Text>
          <Link href={`https://ipo.msk.ru/mba-1/`} style={stls.link}>
            MBA
          </Link>
        </Column>
      </Row>
    </Footer>
  )
}

export default FooterLinks
