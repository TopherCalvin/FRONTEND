import { useEffect } from "react";
import { useState } from "react";

export default function OrderList() {
  const [List, setList] = useState([]);
  const [Item, setItem] = useState({ name: "", qty: "", prc: "" });

  const [total, setTotal] = useState(0);

  function deleteItem(idx) {
    const tempArr = [...List]; //shallow copy todolist
    tempArr.splice(idx, 1);
    setList(tempArr);
  }

  function inputHandler(event) {
    const id = event.target.id; //date judul
    const value = event.target.value;
    const tempObj = { ...Item }; // {date: null, judul: "", desc : ""} /{date: "2023/03/30", judul : "", desc: ""}
    tempObj[id] = value; // tempObj['date'] = value, tempObj['judul'] = "makan siang"
    //{date: "2023/03/30", judul : "", desc: ""}  /{date: "2023/03/30", judul : "makan siang", desc: ""}
    setItem(tempObj);
    console.log(tempObj);
  }

  useEffect(() => {
    setTotal(List.reduce((prev, curr) => prev + curr.tot, 0));
  }, [List]);

  //useEffect punya 2 arrg
  // 1. cb
  // 2. array

  //useEffect akan membaca arrg ke 2 yaitu si array
  // di dalam array ada variable todolist
  // apabila todolist isinya berubah
  //maka dia akan menjalan arrg ke 1

  function add() {
    const { name, qty, prc } = Item;
    Item.tot = parseInt(Item.qty) * parseInt(Item.prc);
    if (!name || !qty || !prc) {
      return alert("Data Invalid");
    }
    const tempArr = [...List]; //shallow copy isi array todo list ke tempArr
    tempArr.push(Item); //Push todo { date,judul,desc} => array=> [{date,judul,desc}]
    setList(tempArr);

    setItem({ name: "", qty: "", prc: "" });
  }

  return (
    <center>
      <h1 style={{ color: "black" }}>Receipt</h1>
      <div
        style={{
          width: "400px",
          border: "8px double white",
          padding: "5px",
          marginTop: "20px",
          height: "500px",
          backgroundColor: "grey",
          flexDirection: "column",
          display: "flex",
          gap: "5px",
        }}
      >
        <input
          style={{ height: "28px" }}
          type="text"
          id="name"
          placeholder="Your Order, please"
          onChange={inputHandler}
          value={Item.name}
        />
        <input
          id="qty"
          type="number"
          style={{ height: "20px" }}
          placeholder="qty"
          onChange={inputHandler}
          value={Item.qty}
        ></input>

        <input
          id="prc"
          type="number"
          style={{ height: "50px" }}
          placeholder="item price ..."
          onChange={inputHandler}
          value={Item.prc}
        ></input>

        <button
          style={{
            height: "30px",
            border: "2px solid darkgrey",
            color: "black",
            fontWeight: "bold",
          }}
          onClick={add}
        >
          ADD
        </button>

        <div
          style={{
            backgroundColor: "white",
            width: "400px",
            padding: "10px 0px",
            height: "100%",
            display: "flex",
            gap: "5px",
            flexDirection: "column",
            overflowY: "auto",
          }}
        >
          {List.map((val, idx) => (
            <Cart {...val} delete={() => deleteItem(idx)} />
          ))}
        </div>
      </div>
      <div>
        <h1>
          Total Price :{" "}
          {Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
          }).format(total)}
        </h1>
      </div>
    </center>
  );
}

function Cart(props) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "10px 10px",
        gap: "5px",
        border: "1px solid black",
        height: "50px",
      }}
    >
      <div style={{ width: "150px", padding: "0px 5px", fontWeight: "bold" }}>
        {props.name.length > 10
          ? props.name.substring(0, 10) + "..."
          : props.name}
      </div>
      <div style={{ width: "150px", padding: "0px 5px" }}>
        {" "}
        {"X" + props.qty}
      </div>
      <div style={{ width: "150px", padding: "0px 5px" }}>
        {Intl.NumberFormat("id-ID", {
          style: "currency",
          currency: "IDR",
        }).format(props.prc)}
      </div>
      <div style={{ width: "150px", padding: "0px 5px" }}>
        {Intl.NumberFormat("id-ID", {
          style: "currency",
          currency: "IDR",
        }).format(props.tot)}
      </div>
      <button onClick={props.delete}>delete</button>
    </div>
  );
}
