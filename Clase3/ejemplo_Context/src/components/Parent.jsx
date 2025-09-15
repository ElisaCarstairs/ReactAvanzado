import "./Parent.css";
export default function Parent({ children }) {
  return (
    <>
        <h1>Parent fuera del container</h1>
        <div className="parent-container">
            <h1>Parent dentro del container</h1>
        {children}
        </div>
    </>
  )
}
