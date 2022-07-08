const Store = (storageKey: string): IStore => {
  const get = (): any | null => {
    if (typeof window === 'undefined') return {};

    const store = localStorage.getItem(storageKey) || null;
    if (store) return JSON.parse(store);

    return null;
  };

  const set = (params: any): void => {
    if (typeof window !== 'undefined')
      localStorage.setItem(storageKey, JSON.stringify(params));
  };

  const clear = (): void => {
    if (typeof window !== 'undefined') localStorage.removeItem(storageKey);
  };

  const clearAll = (): void => {
    if (typeof window !== 'undefined') localStorage.clear();
  };

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  const getItem = (key: string): string | null => {
    if (typeof window === 'undefined') return null;

    const storeData = get();
    if (!storeData) return null;

    return storeData[key];
  };

  const setItem = (key: string, value: string): void => {
    if (typeof window !== 'undefined') {
      const storeData = get();

      if (storeData) {
        storeData[key] = value;
        set(storeData);
      } else {
        set({ [key]: value });
      }
    }
  };

  const removeItem = (key: string): void => {
    if (typeof window !== 'undefined') {
      if (typeof window !== 'undefined') {
        const storeData = get();

        if (storeData) {
          delete storeData[key];
          set(storeData);
        }
      }
    }
  };

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  return {
    get,
    set,
    clear,
    clearAll,
    getItem,
    setItem,
    removeItem,
  };
};

export default Store;
