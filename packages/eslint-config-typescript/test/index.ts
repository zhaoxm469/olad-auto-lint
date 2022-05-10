/*
 * @Date: 2022-04-10 20:29:19
 * @LastEditors: zhaoxm
 * @LastEditTime: 2022-05-06 23:50:54
 * @Description:
 */

const a = 123
a = 123

declare interface ACommands {
  command: string
  description: string
  action: (...arguments_: any[]) => any
}

export default class Init implements ACommands {
  command: string

  description: string

  action: (...arguments_: any[]) => any

}

declare namespace Foo {
  export function foo(s: string): void
  export function foo(n: number): void
  export function bar(): void
  export function foo(sn: string | number): void
}

interface AA {
  name: 123
}

const b: AA = {
  name:123,
}

interface Foo {
  foo(s: string): void
  foo(n: number): void
  bar(): void
  foo(sn: string | number): void
}

interface Foo {
  foo(s: string): void
  foo(n: number): void
  bar(): void
  foo(sn: string | number): void
}

class Foo {
  foo(s: string): void

  foo(n: number): void

  bar(): void {}

  foo(sn: string | number): void {}
}

export function foo(s: string): void
export function foo(n: number): void
export function bar(): void
export function foo(sn: string | number): void