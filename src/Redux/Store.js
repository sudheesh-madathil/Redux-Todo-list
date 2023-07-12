 import {configureStore} from    "@reduxjs/toolkit"

import Todoslice from "./TaskSlice"

 export default configureStore({
    reducer:{
      todo:Todoslice
      
  
    }
    
 })