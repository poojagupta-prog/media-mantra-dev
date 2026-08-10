import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <main id="main-content" className="flex flex-1 flex-col pb-24 pt-16 text-mm-cream">
      <Container className="flex flex-1 flex-col justify-center gap-8 py-32">
        <p className="text-[10px] font-semibold uppercase tracking-[0.45em] text-mm-gold">404</p>
        <h1 className="font-display text-4xl font-semibold md:text-5xl">This chapter is unpublished.</h1>
        <p className="max-w-lg text-mm-light">
          The URL may have migrated in our archive. Navigate home or open a briefing with our global desk.
        </p>
        <div className="flex flex-wrap gap-4 pt-6">
          <Button asChild>
            <Link href="/">Home</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/contact">Contact</Link>
          </Button>
        </div>
      </Container>
    </main>
  );
}
