export const save = <T>(key: string, data: T) => {
  if (typeof localStorage === "undefined") {
    return;
  }
  localStorage.setItem(key, JSON.stringify(data));
};

export const load = <T>(key: string): T | null => {
  if (typeof localStorage === "undefined") {
    return null;
  }
  const data = localStorage.getItem(key);
  if (!data) {
    return null;
  }
  return JSON.parse(data) as T;
};
