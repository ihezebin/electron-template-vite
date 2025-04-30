declare module '*.module.scss' {
  const style: { readonly [key: string]: string }
  export default style
}

declare module '*.module.css' {
  const style: { readonly [key: string]: string }
  export default style
}

declare module '*.png'
declare module '*.jpeg'
declare module '*.jpg'
declare module '*.mp3'
declare module '*.mp4'

declare interface IObject {
  [key: string]: any
}
