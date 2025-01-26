import { useState } from "react";
import Item from "./Item";

export default function List({ items, deleteItem, deleteAll, editItem }) {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="bg-orange-300 border rounded w-80">
        <h4 className="w-full bg-slate-200 p-1 text-orange-800 flex justify-between">
          <span>Sepet</span>
          <button onClick={deleteAll} className="text-red-500">
            Hepsini sil
          </button>
        </h4>
        <ul className="p-3 gap-2 flex flex-col">
          {items.length > 0 ? (
            items.map((item, index) => (
              <Item
                item={item}
                key={index}
                deleteItem={deleteItem}
                editItem={editItem}
              />
            ))
          ) : (
            <p>Sepet boş</p>
          )}
        </ul>
      </div>
    </div>
  );
}
