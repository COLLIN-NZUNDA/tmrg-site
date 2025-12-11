export function ListWithIcons({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-gray-700">
          <span className="mt-1 h-2 w-2 rounded-full bg-brand-green" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
