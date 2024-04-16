export const onlyNumber = (value: string | number): number => {
  return Number(`${value}`.replace(/\D/g, ''))
}

export const formatDateToString = (date: Date): string => {
  return date.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  })
}