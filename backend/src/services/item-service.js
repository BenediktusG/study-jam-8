let items = [];
let idCounter = 1;

export const getAllItems = () => items;

export const getItemById = (id) => items.find((item) => item.id === id);

export const createItem = (data) => {
  const newItem = { id: idCounter++, ...data };
  items.push(newItem);
  return newItem;
};

export const deleteItem = (id) => {
  const index = items.findIndex((item) => item.id === id);
  if (index === -1) return false;
  items.splice(index, 1);
  return true;
};

// TODO: update item service
