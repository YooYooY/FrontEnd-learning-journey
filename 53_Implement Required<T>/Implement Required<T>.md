### Implement Required<T>

As the opposite of `Partial<T>`, `Required<T>` sets all properties of T to required.

```typescript
// all properties are optional
type Foo = {
  a?: string
  b?: number
  c?: boolean
}


const a: MyRequired<Foo> = {}
// Error

const b: MyRequired<Foo> = {
  a: 'Hello World'
}
// Error

const c: MyRequired<Foo> = {
  b: 123
}
// Error

const d: MyRequired<Foo> = {
  b: 123,
  c: true
}
// Error

const e: MyRequired<Foo> = {
  a: 'Hello World',
  b: 123,
  c: true
}
// valid
```

#### Implement

Looking at the code example, we can see that the requirment is to remove the `?` on each property name.

To achieve this, we need to use the `-` , introduced in [TypeScript 2.8](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html#improved-control-over-mapped-type-modifiers).

`-` allows us to remove modifiers like readonly and ?

So the answer to this question is simply a Mapped Type with `-`:

```typescript
type MyRequired<T> = { 
  [P in keyof T]-?: T[P] 
}
```