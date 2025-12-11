export function BadgeRow({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-3">
      {items.map((i) => (
        <span
          key={i}
          className="rounded-full bg-white px-4 py-2 text-sm font-medium text-brand-navy shadow-sm ring-1 ring-gray-200"
        >
          {i}
        </span>
      ))}
    </div>
  );
}
