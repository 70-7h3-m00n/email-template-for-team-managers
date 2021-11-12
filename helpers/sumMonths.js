const sumMonths = data => {
  const names = [...new Set(data.map(item => item.name))]
  const sumedUpData = names
    .map(name => {
      let result = 0
      let plan = 0
      data.forEach(
        item =>
          item.name === name && (result += item.result) && (plan += item.plan)
      )
      return { name, result, plan }
    })
    .sort((a, b) => b.result - a.result)

  return sumedUpData
}

export default sumMonths
