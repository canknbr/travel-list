import React from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";

import Stats from "./components/Stats";
function App() {
  const [items, setItems] = React.useState([]);
  const handleAddItems = (item) => {
    setItems((items) => [item, ...items]);
  };
  const handleDeleteItem = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };
  const handleToggleItem = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };
  const handleClearList = () => {
    const confirmed = window.confirm(
      "Are you sure you want to clear the list?"
    );
    if (!confirmed) return;
    setItems([]);
  };
  return (
    <div className="app">
      <Logo />
      <Form addItems={handleAddItems} />
      <PackingList
        toggleItem={handleToggleItem}
        deleteItem={handleDeleteItem}
        clearList={handleClearList}
        items={items}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
