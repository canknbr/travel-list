const Stats = ({ items }) => {
  if (!items.length) {
    return (
      <p className="stats">
        <em>Nothing packed yet</em>
      </p>
    );
  }
  const numItems = items.length;
  const numPackedItems = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPackedItems / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything. Ready to go!"
          : `You have ${numItems} items on your list, and already packed ${numPackedItems}. That's (${percentage}%)`}
      </em>
    </footer>
  );
};

export default Stats;
