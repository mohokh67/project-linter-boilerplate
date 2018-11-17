const removeEmptyProperties = object => {
  const objectCopy = { ...object };
  Object.keys(objectCopy).forEach(key => {
    if ([null, undefined].includes(objectCopy[key])) {
      delete objectCopy[key];
    }
  });

  return objectCopy;
};
console.log("some log");

export default { removeEmptyProperties };
