const Task = require("../models/Task");

// CREATE
exports.createTask = async (req, res) => {
  const task = await Task.create({
    ...req.body,
    user: req.user._id,
  });

  res.status(201).json(task);
};

// GET ALL
exports.getTasks = async (req, res) => {
  const tasks = await Task.find({ user: req.user._id });
  res.json(tasks);
};

// UPDATE
exports.updateTask = async (req, res) => {
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.json(task);
};

// DELETE
exports.deleteTask = async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: "Task deleted" });
};
