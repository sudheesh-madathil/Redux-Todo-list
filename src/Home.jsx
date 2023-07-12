import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTask, removeTask, editTask } from "./Redux/TaskSlice";

function Home() {
  const todos = useSelector((state) => state.todo.tasks);
  const [addText, setAddText] = useState("");
  const [editText, setEditText] = useState("");
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    if (addText.trim() !== "") {
      const newItem = {
        id: Date.now(),
        text: addText,
        complete: false,
      };

      dispatch(addTask(newItem));
      setAddText("");
    }
  };

  const handleRemove = (id) => {
    dispatch(removeTask(id));
   
  };

  const handleEdit = (data) => {
    setEditText(data.id);
    setAddText(data.text);
  };

  const handleSaveEdit = () => {
    const updatedTask = {
      id: editText,
      text: addText,
      complete: false,
    };
    dispatch(editTask(updatedTask));
    setEditText("");
    setAddText("");
  };
  


  

  return (
    <div className="d1">
      <h1>TODO LIST</h1>

      <input className="addinput"
        type="text"
        value={addText}
        onChange={(e) => setAddText(e.target.value)}
      />

      <button className="addbtn" onClick={handleClick}> <span className="add">ADD</span>  </button>
   

      <ul className="ul" style={{ listStyleType: 'none' }}>
        {todos.map((data) => (
          <li key={data.id}>
            {editText === data.id ? (
              
              <> 
            
                <input  className="editinput"
                  type="text"
                  value={addText}
                  onChange={(e) => setAddText(e.target.value)}
                />
                <button onClick={handleSaveEdit}>Save</button>
              </>
            ) : (
              <><div className="text">
                {data.text}  </div>       
                <button  className="btn" onClick={() => handleRemove(data.id)}>Remove</button>
                <button  className="btn" onClick={() => handleEdit(data)}>Edit</button>

              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export { Home };
