import { team } from "@/data/site";
import { Section, SectionTitle, SectionSubtitle } from "@/components/section";
import { CardGrid } from "@/components/card-grid";

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section matching CMRG style */}
      <div className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"
          aria-hidden="true"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-brand-navy/40 mix-blend-multiply" />
        
        {/* Content */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight drop-shadow-lg">
            About Us
          </h1>
        </div>
      </div>

      {/* Intro Text with Arrow */}
      <div className="relative bg-white px-4 pb-16 pt-12 text-center">
        {/* Arrow Indicator */}
        <div className="absolute -top-6 left-1/2 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full bg-white shadow-lg ring-1 ring-gray-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6 text-gray-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>

        <div className="mx-auto max-w-4xl">
          <p className="text-xl leading-relaxed text-gray-600 md:text-2xl font-light">
            TMRG is the only organization dedicated solely to myeloma research in
            Tanzania. This uniquely positions us to provide infrastructure and
            expertise in prospective and retrospective studies, and
            administration across Tanzania.
          </p>
        </div>
      </div>

      <Section>
        <SectionTitle title="Staff Members" />
        <SectionSubtitle subtitle={team.subtitle} />
        <CardGrid items={team.members} columns={3} />
      </Section>
    </main>
  );
}
