import Container from "../common/container";

export default function Footer() {
  return (
    <footer className="bg-primary pb-8 pt-12 text-primary-foreground md:pt-16">
      <Container>
        <div className="grid gap-8 border-b border-white/25 pb-8 md:grid-cols-2 md:gap-12 md:pb-10">
          <div>
            <h3 className="text-base font-semibold uppercase tracking-[0.14em] opacity-90 md:text-lg">
              Head Office
            </h3>
            <p className="mt-4 text-base leading-relaxed opacity-95 md:text-lg">
              GPO Box 123, Sydney NSW 2000
              <br />
              info@himaaus.com
            </p>
          </div>
          <div>
            <h3 className="text-base font-semibold uppercase tracking-[0.14em] opacity-90 md:text-lg">
              Branch Office
            </h3>
            <p className="mt-4 text-base leading-relaxed opacity-95 md:text-lg">
              Putalisadak, Kathmandu, Nepal
              <br />
              +977-9800000000
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3 pt-6 text-sm opacity-90 md:flex-row md:items-center md:justify-between md:text-base">
          <p>©2026 Hima Aus Education Australia Ptd Ltd. All Rights Reserved</p>
          <p>
            Developed by <span className="font-semibold text-primary-foreground">Youth IT</span>
          </p>
        </div>
      </Container>
    </footer>
  );
}
