import express from "express";
import * as itemController from "../controllers/item-controller.js";

const router = express.Router();

router.get("/", itemController.getAllItems);
router.get("/:id", itemController.getItem);
router.post("/", itemController.createItem);
router.delete("/:id", itemController.deleteItem);

// TODO: update item route

export default router;
