import { Reducer } from "@twofortyfive/utils";

export type HasName<T> = T & {
  debugName: string;
};

export const withName =
  (name: string) =>
  <State>(reducer: Reducer<State>): HasName<Reducer<State>> => {
    const result = reducer as HasName<Reducer<State>>;
    result.debugName = name;
    return result;
  };

export default withName;
