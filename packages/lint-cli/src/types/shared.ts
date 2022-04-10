import { PACKAGE_NAMES } from "./../config/consts"

export type PackageJson = {
    name: string,
    version: string,
    dependencies: Recordable,
    devDependencies: Recordable
} & Recordable

export type lintNameType = keyof typeof PACKAGE_NAMES

export type LintItem = {
    lintName: lintNameType;
    eslintType?:string
}

export type Lints = LintItem[];

export type NpmInstallConfig = {
    packName: string ;
    // templateName: string;
    // targetFileName: string;
    // eslintType: string;
}