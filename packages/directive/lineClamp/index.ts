import lineClamp from './src/lineClamp.js'
import { App } from 'vue'


lineClamp.install = (app: App): void => {
  console.log(lineClamp)
  app.directive('lineClamp', lineClamp)
}

export default lineClamp
