import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import { Data } from "./Components/Data";
import { useState } from "react";
export default function App() {
  return (
    <div className="box">
      <Navbar />
      <Header />

      <Grid data={Data} />
    </div>
  );
}

function Grid({ data }) {
  const [selectedId, setSelectedId] = useState(null);

  function handleSelection(id) {
    setSelectedId(id !== selectedId ? id : null);
  }

  return (
    <div className="grid-container">
      {data.map((item) => (
        <div
          key={item.id}
          className="boxes"
          onClick={() => handleSelection(item.id)}>
          <img src={item.img} alt={item.name} />
          <h1>{item.name}</h1>
          <p>{item.id == selectedId ? item.recipe : item.description}</p>
        </div>
      ))}
    </div>
  );
}
