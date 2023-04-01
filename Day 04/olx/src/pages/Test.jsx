import { useEffect, useState } from "react";
export default function TestPage() {
  //   let name = "test";
  const [name, setName] = useState("ayam");
  //name=state => variabel
  //setname = setState => function

  const [arrName, setArrName] = useState(["mikhael", "chris", "thomas"]);
  function changeName() {
    const newName = document.getElementById("input").value;
    // console.log(newName);
    // return (name = newName);
    setName(newName);
    console.log(name);
  }
  function add() {
    console.log(arrName);
    setArrName([...arrName, name]);
    setName("");
  }
  function change(val) {
    console.log(val);
    setName(val);
  }

  //   function result() {
  //     const val1 = parseInt(document.getElementById("val3").value);
  //     const val2 = parseInt(document.getElementById("val4").value);
  //     setSum(val1 + val2);
  //   }
  const [sum, setSum] = useState(0);

  const [Angka1, setAngka1] = useState(0);

  const [Angka2, setAngka2] = useState(0);

  function asignAngka(value, className) {
    value = parseInt(value);
    if ("Angka1" === className) {
      setAngka1(value);
    } else {
      setAngka2(value);
    }
  }

  useEffect(() => {
    setSum(Angka1 + Angka2);
  }, [Angka1, Angka2]);

  return (
    <div>
      <h1>Test</h1>
      <h2>{name}</h2>
      <div>
        {arrName.map((val) => (
          <div>{val}</div>
        ))}
      </div>
      <input
        style={{ backgroundColor: "gray" }}
        type="text"
        id="input"
        onChange={changeName}
        value={name}
      />
      <button onClick={add}>Add</button>
      <div>
        <input
          style={{ backgroundColor: "red" }}
          type="text"
          onChange={(event) => change(event.target.value)}
        />
      </div>
      <input
        style={{ backgroundColor: "blue", color: "white" }}
        type="text"
        // onChange={(event) => result()}
        onChange={(event) =>
          asignAngka(event.target.value, event.target.className)
        }
        className="Angka1"
        id="val3"
        defaultValue="0"
      />
      +
      <input
        style={{ backgroundColor: "blue", color: "white" }}
        type="text"
        className="Angka2"
        // onChange={(event) => result()}
        onChange={(event) =>
          asignAngka(event.target.value, event.target.className)
        }
        id="val4"
        defaultValue="0"
      />
      = {sum}
    </div>
  );
}
