const countObjectProperties = obj => {
  if (typeof obj === 'object') {
    return Object.keys(obj).length;
  }
  return 0;
};

const currentTimestamp = () => Math.floor(Date.now() / 1000);

export { countObjectProperties, currentTimestamp };
