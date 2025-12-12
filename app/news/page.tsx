import { news } from "@/data/site";
import { Section, SectionTitle, SectionSubtitle } from "@/components/section";
import { CardGrid } from "@/components/card-grid";

export default function NewsPage() {
  // Mock data for annual events
  const annualEvents = [
    {
      title: "TMRG Annual Symposium 2025",
      description: "Join us for our annual gathering of researchers and clinicians.",
      tag: "Upcoming"
    },
    {
      title: "World Cancer Day Event",
      description: "Community awareness and screening programs.",
      tag: "Event"
    },
    {
      title: "Myeloma Awareness Month",
      description: "Activities and workshops throughout March.",
      tag: "Campaign"
    }
  ];

  return (
    <main>
      {/* Hero Section matching CMRG style with African context */}
      <div className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
        {/* Background Image - Community/Event context */}
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"
          aria-hidden="true"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-brand-teal/60 mix-blend-multiply" />
        
        {/* Content */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight drop-shadow-lg">
            News & Events
          </h1>
          <p className="mt-6 text-xl text-white/90 max-w-2xl font-light drop-shadow-md">
            Stay updated with our latest activities and announcements.
          </p>
        </div>
      </div>

      <Section>
        <SectionTitle title="Annual Events" />
        <SectionSubtitle subtitle="Key events in our calendar." />
        <CardGrid items={annualEvents} />
      </Section>

      <Section background="alt">
        <SectionTitle title={news.title} />
        <SectionSubtitle subtitle={news.subtitle} />
        <CardGrid items={news.items} />
      </Section>
    </main>
  );
}
