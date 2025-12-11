import { team } from "@/data/site";
import { Section, SectionTitle, SectionSubtitle } from "@/components/section";
import { CardGrid } from "@/components/card-grid";

export default function AboutPage() {
  return (
    <main>
      <div className="bg-brand-navy py-16 text-center text-white">
        <h1 className="text-4xl font-bold">About Us</h1>
        <p className="mt-4 text-lg text-white/80">
          Meet the team dedicated to improving myeloma care in Tanzania.
        </p>
      </div>

      <Section>
        <SectionTitle title="Staff Members" />
        <SectionSubtitle subtitle={team.subtitle} />
        <CardGrid items={team.members} columns={3} />
      </Section>
    </main>
  );
}
