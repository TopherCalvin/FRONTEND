import { useState } from "react";

export default function ToDoListPage() {
  const [newDate, setnewDate] = useState("");
  const [newToDo, setnewToDo] = useState("");
  const [List, setList] = useState([]);
  //   function tampungTeks(event) {
  //     setnewToDo(event.target.value);
  //   }
  //   function tampungTanggal(event) {
  //     setnewDate(event.target.value);
  //   }

  function tampung() {
    setnewDate(document.getElementById("tanggal").value);
    setnewToDo(document.getElementById("teks").value);
  }

  function Add() {
    setList([...List, { todo: `saya mau ${newToDo}`, date: newDate }]);
    document.getElementById("tanggal").value = "";
    document.getElementById("teks").value = "";
  }
  console.log(List);

  return (
    <>
      <div>
        <input type="date" name="" id="tanggal" onChange={tampung} />
        <input
          type="text"
          name=""
          id="teks"
          onChange={tampung}
          placeholder="Kegiatan"
        />
        <button onClick={Add}>Add</button>
      </div>
      <div>
        {List.map((val) => (
          <div>
            {val.date} {val.todo}
          </div>
        ))}
      </div>
    </>
  );
}
