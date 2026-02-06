import React, { useEffect, useState } from "react";

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [editingId, setEditingId] = useState(null);

  const token = localStorage.getItem("token");

  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/api/v1/tasks", {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await res.json();
    setTasks(data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const createOrUpdateTask = async (e) => {
    e.preventDefault();

    const url = editingId
      ? `http://localhost:5000/api/v1/tasks/${editingId}`
      : "http://localhost:5000/api/v1/tasks";

    const method = editingId ? "PUT" : "POST";

    const res = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ title, description }),
    });

    if (res.ok) {
      setTitle("");
      setDescription("");
      setEditingId(null);
      fetchTasks();
    }
  };

  const editTask = (task) => {
    setTitle(task.title);
    setDescription(task.description);
    setEditingId(task._id);
  };

  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/api/v1/tasks/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });
    fetchTasks();
  };

  const logout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <div
      style={{ maxWidth: "800px", margin: "40px auto", fontFamily: "Arial" }}
    >
      <h2>Task Dashboard</h2>

      <button onClick={logout} style={{ float: "right" }}>
        Logout
      </button>

      <form onSubmit={createOrUpdateTask} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
        />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
        />

        <button type="submit">{editingId ? "Update Task" : "Add Task"}</button>
      </form>

      {tasks.map((task) => (
        <div
          key={task._id}
          style={{
            border: "1px solid #ccc",
            padding: "15px",
            marginBottom: "10px",
            borderRadius: "8px",
            background: "#f9f9f9",
          }}
        >
          <h3>{task.title}</h3>
          <p>{task.description}</p>

          <button
            onClick={() => editTask(task)}
            style={{ marginRight: "10px" }}
          >
            Edit
          </button>

          <button onClick={() => deleteTask(task._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default Tasks;
