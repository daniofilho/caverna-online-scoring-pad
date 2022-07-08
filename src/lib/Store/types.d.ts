declare type IStore = {
  get: () => any | null;
  set: (newStore: any) => void;
  clear: () => void;
  clearAll: () => void;
  getItem: (key: string) => string | null;
  setItem: (key: string, value: string) => void;
  removeItem: (key: string) => void;
};
