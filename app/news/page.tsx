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
      <div className="bg-brand-teal py-16 text-center text-white">
        <h1 className="text-4xl font-bold">News & Events</h1>
        <p className="mt-4 text-lg text-white/80">
          Stay updated with our latest activities and announcements.
        </p>
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
