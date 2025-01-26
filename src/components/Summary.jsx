export default function Summary({ list }) {
  console.log(list.filter((i) => i.completed).length);
  return (
    <div className="w-full flex items-center justify-center p-3">
      <footer className="w-80 bg-slate-50 rounded-lg p-2 text-center">
        {list.length > 0 &&
        list.length == list.filter((i) => i.completed).length ? (
          <p>Alışverişinizi tamamladınız!!!</p>
        ) : (
          <p> Alışveriş seperinizde {list.length} ürün bulunmaktadır.</p>
        )}
      </footer>
    </div>
  );
}
