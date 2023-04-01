import logo from "./logo.svg";
import "./App.css";
import Profile, { Propicts, Data } from "./components/Profile";

// function App() {
//   return (
//     <div>
//       <h1
//         style={{ color: "red", fontFamily: "sans-serif", paddingLeft: "12px" }}
//       >
//         Hallo Warga Batam!
//       </h1>
//       <h1 className="judul">welcome to NDP</h1>
//     </div>
//   );
// }
const App = () => {
  const judul = "welcome to my house";
  function laler() {
    alert("hello");
  }
  return (
    <div style={{ textAlign: "center" }}>
      <h1
        style={{ color: "red", fontFamily: "sans-serif", paddingLeft: "12px" }}
      >
        Hallo Warga Batam!
      </h1>
      <h1 className="judul">{judul}</h1>
      <button style={{ marginLeft: "10px" }} onClick={laler}>
        ok
      </button>
      <Profile color="blue" fontSize="40px" />
      <Propicts value={judul} />
      <Data />
    </div>
  );
};

export default App;
