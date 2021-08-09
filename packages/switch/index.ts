import Switch from './src/index.vue'
import { App } from 'vue'

Switch.install = (app: App): void => {
  app.component(Switch.name, Switch)
}

export default Switch
