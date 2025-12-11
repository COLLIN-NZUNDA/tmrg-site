type CTA = { label: string; href: string };

export function CTAButtons({
  primary,
  secondary
}: {
  primary: CTA;
  secondary?: CTA;
}) {
  return (
    <div className="flex flex-wrap gap-3">
      <a className="btn-primary" href={primary.href}>
        {primary.label}
      </a>
      {secondary && (
        <a className="btn-secondary" href={secondary.href}>
          {secondary.label}
        </a>
      )}
    </div>
  );
}
