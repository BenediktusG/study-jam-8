import * as itemService from "../services/item-service.js";

export const getAllItems = (req, res) => {
  res.json(itemService.getAllItems());
};

export const getItem = (req, res) => {
  const item = itemService.getItemById(Number(req.params.id));
  if (!item) return res.status(404).json({ message: "Item not found" });
  res.json(item);
};

export const createItem = (req, res) => {
  const { name, quantity } = req.body;
  if (!name || quantity == null) {
    return res.status(400).json({ message: "Name and quantity are required" });
  }
  const newItem = itemService.createItem({ name, quantity });
  res.status(201).json(newItem);
};

export const deleteItem = (req, res) => {
  const success = itemService.deleteItem(Number(req.params.id));
  if (!success) return res.status(404).json({ message: "Item not found" });
  res.json({ message: "Item deleted successfully" });
};

// TODO: Update item controller
