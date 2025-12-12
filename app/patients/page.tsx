import { resources } from "@/data/site";
import { Section, SectionTitle, SectionSubtitle } from "@/components/section";
import { CardGrid } from "@/components/card-grid";

export default function PatientsPage() {
  // Mock data for webinars
  const webinars = [
    {
      title: "Understanding Multiple Myeloma",
      description: "An introduction to myeloma diagnosis and treatment options available in Tanzania.",
      tag: "Webinar"
    },
    {
      title: "Living with Myeloma",
      description: "Patient stories and advice on managing daily life and side effects.",
      tag: "Webinar"
    },
    {
      title: "Diet and Nutrition",
      description: "Nutritional guidance for patients undergoing treatment.",
      tag: "Webinar"
    }
  ];

  return (
    <main>
      {/* Hero Section matching CMRG style with African context */}
      <div className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
        {/* Background Image - African healthcare context */}
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"
          aria-hidden="true"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-brand-teal/60 mix-blend-multiply" />
        
        {/* Content */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight drop-shadow-lg">
            For Myeloma Patients
          </h1>
          <p className="mt-6 text-xl text-white/90 max-w-2xl font-light drop-shadow-md">
            Resources, support, and educational materials for patients and families.
          </p>
        </div>
      </div>

      <Section>
        <SectionTitle title="Patient Webinars" />
        <SectionSubtitle subtitle="Watch our latest educational sessions." />
        <CardGrid items={webinars} />
      </Section>

      <Section background="alt">
        <SectionTitle title={resources.title} />
        <SectionSubtitle subtitle={resources.subtitle} />
        <CardGrid items={resources.items} />
      </Section>
    </main>
  );
}
