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
          <p className="mt-6 text-xl text-white/90 max-w-2xl font-light drop-shadow-md">
            Meet the team dedicated to improving myeloma care in Tanzania.
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
