import { App } from 'vue'
import Carousel from './src/index.vue'

Carousel.install = (app: App): void => {
  app.component(Carousel.name, Carousel)
}

export default Carousel
