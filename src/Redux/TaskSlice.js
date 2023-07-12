import { createSlice,current } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todo",
  initialState: {
    tasks: [
   
    ]
  },
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    removeTask: (state, action) => {
        // console.log(action.payload);
        const data = current(state.tasks).filter((e) => e.id !== action.payload);
        state.tasks = data;
     
    },
    editTask: (state, action) => {
      const updatedTask = action.payload;
      state.tasks = state.tasks.map((task) =>

          task.id === updatedTask.id ? updatedTask : task
         
        
      );
      
     
    
  },
  Clear:(state,action)=>{
    console.log(action.payload.id);

  }

}

});

export const { addTask, removeTask, editTask } = todosSlice.actions;
export default todosSlice.reducer;
 