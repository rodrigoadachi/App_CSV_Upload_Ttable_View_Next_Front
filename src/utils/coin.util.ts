export const coinToBRL = (value: string | number): string => {
  const onlyCoin = `${value}`.replace(/[^0-9.]/g, '')
  const floatValue = parseFloat(onlyCoin)
  const coinNumber = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  })
  return coinNumber.format(floatValue)
}