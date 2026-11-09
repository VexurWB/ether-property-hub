import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export function PageShell({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <>
      <Header />
      <main id="main" className={`overflow-x-hidden ${className}`}>
        {children}
      </main>
      <Footer />
    </>
  );
}
