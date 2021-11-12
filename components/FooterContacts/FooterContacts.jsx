import { footerContactsStyles as stls } from './footerContactsStyles'
import { Row, Column, Footer} from 'postonents'

const FooterContacts = () => {
  return (
    <Footer style={stls.container}>
      <Row>
        <Column>
          <p style={stls.titleFirst}>КОНТАКТЫ:</p>
          <p style={stls.p}>+7 (495) 120-79-01</p>
          <p style={stls.p}>+7 (800) 555-12-94</p>
          <p style={stls.p}>Москва, Дербеневская набережная 11</p>
          <p style={stls.title}>ВРЕМЯ РАБОТЫ:</p>
          <p style={stls.p}><span style={stls.dimmer}>Понедельник - Пятница:</span> с 09:00 до 18:00</p>
        </Column>
        <Column></Column>
      </Row>
    </Footer>
  )
}

export default FooterContacts
