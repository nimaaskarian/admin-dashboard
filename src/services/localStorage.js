export const setToLocalStorage = (key, value) => {
  window.localStorage.setItem(key, value);
  window.dispatchEvent(new Event("storage"));
};
export const getFromLocalStorage = (key) => {
  const value = window.localStorage.getItem(key);
  if (value) return value;
};
