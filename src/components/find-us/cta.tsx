import Button from "../common/button";
import Container from "../common/container";

export default function FindUsCta() {
  return (
    <section className="bg-muted py-16 md:py-24">
      <Container className="text-center">
        <h3 className="text-3xl font-bold text-primary-dark md:text-4xl lg:text-5xl">Ready to Start Your Journey?</h3>
        <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg lg:text-xl">
          Join thousands of successful students who have transformed their lives through our guidance and support.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button variant="secondary">Get Free Consultation</Button>
          <Button>Get in Touch</Button>
        </div>
      </Container>
    </section>
  );
}
