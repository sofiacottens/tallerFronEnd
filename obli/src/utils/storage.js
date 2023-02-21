const getFromLocalStorage = (key) => {
    const value = localStorage.getItem(key)
      ? JSON.parse(localStorage.getItem(key))
      : null;
  
    return value;
  };
  
  const setInLocalStorage = (key, value) => {
    localStorage.setItem(key, value);
  };
  const removeFromLocalStorage = (key) => {
    localStorage.removeItem(key);
  };
  
  const clearLocalStorage = () => {
    localStorage.clear();
  };
  
  export {
    setInLocalStorage,
    getFromLocalStorage,
    removeFromLocalStorage,
    clearLocalStorage,
  };