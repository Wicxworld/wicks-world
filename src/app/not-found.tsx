import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <Container className="py-28">
      <p className="type-label">404</p>
      <h1 className="type-title mt-4">This page is not here.</h1>
      <p className="type-lede mt-5 max-w-md">
        The path does not match a studio page. Start from home, or send an enquiry.
      </p>
      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <ButtonLink href="/">Home</ButtonLink>
        <ButtonLink href="/contact" variant="ghost">
          Start a Project
        </ButtonLink>
      </div>
    </Container>
  );
}
