import { useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import List from "./components/List";
import Summary from "./components/Summary";

function App() {
  const [list, setList] = useState([]);
  const addItem = (item) => {
    setList((items) => [...items, item]);
  };
  const deleteItem = (id) => {
    setList((items) => [...list.filter((i) => i.id != id)]);
  };
  const deleteAll = () => {
    setList([]);
  };
  const editItem = (nItem) => {
    setList((items) =>
      items.map((item) => (item.id == nItem.id ? nItem : item))
    );
  };
  return (
    <div className="bg-slate-900 min-h-screen">
      <Header />
      <Form addItem={addItem} />
      <List
        items={list}
        deleteItem={deleteItem}
        deleteAll={deleteAll}
        editItem={editItem}
      />
      <Summary list={list} />
    </div>
  );
}

export default App;
