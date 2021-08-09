import { App } from 'vue'
import scrollbar from './src/index.vue'

scrollbar.install=(app:App): void =>{
     app.component(scrollbar.name, scrollbar)
}

export default scrollbar