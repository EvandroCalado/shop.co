export const Quantity = () => {
  return (
    <div>
      <div className="flex items-center gap-4 overflow-hidden rounded-full bg-[#f0f0f0] text-xl">
        <button className="flex-1 px-4 py-2 hover:bg-zinc-400/10">-</button>
        <span>1</span>
        <button className="flex-1 px-4 py-2 hover:bg-zinc-400/10">+</button>
      </div>
    </div>
  );
};
