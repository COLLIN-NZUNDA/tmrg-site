import clsx from "clsx";

type Item = {
  title: string;
  description: string;
  tag?: string;
};

export function CardGrid({
  items,
  columns = 3
}: {
  items: Item[];
  columns?: 2 | 3;
}) {
  return (
    <div
      className={clsx(
        "grid gap-6",
        columns === 3
          ? "md:grid-cols-2 lg:grid-cols-3"
          : "md:grid-cols-2 lg:grid-cols-2"
      )}
    >
      {items.map((item) => (
        <div key={item.title} className="card space-y-3">
          {item.tag && (
            <span className="text-sm font-semibold text-brand-teal">
              {item.tag}
            </span>
          )}
          <h3 className="text-xl font-semibold text-brand-navy">{item.title}</h3>
          <p className="text-gray-700 leading-relaxed">{item.description}</p>
        </div>
      ))}
    </div>
  );
}
