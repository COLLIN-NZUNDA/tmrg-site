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
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left Column: Text Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 md:text-4xl">
                Translational Research
              </h2>
              <div className="mt-4 h-1 w-20 bg-red-600 rounded-full" />
            </div>
            
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
              <p>
                TMRG recognizes the importance of laboratory research to better understand myeloma biology. We are working with multiple centres across Tanzania performing dynamic translational research. Our long-term goal is to create a National Biobank of bio-specimens (blood and bone marrow) to complement our clinical trials. We envision:
              </p>
              <ul className="space-y-4 list-disc pl-5 marker:text-brand-teal">
                <li>
                  Development of a streamlined platform for sample acquisition, transport, and storage,
                </li>
                <li>
                  Direct advancement of myeloma research by linking clinical outcomes with laboratory discoveries.
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="relative h-[400px] w-full overflow-hidden rounded-xl shadow-xl">
            <div 
              className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"
              aria-label="Researchers in a lab"
            />
          </div>
        </div>
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
