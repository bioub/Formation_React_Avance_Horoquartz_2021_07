import classnames from 'classnames';
import { useEffect, useRef, useState } from 'react';

import styles from './Select.module.scss';
import SelectItem from '../SelectItem/SelectItem';

function Select({ selected = '', items = [], onSelected, renderItem }) {
  const hostRef = useRef();
  useEffect(() => {
    function callback(event) {
      if (!hostRef.current?.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener('click', callback);
    return () => {
      document.removeEventListener('click', callback);
    };
  }, []);
  const [open, setOpen] = useState(false);
  return (
    <div ref={hostRef} className={styles.host} onClick={(event) => setOpen(!open)}>
      <div className={styles.selected}>{selected}</div>
      <div className={classnames(styles.items, { [styles.close]: !open })}>
        {items.map((it) => (
          <SelectItem
            item={it}
            key={it}
            onSelected={onSelected}
            renderItem={renderItem}
          />
        ))}
      </div>
    </div>
  );
}

export default Select;
