export const getErrMessage = (err: string) => {
  if (err?.includes('test')) {
    return 'test'
  }

  return `发生预期之外的错误${err}！`
}
