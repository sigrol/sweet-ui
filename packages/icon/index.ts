import icon from './src/index.vue'
import { App } from 'vue'


icon.install = (app: App): void => {
  app.component(icon.name, icon)
}

export default icon
