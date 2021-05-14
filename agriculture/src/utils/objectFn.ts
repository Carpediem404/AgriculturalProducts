export const toArray = (obj: Record<string, unknown>): Record<string, unknown> => {
  return obj;
};
export const pick = (obj: Record<string, unknown>, arr: Array<any>) => arr.reduce((acc, curr) => (curr in obj && (acc[curr] = obj[curr]), acc), {});
