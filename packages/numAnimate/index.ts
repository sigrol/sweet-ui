import { App } from 'vue'
import NumAnimate from './src/index.vue'

NumAnimate.install = (app: App): void => {
  app.component(NumAnimate.name, NumAnimate)
}

export default NumAnimate