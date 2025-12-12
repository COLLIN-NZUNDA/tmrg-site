import { researchPrograms, publications, studies } from "@/data/site";
import { Section, SectionTitle, SectionSubtitle } from "@/components/section";
import { CardGrid } from "@/components/card-grid";

export default function ResearchPage() {
  return (
    <main>
      {/* Hero Section matching CMRG style with African context */}
      <div className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
        {/* Background Image - Research/Lab context */}
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=2080&auto=format&fit=crop')] bg-cover bg-center"
          aria-hidden="true"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-brand-navy/60 mix-blend-multiply" />
        
        {/* Content */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight drop-shadow-lg">
            Research
          </h1>
          <p className="mt-6 text-xl text-white/90 max-w-2xl font-light drop-shadow-md">
            Advancing knowledge through clinical trials and translational research.
          </p>
        </div>
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
