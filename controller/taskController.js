const Task = require("../models/TaskModels");

// Get all tasks
exports.getTasks = async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
};

// Add new task
exports.addTask = async (req, res) => {
  const newTask = new Task({ title: req.body.title });
  await newTask.save();
  res.json(newTask);
};

// Delete task
exports.deleteTask = async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: "Task deleted" });
};

// Update task
exports.updateTask = async (req, res) => {
  const updated = await Task.findByIdAndUpdate(req.params.id, { completed: req.body.completed }, { new: true });
  res.json(updated);
};