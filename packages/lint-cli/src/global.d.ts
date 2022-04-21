declare type Recordable<T = any> = Record<string, T>

declare module "*.json"

declare interface ACommands {
  command: string
  description: string
  action: (...args: any[]) => any
}
    
declare interface LintItem {
  lintName: string
  eslintType: string
}
    
declare interface Lints extends Array<LintItem> {}
    
declare interface UserPackage {
  dependencies?: Recordable
  devDependencies?: Recordable
}
