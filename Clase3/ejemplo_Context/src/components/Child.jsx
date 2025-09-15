import { useContext } from "react";
import { AppContext } from "../contexts/Provider.jsx"

export default function Child() {
  const { value, setValue } = useContext(AppContext);

  return (
    <input value={value} onChange={(e) => setValue(e.target.value)} />
  );
}