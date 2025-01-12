export const saveToStorage = (name: string, data: string) => {
  if (!localStorage) {
    return;
  }

  localStorage.setItem(name, JSON.stringify(data));
};

export const getFromStorage = (name: string) => {
  if (!localStorage) {
    return null;
  }

  try {
    const storedValue = localStorage.getItem(name);
    return storedValue ? JSON.parse(storedValue) : null;
  } catch (e) {
    console.error(e);

    return null;
  }
};
