import React, { useState } from 'react';
import './Todo.css';
import { BsJournalPlus, BsJournalX } from 'react-icons/bs';

const Todo = () => {
    const [title, setTitle] = useState("");
    const [notes, setNotes] = useState("");
    const [todoLists, setTodoLists] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleNotesChange = (e) => {
        setNotes(e.target.value);
    }

    const addTodoLists = () => {
        if (title && notes) {
            setTodoLists ([...todoLists, {title, notes}]);
            setTitle("");
            setNotes("");
        }
    };


    const resetBtn = () => {
        setTitle("");
        setNotes("");
    }

    const deleteTodoLists = (index) => {
        const updatedTools = [...todoLists];
        updatedTools.splice(index, 1);
        setTodoLists(updatedTools);
    }

    const openModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }

  return (
    <div className="todo-container" style={{ display: isModalOpen ? 'none' : 'block' }}>
        <h1>To Do</h1>
        <div className="todo-content">
            <input type="text" placeholder="Title"  value={title} onChange={handleTitleChange}/>

            <textarea name="Notes" id="notes" placeholder='Notes' value={notes} onChange={handleNotesChange} />

            <button type="button" onClick={addTodoLists}>Add</button>
            <button type="reset" onClick={resetBtn}>Reset</button>
            <button type="button" onClick={openModal}><BsJournalPlus /></button>
        </div>

        <div className="delete-content">
            {todoLists.map((todoLists, index) => (
                <div key={index}>
                    <h1>{todoLists.title}</h1>
                    <p>{todoLists.notes}</p>
                    <button onClick={() => deleteTodoLists(index)}>Delete</button>
                </div>
            ))}
        </div>

        {/* Modal Section */}
        
        <div className="modal-overlay" style={{ display: isModalOpen ? 'block' : 'none' }}>
                <div className="modal-content">
                    <span className="close" onClick={closeModal}><BsJournalX /></span>
                    <h2>To Do List</h2>
                </div>
        </div>
    </div>
  )
}

export default Todo;