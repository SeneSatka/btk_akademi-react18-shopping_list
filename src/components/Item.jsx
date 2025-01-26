export default function Item({
  item: { title, quantity, completed, id },
  deleteItem,
  editItem,
}) {
  const click = () => {
    deleteItem(id);
  };
  const changeComplete = () => {
    editItem({ title, quantity, id, completed: !completed });
  };
  return (
    <li className=" flex flex-row items-center gap-2 justify-between">
      <div className="">
        <span
          className={`rounded-tl-lg rounded-bl-lg font-semibold bg-green-600  drop-shadow-lg shadow-lg p-1 text-slate-300 ${
            completed ? "line-through" : ""
          }`}
        >
          {quantity}
        </span>
        <span
          className={`rounded-tr-lg rounded-br-lg bg-orange-400 drop-shadow-lg shadow-lg p-1 text-sky-600 ${
            completed ? "line-through" : ""
          }`}
        >
          {title}
        </span>
      </div>
      <div className="flex items-center justify-center gap-2">
        <button
          onClick={changeComplete}
          className={`h-6 w-6 ${
            completed ? "bg-green-300 " : "bg-red-300"
          } rounded-lg border`}
        ></button>
        <button
          onClick={click}
          className="rounded-full h-7 flex justify-center items-center bg-opacity-50 font-semibold bg-slate-900 w-7 drop-shadow-lg shadow-lg p-1 text-red-600"
        >
          X
        </button>
      </div>
    </li>
  );
}
