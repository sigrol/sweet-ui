import type { App } from 'vue'
import sButton from '@sweet/button'
import sIcon from '@sweet/icon'
import sTransition from '@sweet/transition'

import Message from '@sweet/message'

import sScrollbar from '@sweet/scrollbar'

import sSwitch from '@sweet/switch'

import sInput from '@sweet/input'

import sTree from '@sweet/tree'

import sCol from '@sweet/col'

import sRow from '@sweet/row'

import sNumAnimate from '@sweet/numAnimate'

import sOverlay from '@sweet/overlay'

import sDialog from '@sweet/dialog'

import sCarousel from '@sweet/carousel'

import sCarouselItem from '@sweet/carousel-item'

import { version as version_ } from './version'
import type { InstallOptions } from '@sweet/utils/config'
import { setConfig } from '@sweet/utils/config'



//指令
import lineClamp from '@sweet/directive/lineClamp/index'

const version = version_

const defaultInstallOpt: InstallOptions =  {
  size: '' as ComponentSize,
  zIndex: 2000,
}


const components = [
  sButton,
  sIcon,
  sTransition,
  sScrollbar,
  sSwitch,
  sInput,
  sTree,
  sCol,
  sRow,
  sNumAnimate,
  sDialog,
  sOverlay,
  sCarousel,
  sCarouselItem
];

const directives = [
    lineClamp
];


const plugins = [
    Message
];

const install = (app: App, opt: InstallOptions): void => {
  const option = Object.assign(defaultInstallOpt, opt);
  // locale(option.locale);
  app.config.globalProperties.$SWEET = option;
  setConfig(option);

  components.forEach(component => {
    app.component(component.name, component)
  });

  directives.forEach((directive): void => {
    app.use(directive)
  })


  plugins.forEach(plugin => {
    app.use(plugin as any)
  })
};



export default {
  version,
  install,
  ...components,
  ...plugins
}
