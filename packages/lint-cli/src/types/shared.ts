export type PackageJson = {
    name: string,
    version: string,
    dependencies: Recordable,
    devDependencies: Recordable
} & Recordable

export type LintNames = 'eslint' | 'stylelint' | 'commitlint';

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