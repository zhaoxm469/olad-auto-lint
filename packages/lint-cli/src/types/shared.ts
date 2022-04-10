import { ESLINT_TYPE } from './../config/consts';
export type PackageJson = {
    name: string,
    version: string,
    dependencies: Recordable,
    devDependencies: Recordable
} & Recordable

export type LintNames = typeof ESLINT_TYPE[0]

export type LintItem = {
    lintName: LintNames;
    eslintType?: string;
}

export type Lints = LintItem[];

export type NpmInstallConfig = {
    packageName: string;
    templateName: string;
    targetFileName: string;
    eslintType: string;
}