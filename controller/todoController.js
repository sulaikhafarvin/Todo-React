import Todo from "../model/todo.js";

export const createNewTodo = async (req, res) => {
  try {
    const { title } = req.body;
    const newTodo = new Todo({ title });
    await newTodo.save();
    return res.status(201).json({ todos: newTodo });
  } catch (error) {
    res.status(500).json({ error: "Error creating task" });
  }
};

export const showTodo = async (req, res) => {
  try {
    const todos = await Todo.find();
    return res.status(200).json({todos});
  } catch (error) {
    res.status(500).json({ error: "Error fetching tasks" });
  }
};

export const updateTodo = async (req, res) => {
  try {
    const { title, completed } = req.body;
    const updatedTodo = await Todo.findByIdAndUpdate(
      req.params.id,
      { title, completed },
      { new: true }
    );
    return res.status(200).json(updatedTodo);
  } catch (error) {
    res.status(500).json({ error: "Error updating task" });
  }
};

export const deleteTodo = async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params.id);
    return res.status(200).json({ message: "Task deleted" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting task" });
  }
};
