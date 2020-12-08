// imports
import React, { createContext, useReducer, useContext } from "react";
// create a new context
const TodoCountContext = createContext();
// get the provider
const { Provider } = ToDoContext;
// the reducer
const reducer ((state, action) => {
    switch (action.type) {
    case "add":
      return [
        ...state,
        {
          id: state.length * Math.random(),
          name: action.name
        }
      ];
      // Bonus: Remove a todo from the list.
    case "remove":
      return state.filter((_, index) => {
        return index !== action.index;
      });
    default:
      return state;
    }
  }
// custom provider
const ToDoProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, { count: value });
};

return (
    <Provider value ={[state, dispatch]} {...props} />
)
// custom hook
const useToDoContext = () => {
  return useContext(ToDoContext);
};
// export the provider + the hook
export { ToDoProvider, useToDoContext };
