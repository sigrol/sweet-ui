
export interface InstallOptions {
  size: ComponentSize
  zIndex: number
  locale?: any
}

let $SWEET = { } as InstallOptions

const setConfig = (option: InstallOptions): void => {
  $SWEET = option
}

const getConfig = (key: keyof InstallOptions): unknown => {
  return $SWEET[key]
}

export {
  getConfig,
  setConfig,
}
