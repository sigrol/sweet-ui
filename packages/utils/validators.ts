export const isValidWidthUnit = (val: string) =>
  ['px', 'rem', 'em', 'vw', '%', 'vmin', 'vmax'].some(unit =>
    val.endsWith(unit),
  )

export const isValidComponentSize = (val: string)=>
  ['', 'large', 'medium', 'small', 'mini'].includes(val)


export const isValidComponentType = (val:string)=>{
  ['default','primary','success','info','warning','danger',].includes(val)
}

export const isValidComponentNativeType = (val:string)=>{
  ['button', 'submit', 'reset'].includes(val)
}