declare namespace Foo {
  export function foo(s: string): void
  export function foo(n: number): void
  export function bar(): void
  export function foo(sn: string | number): void
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

interface name {
  command: string
  description: string
  action: (...arguments_: any[]) => any
}

export default class Init implements name {
  command: string

  description: string

  action: (...arguments_: any[]) => any

}

const a = 123