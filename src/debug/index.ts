export const debug = <T>(t: T): T => {
  console.log(t);
  return t;
};

export default debug;
