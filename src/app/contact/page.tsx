import { ContactForm } from "@/components/forms/ContactForm";
import { Container } from "@/components/ui/Container";
import { site } from "@/content/site";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Contact",
  description:
    "Start a project with Wick's World, a Lagos creative studio. Tell us what you need — film, stills, content, or direction.",
  path: "/contact",
});

export default function ContactPage() {
  const email = site.contact.email;

  return (
    <section className="py-16 sm:py-24">
      <Container className="grid gap-14 lg:grid-cols-12">
        <header className="lg:col-span-5">
          <p className="type-label">Contact</p>
          <h1 className="type-hero mt-4 text-[clamp(2.4rem,6vw,4.8rem)]">
            Let&apos;s build something.
          </h1>
          <p className="mt-6 max-w-md text-[1.05rem] leading-relaxed text-ink/75">
            {site.legalName}. {site.location.line}. Send the brief as it is. We
            will tell you if we are the right studio.
          </p>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-mist">
            There is no public rate card. Estimates are written after this
            conversation. This form is the channel.
          </p>
          {email ? (
            <p className="mt-6">
              <a className="text-sm underline" href={`mailto:${email}`}>
                {email}
              </a>
            </p>
          ) : null}
        </header>
        <div className="lg:col-span-6 lg:col-start-7">
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
