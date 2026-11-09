import Image from "next/image";
import { projects } from "@/lib/site-data";
import { siteImages } from "@/lib/site-images";
import { Container } from "./ui/Container";
import { Reveal } from "./Reveal";

export function ProjectsGrid() {
  return (
    <section className="section-cream section-pad">
      <Container>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={`${project.location}-${project.state}`} delay={(index % 3) * 70}>
              <figure className="group relative overflow-hidden rounded-[8px] border border-line">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={siteImages.projects[project.image]}
                    alt={`${project.location}, ${project.state} — ${project.type}`}
                    fill
                    className="img-warm object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                </div>
                <figcaption className="absolute inset-x-0 bottom-0 p-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold-soft">
                    {project.type}
                  </p>
                  <p className="mt-1 font-display text-lg font-semibold text-white">
                    {project.location}, {project.state}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
