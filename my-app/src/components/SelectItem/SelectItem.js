import style from './SelectItem.module.scss';

function SelectItem({ item = '', onSelected = () => {}, renderItem }) {
  console.log('render SelectItem');
  return (
    <div className={style.host} onClick={() => onSelected(item)}>
      {renderItem ? renderItem(item) : item}
    </div>
  );
}

export default SelectItem;
