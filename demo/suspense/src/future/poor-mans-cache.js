export function createResource(getPromise) {
  const loading = {};
  const cache = {}

  function load(key) {
    if (!loading[key]) {
      loading[key] = getPromise(key).then(value => {
        delete loading[key];
        return cache[key] = value;
      });
    }

    return loading[key];
  }

  return {
    preload(key) {
      if (!cache[key]) {
        load(key);
      }
    },

    read(key) {
      if (cache[key]) {
        return cache[key];
      }

      throw load(key);
    }
  }
};
