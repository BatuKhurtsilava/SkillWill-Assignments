

const initialState = {
  todoList: [],
  doneList: [],
  status: 'Pending'
};

export const todoReducer = (state = initialState, action) => {
switch(action.type) {
  case 'ADD-TODO' :
    return {
      ...state,
      todoList: [...state.todoList, action.payload]
      }

      case 'DELETE-TODO' :
        return {
          ...state,
          todoList: state.todoList.filter((task) => task !== action.payload)
          } 
      
          case 'MARK-DONE-TODO' :
            return {
              ...state,
              todoList: state.todoList.filter((task) => task !== action.payload),
              doneList: [...state.doneList, action.payload],
              status: 'Done'
              }      
              
              
              case 'BACK-TO-TODO' :
                return {
                  ...state,
                 todoList: [...state.todoList, action.payload],
                 doneList: state.doneList.filter((task) => task !== action.payload),
                 status: 'Pending'
                  }  
                  
                  case 'DELETE-DONE' :
                    return {
                      ...state,
                      doneList: state.doneList.filter((task) => task !== action.payload)
                      }   
                      
                      default:
                        return state;    
}
}