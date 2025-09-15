import { useContext, useState } from "react";
import "./App.css";
import Child from "./components/Child.jsx";
import Parent from "./components/Parent.jsx";
import { AppContext } from "./contexts/Provider.jsx";

function App() {
  const { value } = useContext(AppContext);

  return (
    <>
      <h3>El valor del contexto es: {value}</h3>
      <Parent>
        <Parent>
          <Parent>
            <Parent>
              <Parent>
                <Parent>
                  <Child/>
                </Parent>
              </Parent>
            </Parent>
          </Parent>
        </Parent>
      </Parent>
    </>
  );
}

export default App;
