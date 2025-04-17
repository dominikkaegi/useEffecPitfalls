import { useEffect, useState } from "react";
import {logValue} from "./log";



export function SynchronisationExample() {
  const [name, setName] = useState<string>("Maria");
  const [, setState] = useState<number>();

  useEffect(() => {
    logValue(name);
  }, [name]);

  const triggerRender = () => {
    setState(Math.random());
  };

  return (
    <div>
      <div>
        <label htmlFor="name">Name: </label>

        <input
          id="name"
          type={"text"}
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <button onClick={triggerRender} style={{ margin: "20px" }}>
        Trigger Render
      </button>
    </div>
  );
}
