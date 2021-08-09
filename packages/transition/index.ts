import { App } from 'vue'
import transition from './src/index.vue'

transition.install=(app:App): void =>{
     app.component(transition.name, transition)
}

export default transition