import { memo } from "react";
import SelectItem from "../SelectItem/SelectItem";

function SelectListItem({items = [], onSelected, renderItem}) {
  return (
    <div className="SelectListItem">
      {items.map((it) => (
          <SelectItem
            item={it}
            key={it}
            onSelected={onSelected}
            renderItem={renderItem}
          />
        ))}
    </div>
  );
}

export default memo(SelectListItem);
