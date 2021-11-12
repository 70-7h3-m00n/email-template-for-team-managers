const getLastSixMonths = () => {
  const ruMonths = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь'
  ]

  const date = new Date()
  date.setMonth(date.getMonth() - 5)
  const lastSixMonthIndex = date.getMonth()
  const currentMonthIndex = new Date().getMonth()

  const output = ruMonths.filter((item, idx) => {
    if (currentMonthIndex > lastSixMonthIndex) {
      if (idx >= lastSixMonthIndex && idx <= currentMonthIndex) return item
    }
    if (currentMonthIndex < lastSixMonthIndex) {
      if (idx <= currentMonthIndex || idx >= lastSixMonthIndex) return item
    }
  })

  return output
}

export default getLastSixMonths
