export const delay = (ms: number) => new Promise(res => setTimeout(res, ms))

export const spreadDataByField = (data: Array<Object>, field: string) => {
  return data.reduce((accumulator: any, current: any) => {
    const found: {
      category: string,
      data: Array<Object>
    } = accumulator.find((item: any) => item[field] === current[field])
    const value = { ...current }
    if (!found) {
      accumulator.push({ category: current.category, data: [value] })
    }
    else {
      found.data.push(value)
    }
    return accumulator
  }, [])
}
