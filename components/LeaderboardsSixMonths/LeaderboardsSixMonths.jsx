import { leaderboardsSixMonthsStyles as stls } from './leaderboardsSixMonthsStyles'
import { Container, Row, Column } from 'postonents'
import { getBestManagerResult } from '../../helpers'

const LeaderboardsSixMonths = ({ data }) => {
  const bestResult = getBestManagerResult(data).result
  const bestResultOnePercent = bestResult / 100

  return (
    <Container alignment='center' style={stls.container}>
      <Row>
        <Column>
          <h3 style={stls.title}>iPhone 13 Pro</h3>
          <p style={stls.p}>
            Полугодовой конкурс, за 6 (шесть) календарных месяцев (июль -
            декабрь), необходимо быть первым по количеству продаж за 6 (шесть)
            месяцев до 20 декабря (включительно). Условия: набрать сумму не
            менее 4 000 000 руб. за время проведения конкурса и быть лидером за
            период конкурса по сумме продаж. Приз: iPhone 13, который будет
            вручен победителю на новогоднем корпоративе в 20-ых числах декабря.
            *Спорный момент будет рассматриваться по датам оплат по квитанциям.
            **В зачет идет только продажа продукта НАНО «ИПО»
          </p>
        </Column>
      </Row>

      <Row>
        <Column style={stls.fullWidth}>
          <p style={stls.leadersTitle}>Ближайший участник к лидеру гонки</p>
          {data.map(
            (item, idx) =>
              idx !== 0 && (
                <div key={item.name + idx} style={stls.fullWidth}>
                  <span style={stls.name}>{item.name}</span>{' '}
                  <div style={stls.progressBar}>
                    <div
                      style={{
                        display: 'inline-block',
                        width:
                          Math.floor(
                            item.result / bestResultOnePercent
                          ).toString() + '%',
                        backgroundColor: '#3290FF',
                        maxWidth: '100%'
                      }}>
                      &#x200B;
                    </div>
                  </div>
                  <div style={stls.iPhoneIcon}></div>
                </div>
              )
          )}
        </Column>
      </Row>
    </Container>
  )
}

export default LeaderboardsSixMonths
