import {
  about,
  hero,
  highlights,
  researchPrograms,
  studies,
  publications,
  team,
  partners,
  resources,
  news,
  contact
} from "@/data/site";
import { Section, SectionTitle, SectionSubtitle } from "@/components/section";
import { CTAButtons } from "@/components/cta-buttons";
import { CardGrid } from "@/components/card-grid";
import { ListWithIcons } from "@/components/list-with-icons";
import { ContactForm } from "@/components/contact-form";
import { BadgeRow } from "@/components/badge-row";

export default function Page() {
  return (
    <main>
      <section className="section bg-gradient-to-br from-brand-light to-white">
        <div className="section-wide grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <p className="badge">{hero.kicker}</p>
            <h1 className="text-4xl font-bold text-brand-navy md:text-5xl">
              {hero.title}
            </h1>
            <p className="text-lg text-gray-700">{hero.subtitle}</p>
            <CTAButtons primary={hero.primaryCta} secondary={hero.secondaryCta} />
            <div className="flex flex-wrap gap-3 pt-4 text-sm text-gray-600">
              {hero.highlights.map((h) => (
                <span
                  key={h}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 shadow-sm ring-1 ring-gray-200"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-teal" />
                  {h}
                </span>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -left-8 -top-8 h-24 w-24 rounded-3xl bg-brand-teal/10 blur-3xl" />
            <div className="absolute -right-8 -bottom-10 h-28 w-28 rounded-3xl bg-brand-navy/10 blur-3xl" />
            <div className="card relative z-10">
              <h3 className="text-xl font-semibold text-brand-navy mb-3">Our Focus</h3>
              <ListWithIcons items={highlights} />
            </div>
          </div>
        </div>
      </section>

      <Section>
        <SectionTitle title={about.title} />
        <SectionSubtitle subtitle={about.subtitle} />
        <div className="section-narrow text-gray-700 space-y-4">
          {about.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </Section>

      <Section background="alt">
        <SectionTitle title={researchPrograms.title} />
        <SectionSubtitle subtitle={researchPrograms.subtitle} />
        <CardGrid items={researchPrograms.items} />
      </Section>

      <Section>
        <SectionTitle title={studies.title} />
        <SectionSubtitle subtitle={studies.subtitle} />
        <CardGrid items={studies.items} />
      </Section>

      <Section background="alt">
        <SectionTitle title={publications.title} />
        <SectionSubtitle subtitle={publications.subtitle} />
        <CardGrid items={publications.items} />
      </Section>

      <Section>
        <SectionTitle title={team.title} />
        <SectionSubtitle subtitle={team.subtitle} />
        <CardGrid items={team.members} columns={3} />
      </Section>

      <Section background="alt">
        <SectionTitle title={partners.title} />
        <SectionSubtitle subtitle={partners.subtitle} />
        <BadgeRow items={partners.items} />
      </Section>

      <Section>
        <SectionTitle title={resources.title} />
        <SectionSubtitle subtitle={resources.subtitle} />
        <CardGrid items={resources.items} />
      </Section>

      <Section background="alt">
        <SectionTitle title={news.title} />
        <SectionSubtitle subtitle={news.subtitle} />
        <CardGrid items={news.items} />
      </Section>

      <Section>
        <SectionTitle title={contact.title} />
        <SectionSubtitle subtitle={contact.subtitle} />
        <div className="section-narrow grid gap-8 lg:grid-cols-2 lg:items-start">
          <div className="card space-y-4">
            <h3 className="text-lg font-semibold text-brand-navy">Reach us</h3>
            <p className="text-gray-700">
              Email: <a className="text-brand-teal" href={`mailto:${contact.email}`}>{contact.email}</a>
            </p>
            <p className="text-gray-700">For referrals, partnerships, and media inquiries.</p>
            <ListWithIcons items={contact.highlights} />
          </div>
          <div className="card">
            <ContactForm formAction={contact.formAction} />
          </div>
        </div>
      </Section>

      <footer className="bg-brand-navy text-white">
        <div className="section-wide py-8 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-white/80">
            Tanzanian Myeloma Research Group (TMRG). Improving myeloma care across Tanzania.
          </p>
          <p className="text-sm text-white/60">© {new Date().getFullYear()} TMRG.</p>
        </div>
      </footer>
    </main>
  );
}
