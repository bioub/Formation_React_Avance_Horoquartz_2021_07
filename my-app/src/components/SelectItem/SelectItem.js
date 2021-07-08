import style from './SelectItem.module.scss';

function SelectItem({ item = '', onSelected = () => {} }) {
  return (
    <div className={style.host} onClick={() => onSelected(item)}>
      {item}
    </div>
  );
}

export default SelectItem;
