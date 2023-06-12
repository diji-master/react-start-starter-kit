import { useState, useRef, forwardRef } from "react";
import "./assets/css/style.css";

// import Jacket from "./Jackets";
import Test from "./Test";

// function Input(props, ref) {
//   return <input ref={ref} type="text" {...props} />;
// }

const Input = forwardRef((props, ref) => {
  return <input ref={ref} type="text" {...props} />;
});

// Input = forwardRef(Input);

function App() {
  const inputRef = useRef();
  const focusInput = () => {
    inputRef.current.focus();
  };

  const [show, setShow] = useState(false);
  return (
    <>
      <div className="mx-5 my-5 px-5 py-5 bg-slate-200">
        Test
        <h1>useRef() - forwardRef()</h1>
        <Input ref={inputRef} />
        <button
          onClick={focusInput}
          className="ml-3 bg-black text-white w-2/12 rounded-md my-3">
          Focusla
        </button>
        <br />
        <button
          className="bg-black text-white ml-2 p-1 w-2/12 rounded-md my-3"
          onClick={() => setShow((show) => !show)}>
          {show ? "Gizle" : "Göster"}
        </button>
        {show && <Test />}
        {/* <Jacket /> */}
      </div>
    </>
  );
}

export default App;
