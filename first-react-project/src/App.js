import './App.css';
import React, {useReducer} from "react";

function App() {
    const [checked,toggle] = useReducer(
        checked => !checked,
        false);

    return (
      <>
        <input type="Checkbox"
               value={checked}
               onChange={toggle}/>
          <p>{checked ? "checked" : "not checked"}</p>
      </>
    );
}

export default App;
