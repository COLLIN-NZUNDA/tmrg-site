import { resources } from "@/data/site";
import { Section, SectionTitle, SectionSubtitle } from "@/components/section";
import { CardGrid } from "@/components/card-grid";

export default function PatientsPage() {
  // Mock data for webinars since it's not in site.ts
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
      <div className="bg-brand-teal py-16 text-center text-white">
        <h1 className="text-4xl font-bold">For Myeloma Patients</h1>
        <p className="mt-4 text-lg text-white/80">
          Resources, support, and educational materials for patients and families.
        </p>
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
