function List({items = [], renderItem}) {
  return (
    <div className="List">
      {items.map((it) => renderItem ? renderItem(it) : <div key={it}>{it}</div>)}
    </div>
  );
}

export default List;
