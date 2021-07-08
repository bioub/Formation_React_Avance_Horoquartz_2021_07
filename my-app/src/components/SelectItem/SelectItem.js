import style from './SelectItem.module.scss';

function SelectItem({ item = '', onSelected = () => {}, renderItem }) {
  return (
    <div className={style.host} onClick={() => onSelected(item)}>
      {renderItem ? renderItem(item) : item}
    </div>
  );
}

export default SelectItem;
