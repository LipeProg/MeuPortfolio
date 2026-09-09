import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import TechBadge from '@/components/ui/TechBadge/TechBadge';
import { projects } from '@/data/projects';
import { notFound } from 'next/navigation';

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {};
  }

  return {
    title: `${project.title} | Luis Felipe`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-canvas pt-16">
      <section className="bg-surface-soft py-20">
        <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/projetos"
            className="mb-8 inline-flex items-center gap-2 font-medium text-muted transition-colors hover:text-accent-strong"
          >
            <ArrowLeft size={18} aria-hidden="true" />
            Voltar para projetos
          </Link>

          <div className="overflow-hidden rounded-lg border border-border-soft bg-surface shadow-soft">
            {project.image && (
              <div className="relative h-64 overflow-hidden bg-accent-soft sm:h-96">
                <Image
                  src={project.image}
                  alt={`Screenshot do projeto ${project.title}`}
                  fill
                  priority
                  sizes="(min-width: 1024px) 896px, 100vw"
                  className="object-cover"
                />
              </div>
            )}

            <div className="p-6 sm:p-10">
              {project.details && (
                <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-accent-strong">
                  {project.details.context}
                </p>
              )}
              <h1 className="text-3xl font-bold text-ink sm:text-4xl">{project.title}</h1>
              <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
                {project.description}
              </p>

              {!project.details && (
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <TechBadge key={technology} technology={technology} />
                  ))}
                </div>
              )}

              {project.details && (
                <div className="mt-10 space-y-10 border-t border-border-soft pt-10">
                  <section>
                    <h2 className="text-2xl font-bold text-ink">Problema</h2>
                    <p className="mt-3 leading-relaxed text-muted">
                      {project.details.problem}
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-ink">Solução desenvolvida</h2>
                    <div className="mt-3 space-y-3 text-muted">
                      {project.details.solution.map((paragraph) => (
                        <p key={paragraph} className="leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </section>

                  <ProjectList
                    title="Principais funcionalidades"
                    items={project.details.features}
                  />

                  <section>
                    <h2 className="text-2xl font-bold text-ink">Tecnologias</h2>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <TechBadge key={technology} technology={technology} />
                      ))}
                    </div>
                  </section>

                  <ProjectList
                    title="O que eu fiz no projeto"
                    items={project.details.contributions}
                  />
                  <ProjectList
                    title="Competências demonstradas"
                    items={project.details.competencies}
                  />

                  {project.details.limitations && (
                    <ProjectList
                      title="Escopo e limitações do MVP"
                      items={project.details.limitations}
                    />
                  )}
                </div>
              )}

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 rounded-lg bg-brand-action px-6 py-3 font-bold text-brand-action-foreground transition-colors hover:bg-brand-action-hover hover:text-brand-action-hover-foreground"
                >
                  Ver no GitHub
                  <ExternalLink size={18} aria-hidden="true" />
                </a>
              )}
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}

function ProjectList({ title, items }: { title: string; items: string[] }) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-ink">{title}</h2>
      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <li
            key={item}
            className="flex gap-3 rounded-lg border border-border-soft bg-canvas p-4 leading-relaxed text-muted"
          >
            <span
              className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent"
              aria-hidden="true"
            />
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
