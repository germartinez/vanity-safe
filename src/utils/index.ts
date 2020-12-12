export const zeroAddress = `0x${'0'.repeat(40)}`

export const formatNumber = (number: number): string => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
}
