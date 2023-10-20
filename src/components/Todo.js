import React, { useState } from 'react';
import './Todo.css';
import { BsJournalPlus, BsJournalX, BsChevronUp } from 'react-icons/bs';

const Todo = () => {
  const [title, setTitle] = useState("");
  const [notes, setNotes] = useState("");
  const [todoLists, setTodoLists] = useState([]);
  const [click, setClick] = useState(true);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleNotesChange = (e) => {
    setNotes(e.target.value);
  };

  const addTodoLists = () => {
    if (title && notes) {
      setTodoLists([...todoLists, { title, notes }]);
      setTitle("");
      setNotes("");
    }
  };

  const handleClick = () => {
    setClick(!click);
  };

  const resetBtn = () => {
    setTitle("");
    setNotes("");
  };

  const deleteTodoLists = (index) => {
    const updatedTodoLists = [...todoLists];
    updatedTodoLists.splice(index, 1);
    setTodoLists(updatedTodoLists);
  };

  return (
    <div className="todo-container">
        <h1>To Do</h1>
        <div className="todo-content">
          {click && (
            <>
              <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={handleTitleChange}
              />

              <textarea
                name="Notes"
                id="notes"
                placeholder="Notes"
                value={notes}
                onChange={handleNotesChange}
              />

              <button type="button" onClick={addTodoLists}>
                Add
              </button>
              <button type="reset" onClick={resetBtn}>
                Reset
              </button>
            </>
          )}
        </div>

        <div className="delete-content">
        {todoLists.map((todoList, index) => (
            <div key={index}>
                <h1>{todoList.title}</h1>
                <p>{todoList.notes}</p>
                <button onClick={() => deleteTodoLists(index)}>Delete</button>
            </div>
        ))}

        </div>

        <div className={`popup ${click ? '' : 'click-chevron'}`} onClick={handleClick}>
          {click ? <BsJournalX /> : <BsJournalPlus />}
          <div className="icon">
            <BsChevronUp />
          </div>
          <h2>Click Me</h2>
        </div>
    </div>
  );
};

export default Todo;
