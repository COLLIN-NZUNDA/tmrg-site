import clsx from "clsx";

export function Section({
  children,
  background
}: {
  children: React.ReactNode;
  background?: "alt";
}) {
  return (
    <section
      className={clsx("section", background === "alt" && "bg-brand-light/60")}
    >
      <div className="section-wide space-y-10">{children}</div>
    </section>
  );
}

export function SectionTitle({ title }: { title: string }) {
  return (
    <h2 className="text-3xl font-semibold text-brand-navy md:text-4xl">
      {title}
    </h2>
  );
}

export function SectionSubtitle({ subtitle }: { subtitle: string }) {
  return <p className="text-lg text-gray-700 max-w-3xl">{subtitle}</p>;
}
