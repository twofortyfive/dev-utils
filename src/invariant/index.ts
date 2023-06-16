export const invariant = (slug: string, condition: () => boolean): void => {
  if (!condition()) {
    throw Error(`Invariant violation: '${slug}' is not verified.`);
  }
};

export default invariant;
