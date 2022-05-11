declare type Recordable<T = any> = Record<string, T>

declare interface ACommands {
  command: string
  description: string
  action: (...arguments_: any[]) => any
}

declare interface UserPackage {
  dependencies?: Recordable
  devDependencies?: Recordable
}
