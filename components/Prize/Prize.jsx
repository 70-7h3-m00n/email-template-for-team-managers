import { prizeStyles as stls } from './prizeStyles'
import { Container, Row, Column, Image, Footer } from 'postonents'
import { toNumberWithSpaces, getBestManagerResult } from '../../helpers'

const Prize = ({ data }) => {
  console.log(data);

  return (
    <>
    <Container maxWidth='100%' style={stls.separator}></Container>
    <Container alignment='center' style={stls.container}>
      <Row>
        <Column style={stls.column}>
          <h2 style={stls.title}>
            За 4 млн. руб. продаж <br />
            до конца года
          </h2>
          <p style={stls.prize}>iPhone 13 Pro</p>
          <p style={stls.subtitle}>Лучший в гонке</p>
          <p style={stls.leader}>{getBestManagerResult(data).name}</p>
          <p style={stls.subtitle}>Сумма собранных продаж</p>
          <p style={stls.p}>
            {toNumberWithSpaces(getBestManagerResult(data).result)} руб.
          </p>
          <p style={stls.subtitle}>Время гонки</p>
          <p style={stls.p}>июль-декабрь</p>
        </Column>
        <Column></Column>
      </Row>
    </Container>
    </>
  )
}

export default Prize
