declare type Recordable<T = any> = Record<string, T>

declare module "*.json"

declare interface ACommands {
  command: string
  description: string
  action: (...arguments_: any[]) => any
}

declare type PackageJson = {
  name: string
  version: string
  dependencies: Recordable
  devDependencies: Recordable
} & Recordable

declare interface LintItem {
  lintName: string
  eslintType: string
}

declare interface Lints extends Array<LintItem> {}
declare interface UserPackage {
  dependencies?: Recordable
  devDependencies?: Recordable
}
