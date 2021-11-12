import { leaderboardsMonthStyles as stls } from './leaderboardsMonthStyles'
import { Container, Row, Column } from 'postonents'
import { getBestManagerResult } from '../../helpers'

const LeaderboardsMonth = ({ data }) => {
  const bestResult = getBestManagerResult(data).result
  const bestResultOnePercent = bestResult / 100
  return (
    <Container alignment='center' style={stls.container}>
      <Row>
        <Column>
          <h3 style={stls.title}>Ежеквартальная премия</h3>
          <p style={stls.p}>
            Премия за 2 (два) календарных месяца (август - сентябрь), необходимо
            быть первым по количеству продаж за 2 (два) месяцев до 30 сентября
            (включительно). Условия: набрать сумму не менее 1 200 000 руб. за
            время проведения конкурса и быть лидером за период конкурса по сумме
            продаж. Приз: Премия 30 000, будет вручена в начале октября 2021
            года, после подсчета всех продаж победителя. *Спорный момент будет
            рассматриваться по датам оплат по квитанциям. **В зачет идет только
            продажа продукта НАНО «ИПО»
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
                  <span style={stls.rubSymbol}>&#x20bd;</span>
                </div>
              )
          )}
        </Column>
      </Row>
    </Container>
  )
}

export default LeaderboardsMonth
