import { useState } from "react";

export default function Form({ addItem }) {
  const [title, setTitle] = useState("");
  const [quantity, setQuantity] = useState(1);
  const submit = (e) => {
    e.preventDefault();
    const item = { id: Date.now(), title, quantity, completed: false };
    addItem(item);
    setTitle("");
    setQuantity(1);
  };
  return (
    <div className="w-full flex justify-center p-4">
      <form
        onSubmit={submit}
        className="border flex flex-col  items-center justify-center p-3 rounded-lg bg-slate-200 gap-2 w-80"
      >
        <div className="flex gap-2 items-center justify-center">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="border rounded-lg h-10 bg-sky-200 placeholder:text-gray-500 p-1 outline-none"
            type="text"
            placeholder="Ürün adı"
          />
          <select
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            required
            className="rounded-lg p-1 w-10 h-8 bg-blue-300 text-gray-800 outline-none "
          >
            {Array.from({ length: 10 }).map((_, i) => (
              <option key={i} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
        </div>
        <button
          className="bg-green-300 w-full rounded-lg h-8 text-gray-800"
          type="submit"
        >
          Ekle
        </button>
      </form>
    </div>
  );
}
