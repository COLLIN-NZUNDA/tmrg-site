import { researchPrograms, publications, studies } from "@/data/site";
import { Section, SectionTitle, SectionSubtitle } from "@/components/section";
import { CardGrid } from "@/components/card-grid";

export default function ResearchPage() {
  return (
    <main>
      <div className="bg-brand-navy py-16 text-center text-white">
        <h1 className="text-4xl font-bold">Research</h1>
        <p className="mt-4 text-lg text-white/80">
          Advancing knowledge through clinical trials and translational research.
        </p>
      </div>

      <Section>
        <SectionTitle title="Translational Research" />
        <SectionSubtitle subtitle={researchPrograms.subtitle} />
        <CardGrid items={researchPrograms.items} />
      </Section>

      <Section background="alt">
        <SectionTitle title={studies.title} />
        <SectionSubtitle subtitle={studies.subtitle} />
        <CardGrid items={studies.items} />
      </Section>

      <Section>
        <SectionTitle title={publications.title} />
        <SectionSubtitle subtitle={publications.subtitle} />
        <CardGrid items={publications.items} />
      </Section>
    </main>
  );
}
