export const isValueInObject = (obj, name) => {
  const properties = name.split('.');
  let currentObj = obj;

  for (const prop of properties) {
    if (!currentObj.hasOwnProperty(prop)) {
      return false;
    }
    currentObj = currentObj[prop];
  }

  return currentObj;
};
