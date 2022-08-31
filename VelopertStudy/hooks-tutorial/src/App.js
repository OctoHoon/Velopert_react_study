import { useState } from "react";
import "./App.css";
import Info from "./Info";
import Counter from "./Counter";
import Average from "./Average";

// const App = () => {
//   const [visible, setVisible] = useState(false);
//   return (
//     <div>
//       <button
//         onClick={() => {
//           setVisible(!visible);
//         }}
//       >
//         {visible ? "숨기기" : "보이기"}
//       </button>
//       <hr />
//       {visible && <Info />}
//     </div>
//   );
// };
// export default App;

const App = () => {
  return <Info />;
};

export default App;
