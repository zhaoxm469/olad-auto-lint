
export type PackageJson = {
  name: string
  version: string
  dependencies: Recordable
  devDependencies: Recordable
} & Recordable


export type Lints = LintItem[]

export interface NpmInstallConfig {
  packName: string
  // templateName: string;
  // targetFileName: string;
  // eslintType: string;
}