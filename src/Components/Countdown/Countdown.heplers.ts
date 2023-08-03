export const zeroPad = (value: number, length: number = 2) => {
  return `${value}`.padStart(length, "0")
}