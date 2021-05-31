export default interface HangEvents {
  type: string,
  handler: (...args: any[]) => void,
  element: string
}
