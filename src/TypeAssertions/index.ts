// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type Test<TestName extends string, Assertion> = unknown;

export type Expect<T extends true> = T;

export type Extends<Value, Expected> = Value extends Expected //
  ? true
  : false;

export type Equal<X, Y> = //
  (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2 //
    ? true
    : false;
