const Item = ({
  id,
  description,
  quantity,
  packed,
  deleteItem,
  toggleItem,
}) => {
  return (
    <li>
      <input type="checkbox" value={packed} onChange={() => toggleItem(id)} />
      <span style={packed ? { textDecoration: "line-through" } : {}}>
        {quantity} {description}
      </span>
      <button onClick={() => deleteItem(id)}>❌</button>
    </li>
  );
};

export default Item;
