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
      {/* Hero Section - Redesigned with Video Background */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-scientists-working-in-a-laboratory-4538-large.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-brand-navy/30 mix-blend-multiply" />

        {/* Content */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4 pt-20">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight drop-shadow-lg max-w-6xl leading-tight">
            ADVANCING MYELOMA RESEARCH
            <br />
            <span className="text-brand-teal">ACROSS TANZANIA</span>
          </h1>
          <p className="mt-8 text-2xl md:text-3xl text-white/90 font-light drop-shadow-md max-w-3xl">
            Improving diagnosis, treatment, and outcomes.
          </p>
        </div>
      </section>

      {/* 3-Column Feature Section */}
      <section className="grid md:grid-cols-3">
        {/* Feature 1: Research */}
        <div className="relative h-80 group overflow-hidden">
          <div className="absolute inset-0 bg-gray-900">
            {/* Placeholder for image */}
            <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-60 group-hover:opacity-40 transition duration-500"></div>
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6 text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-12 mb-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
              />
            </svg>
            <h3 className="text-3xl font-bold mb-2">Research</h3>
            <p className="opacity-0 group-hover:opacity-100 transition duration-300 transform translate-y-4 group-hover:translate-y-0">
              Leading clinical trials and registry studies.
            </p>
          </div>
        </div>

        {/* Feature 2: Education */}
        <div className="relative h-80 group overflow-hidden">
          <div className="absolute inset-0 bg-brand-navy">
            <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-60 group-hover:opacity-40 transition duration-500"></div>
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6 text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-12 mb-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.26 10.147a60.436 60.436 0 0 0-.491 6.347A48.627 48.627 0 0 1 12 20.904a48.627 48.627 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.57 50.57 0 0 0-2.658-.813A59.905 59.905 0 0 1 12 3.493a59.902 59.902 0 0 1 10.499 5.221 69.17 69.17 0 0 0-2.658.814m-15.482 0A50.697 50.697 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
              />
            </svg>
            <h3 className="text-3xl font-bold mb-2">Education</h3>
            <p className="opacity-0 group-hover:opacity-100 transition duration-300 transform translate-y-4 group-hover:translate-y-0">
              Training clinicians and building capacity.
            </p>
          </div>
        </div>

        {/* Feature 3: Advocacy */}
        <div className="relative h-80 group overflow-hidden">
          <div className="absolute inset-0 bg-gray-800">
            <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-60 group-hover:opacity-40 transition duration-500"></div>
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6 text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-12 mb-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 0 1-1.44-4.282m3.102.069a18.03 18.03 0 0 1-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 0 1 8.835 2.535M10.34 6.66a23.847 23.847 0 0 0 8.835-2.535m0 0A23.74 23.74 0 0 0 18.795 3m.38 1.125a23.91 23.91 0 0 1 1.014 5.795 23.92 23.92 0 0 1-1.014 5.795m0-11.59a23.877 23.877 0 0 1 4.498 5.795 23.877 23.877 0 0 1-4.498 5.795"
              />
            </svg>
            <h3 className="text-3xl font-bold mb-2">Advocacy</h3>
            <p className="opacity-0 group-hover:opacity-100 transition duration-300 transform translate-y-4 group-hover:translate-y-0">
              Improving access to care and treatment.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-600 mb-16">
            Clinical Trials
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            <div>
              <div className="text-6xl font-bold text-brand-navy mb-2">9</div>
              <div className="text-gray-500 uppercase tracking-wide text-sm">
                Trials
              </div>
            </div>
            <div>
              <div className="text-6xl font-bold text-brand-navy mb-2">21</div>
              <div className="text-gray-500 uppercase tracking-wide text-sm">
                Sites
              </div>
            </div>
            <div>
              <div className="text-6xl font-bold text-brand-navy mb-2">
                350+
              </div>
              <div className="text-gray-500 uppercase tracking-wide text-sm">
                Patients Enrolled
              </div>
            </div>
            <div>
              <div className="text-6xl font-bold text-brand-navy mb-2">
                3,303
              </div>
              <div className="text-gray-500 uppercase tracking-wide text-sm">
                Cycles of Treatment
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-600 mb-16">
            Real-World Evidence
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-6xl font-bold text-brand-navy mb-2">16</div>
              <div className="text-gray-500 uppercase tracking-wide text-sm">
                Participating Centres
              </div>
            </div>
            <div>
              <div className="text-6xl font-bold text-brand-navy mb-2">
                8,387
              </div>
              <div className="text-gray-500 uppercase tracking-wide text-sm">
                Patients Enrolled
              </div>
            </div>
            <div>
              <div className="text-6xl font-bold text-brand-navy mb-2">5</div>
              <div className="text-gray-500 uppercase tracking-wide text-sm">
                Manuscripts Published
              </div>
            </div>
            <div>
              <div className="text-6xl font-bold text-brand-navy mb-2">13</div>
              <div className="text-gray-500 uppercase tracking-wide text-sm">
                Abstracts Published
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Original Content Sections (kept for content but styled down) */}
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

      <Section id="contact">
        <SectionTitle title={contact.title} />
        <SectionSubtitle subtitle={contact.subtitle} />
        <div className="section-narrow grid gap-8 lg:grid-cols-2 lg:items-start">
          <div className="card space-y-4">
            <h3 className="text-lg font-semibold text-brand-navy">Reach us</h3>
            <p className="text-gray-700">
              Email:{" "}
              <a
                className="text-brand-teal"
                href={`mailto:${contact.email}`}
              >
                {contact.email}
              </a>
            </p>
            <p className="text-gray-700">
              For referrals, partnerships, and media inquiries.
            </p>
            <ListWithIcons items={contact.highlights} />
          </div>
          <div className="card">
            <ContactForm formAction={contact.formAction} />
          </div>
        </div>
      </Section>
    </main>
  );
}
