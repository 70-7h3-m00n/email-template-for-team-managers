const { Client } = require('@notionhq/client')

const fetchNotionData = async () => {
  // Initializing a client
  const notion = new Client({
    auth: process.env.NOTION_TOKEN
  })

  const notionData = await notion.databases.query({
    database_id: process.env.NOTION_MANAGERS_DB_ID
  })

  const properties = notionData.results.map(item => item.properties)

  const managerMonths = properties.map(item => item['Месяц'].select.name)
  const managerNames = properties.map(item => item['Менеджер'].select.name)
  const managerPlans = properties.map(item => item['План'].number)
  const managerResults = properties.map(item => item['Результат'].number)
  const managerPlansAreCompleted = properties.map(
    item => item['План выполнен'].formula.boolean
  )

  const managersData = managerMonths.map((month, idx) => ({
    month,
    name: managerNames[idx],
    plan: managerPlans[idx],
    result: managerResults[idx],
    planIsCompleted: managerPlansAreCompleted[idx]
  }))

  return managersData
}

export default fetchNotionData
