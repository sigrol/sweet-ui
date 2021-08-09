import { App } from 'vue'
import CarouselItem from './src/index.vue'

CarouselItem.install = (app: App): void => {
  app.component(CarouselItem.name, CarouselItem)
}

export default CarouselItem
