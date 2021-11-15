import { leaderboardsMonthStyles as stls } from './leaderboardsMonthStyles'
import { Container, Row, Column } from 'postonents'
import { getBestManagerResult, toNumberWithSpaces} from '../../helpers'

const LeaderboardsMonth = ({ data }) => {
  const dataTeamOne = data.filter(
    item =>
      item.name === 'Кубракова Виталина' ||
      item.name === 'Бурыкина Кристина' ||
      item.name === 'Абдукодиров Санжар' ||
      item.name === 'Крылова Мария'
  )
  const dataTeamTwo = data.filter(
    item =>
      item.name === 'Жучкова Дарья' ||
      item.name === 'Сычев Константин' ||
      item.name === 'Салтыкова Юлия' ||
      item.name === 'Сабуров Равшан'
  )

  const bestResult = getBestManagerResult(data).result
  const bestResultOnePercent = bestResult / 100

  const bestResultTeamOne = getBestManagerResult(dataTeamOne).result
  const bestResultOnePercentTeamOne = bestResultTeamOne / 100

  const bestResultTeamTwo = getBestManagerResult(dataTeamTwo).result
  const bestResultOnePercentTeamTwo = bestResultTeamTwo / 100

  const teamOneSum = dataTeamOne.reduce(
    (acc, cur) => ({
      name: 'План первой группы',
      result: acc.result + cur.result,
      plan: acc.plan + cur.plan
    }),
    { name: '', result: 0, plan: 0 }
  )


  const teamTwoSum = dataTeamTwo.reduce(
    (acc, cur) => ({
      name: 'План второй группы',
      result: acc.result + cur.result,
      plan: acc.plan + cur.plan
    }),
    { name: '', result: 0, plan: 0 }
  )

  // console.log(dataTeamOne);
  // console.log(dataTeamTwo);
  // console.log(data)
  console.log(teamOneSum)
  console.log(teamTwoSum)
  console.log(teamOneSum.result / teamOneSum.plan)
  return (
    <Container alignment='center' style={stls.container}>
      <Row>
        <Column>
          <h3 style={stls.title}>Общий план не менее 3 800 000 ₽</h3>
        </Column>
      </Row>
      <Row>
        <Column>
          <div style={stls.results}>
            {[teamOneSum].map((item, idx) => (
              <div key={item.name + idx} style={stls.fullWidth}>
                <span style={stls.name}>{item.name}</span>{' '}
                <div style={stls.progressBar}>
                  <div
                    style={{
                      display: 'inline-block',
                      width:
                        ((item.result / item.plan) * 100)
                          .toFixed(2)
                          .toString() + '%',
                      backgroundColor: '#3290FF',
                      maxWidth: '100%'
                    }}>
                    &#x200B;
                  </div>
                </div>
                <span style={stls.amount}>Цель <br /> {toNumberWithSpaces(item.plan)} &#x20bd;</span>
              </div>
            ))}
          </div>
        </Column>
      </Row>
      <Row>
        <Column>
          <h4 style={stls.titleLeader}>
            <span style={stls.highlight}>Лидер группы</span>{' '}
            {dataTeamOne.sort((a, b) => b.result - a.result)[0].name}
          </h4>
        </Column>
      </Row>
      <Row>
        <Column style={stls.fullWidth}>
          {dataTeamOne.map((item, idx) => (
            <div key={item.name + idx} style={stls.fullWidth}>
              <span style={stls.name}>{item.name}</span>{' '}
              <div style={stls.progressBar}>
                <div
                  style={{
                    display: 'inline-block',
                    width:
                      Math.floor(
                        ((item.result / item.plan) * 100)
                      ).toFixed(2).toString() + '%',
                    backgroundColor: '#3290FF',
                    maxWidth: '100%'
                  }}>
                  &#x200B;
                  {/* <span style={stls.currentPrice}>{item.result}&#x20bd;</span> */}
                </div>
              </div>
              <span style={stls.amount}>{toNumberWithSpaces(item.plan)} &#x20bd;</span>
            </div>
          ))}
        </Column>
      </Row>
      <Row>
        <Column>
          <h3 style={stls.titleSecond}>Общий план не менее 3 800 000 ₽</h3>
        </Column>
      </Row>
      <Row>
        <Column>
          <div style={stls.results}>
            {[teamTwoSum].map((item, idx) => (
              <div key={item.name + idx} style={stls.fullWidth}>
                <span style={stls.name}>{item.name}</span>{' '}
                <div style={stls.progressBar}>
                  <div
                    style={{
                      display: 'inline-block',
                      width:
                        ((item.result / item.plan) * 100)
                          .toFixed(2)
                          .toString() + '%',
                      backgroundColor: '#3290FF',
                      maxWidth: '100%'
                    }}>
                    &#x200B;
                  </div>
                </div>
                <span style={stls.amount}>Цель <br /> {toNumberWithSpaces(item.plan)} &#x20bd;</span>
              </div>
            ))}
          </div>
        </Column>
      </Row>
      <Row>
        <Column>
          <h4 style={stls.titleLeader}>
            <span style={stls.highlight}>Лидер группы</span>{' '}
            {dataTeamTwo.sort((a, b) => b.result - a.result)[0].name}
          </h4>
        </Column>
      </Row>
      <Row>
        <Column style={stls.fullWidth}>
          {dataTeamTwo.map((item, idx) => (
            <div key={item.name + idx} style={stls.fullWidth}>
              <span style={stls.name}>{item.name}</span>{' '}
              <div style={stls.progressBar}>
                <div
                  style={{
                    display: 'inline-block',
                    width:
                      Math.floor(
                        item.result / item.plan * 100
                      ).toFixed(2).toString() + '%',
                    backgroundColor: '#3290FF',
                    maxWidth: '100%'
                  }}>
                  &#x200B;
                </div>
              </div>
              <span style={stls.amount}>{toNumberWithSpaces(item.plan)} &#x20bd;</span>
            </div>
          ))}
        </Column>
      </Row>
    </Container>
  )
}

export default LeaderboardsMonth
