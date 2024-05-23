import { Equal, Expect, Extends } from ".";

type TestCases = [
  Expect<Extends<1, number>>,
  // @ts-expect-error
  Expect<Extends<number, 1>>,
  Expect<Equal<true, true>>,
  // @ts-expect-error
  Expect<Equal<true, false>>
];
