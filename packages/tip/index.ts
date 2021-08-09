import { App } from 'vue'
import tip from './src/index'

tip.install=(app:App): void =>{
    app.component(tip.name, tip)
}

export default tip