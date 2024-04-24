export const hasNestedProperty = (obj, path) => {
  return path.split('.').every((key) => obj && (obj = obj[key]) !== undefined);
};
