import SectionTitle from '@/components/ui/SectionTitle/SectionTitle';
import TechBadge from '@/components/ui/TechBadge/TechBadge';
import { experiences } from '@/data/experience';
import { pageStyles as styles } from './page.styles';

export default function ExperiencePage() {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <div className={styles.container}>
          <SectionTitle title="Experiência" highlightedText="Profissional" />

          {experiences.length === 0 ? (
            <p className={styles.emptyState}>
              Nenhuma experiência profissional adicionada até o momento.
            </p>
          ) : (
            <div className={styles.list}>
              {experiences.map((experience) => (
                <article key={experience.id} className={styles.card}>
                  <header>
                    <h2 className={styles.role}>{experience.role}</h2>
                    <p className={styles.organization}>{experience.organization}</p>
                    <p className={styles.period}>{experience.period}</p>
                  </header>
                  <div className={styles.details}>
                    <section>
                      <h3 className={styles.sectionTitle}>Resumo da atuação</h3>
                      <div className={styles.summary}>
                        {experience.description.map((paragraph) => (
                          <p key={paragraph} className={styles.description}>{paragraph}</p>
                        ))}
                      </div>
                    </section>
                    <ExperienceList title="Principais responsabilidades" items={experience.responsibilities} />
                    <ExperienceList title="Frentes de atuação" items={experience.areas} />
                    <ExperienceList title="Principais entregas" items={experience.deliveries} />
                    {experience.technologies.length > 0 && (
                      <section>
                        <h3 className={styles.sectionTitle}>Tecnologias</h3>
                        <ul className={styles.technologies}>
                          {experience.technologies.map((technology) => (
                            <li key={technology}>
                              <TechBadge technology={technology} />
                            </li>
                          ))}
                        </ul>
                      </section>
                    )}
                    <ExperienceList title="Competências demonstradas" items={experience.competencies} />
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

function ExperienceList({ title, items }: { title: string; items?: string[] }) {
  if (!items?.length) return null;

  return (
    <section>
      <h3 className={styles.sectionTitle}>{title}</h3>
      <ul className={styles.items}>
        {items.map((item) => (
          <li key={item} className={styles.item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
