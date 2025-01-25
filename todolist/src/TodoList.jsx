import { useState } from 'react';

export default function Todolist() {
  const [task, setTask] = useState([]); // Initialize task as an empty array
  const [newtask, setNewTask] = useState(''); //stores text input and updates new task
  const [editingIndex, setEditingIndex] = useState(null); // Track which task is being edited by index
  const [editValue, setEditValue] = useState(''); // Track the value of the task being edited

  // Handle input for adding a new task
  function handleinput(event) {
    setNewTask(event.target.value);
  }

  // Add a new task
  function addTask() {
    //condtional making sure the input field is not empty 
    if (newtask.trim() !== '') {
      setTask((t) => [...t, newtask]); // Add the new task to the task array
      //spread operator to append newTask to current list of task. t for task
      setNewTask(''); //clearing input after text is added
    }
  }

  // Delete a task
  function deleteTask(index) {
    const updatedTask = task.filter((_, i) => i !== index); // Remove the task at the given index, creating a new array without the task at the given index
    // _ represents current task. i represents the index
    setTask(updatedTask); //updating task array with filtered list above.
  }

  // Move a task up in the list if its not already the first task
  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTask = [...task]; //creating a copy of the task array
      [updatedTask[index], updatedTask[index - 1]] = [
        updatedTask[index - 1],
        updatedTask[index],
      ]; // Swap tasks using destructuring
      setTask(updatedTask); //updating the state with the task array.
    }
  }

  // Move a task down in the list if it is not already the last task
  function moveTaskDown(index) {
    if (index < task.length - 1) {
      const updatedTask = [...task];
      [updatedTask[index], updatedTask[index + 1]] = [
        updatedTask[index + 1],
        updatedTask[index],
      ]; // Swap tasks
      setTask(updatedTask);
    }
  }

  // Start editing a task
  function editTask(index) {
    setEditingIndex(index); // Set the index of the task being edited
    setEditValue(task[index]); // Pre-fill the edit input with the current task value
  }

  // Update a task
  function updateTask() {
    if (editValue.trim() !== '' && editingIndex !== null) //making sure the edited tsk is not empty
    {
      const updatedTask = [...task];
      updatedTask[editingIndex] = editValue; // Update the task with the new value at the editing index
      setTask(updatedTask);
      setEditingIndex(null); // Clear the editing index
      setEditValue(''); // Clear the edit input
    }
  }

  return (
    <div className="todolist">
      <h1>To-Do List</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a task..."
          value={newtask}
          onChange={handleinput}
        />
        <button className="add-btn" onClick={addTask}>
          Add Task
        </button>

        {/* Task list */}
        <ol>
          {task.map((task, index) => (
            <li key={index}>
              {editingIndex === index ? (
                // Show input for editing the task
                <div>
                  <input
                    type="text"
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                  />
                  <button className="update-btn" onClick={updateTask}>
                    Update
                  </button>
                  <button
                    className="cancel-btn"
                    onClick={() => setEditingIndex(null)}
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                // Show the task
                <div>
                  <span className="text">{task}</span>
                  <button
                    className="edit-btn"
                    onClick={() => editTask(index)}
                  >
                ✍️  
                  </button>
                  <button
                    className="delete-btn"
                    onClick={() => deleteTask(index)}
                  >
                 🗑️
                  </button>
                  <button
                    className="move-btn"
                    onClick={() => moveTaskUp(index)}
                  >
                    ⬆️
                  </button>
                  <button
                    className="move-btn"
                    onClick={() => moveTaskDown(index)}
                  >
                    ⬇️
                   
                  </button>
                </div>
              )}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
