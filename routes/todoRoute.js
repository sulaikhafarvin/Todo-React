import { Router } from "express";
import {
  createNewTodo,
  showTodo,
  updateTodo,
  deleteTodo,
} from "../controller/todoController.js";

const todoRoute = Router();

todoRoute.post("/create", createNewTodo);
todoRoute.get("/todos", showTodo);
todoRoute.put("/update/:id", updateTodo);
todoRoute.delete("/delete/:id", deleteTodo);

export default todoRoute;
