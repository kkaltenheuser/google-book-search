import React, { useReducver } from "react"
import items from "../App"

const List = (items) => {
    const inputRef = useRef();
  const [items, dispatch] = useReducer((state, action) => {
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
  }, []);

    <ul className="list-group">
        {items.map((item, index) => (
            <li className="list-group-item" key={item.id}>
                {item.name}{" "}
                <button
                    className="btn btn-danger ml-5"
                    onClick={() => dispatch({ type: "remove", index })}
                >
                    X Remove
            </button>
            </li>
        ))}
    </ul>
     
}