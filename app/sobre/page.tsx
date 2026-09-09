import { sectionTitleStyles as titleStyles } from '@/components/ui/SectionTitle/SectionTitle.styles';
import { about } from '@/data/about';
import { pageStyles as styles } from './page.styles';

export default function AboutPage() {
  return (
    <main className={styles.main}>
      <div className={styles.section}>
        <div className={styles.container}>
          <section aria-labelledby="sobre-mim">
            <header className={titleStyles.container}>
              <h1 id="sobre-mim" className={titleStyles.title}>
                Sobre <span className={titleStyles.highlightedText}>Mim</span>
              </h1>
              <div className={titleStyles.divider(false)} aria-hidden="true" />
            </header>
            <div className={styles.introduction}>
              {about.biography.map((paragraph) => (
                <p key={paragraph} className={styles.paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>

          <div className={styles.sections}>
            <section aria-labelledby="trajetoria">
              <h2 id="trajetoria" className={styles.sectionTitle}>Minha trajetória</h2>
              <div className={styles.journey}>
                {about.journey.map((paragraph) => (
                  <p key={paragraph} className={styles.journeyItem}>{paragraph}</p>
                ))}
              </div>
            </section>

            <section aria-labelledby="processo">
              <h2 id="processo" className={styles.sectionTitle}>Como eu trabalho</h2>
              <p className={styles.paragraph}>{about.workProcess.introduction}</p>
              <ol className={styles.steps}>
                {about.workProcess.steps.map((step) => (
                  <li key={step} className={styles.step}>{step}</li>
                ))}
              </ol>
              <div className={styles.prose}>
                {about.workProcess.principles.map((paragraph) => (
                  <p key={paragraph} className={styles.paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>

            <section aria-labelledby="interesses">
              <h2 id="interesses" className={styles.sectionTitle}>Áreas de interesse</h2>
              <BulletList items={about.interests} columns />
            </section>

            <section aria-labelledby="formacao">
              <h2 id="formacao" className={styles.sectionTitle}>Formação</h2>
              <div className={styles.education}>
                {about.education.map((education) => (
                  <article key={education.title} className={styles.card}>
                    <h3 className={styles.cardTitle}>{education.title}</h3>
                    <p className={styles.educationStatus}>{education.status}</p>
                    <p className={styles.paragraph}>{education.description}</p>
                  </article>
                ))}
              </div>
            </section>

            <section aria-labelledby="evolucao">
              <h2 id="evolucao" className={styles.sectionTitle}>Em evolução</h2>
              <p className={styles.growthIntroduction}>{about.growth.introduction}</p>
              <BulletList items={about.growth.topics} columns />
              <p className={styles.objective}>{about.growth.objective}</p>
            </section>

            <section aria-labelledby="tecnologias">
              <h2 id="tecnologias" className={styles.sectionTitle}>Tecnologias e ferramentas</h2>
              <div className={styles.technologies}>
                {about.technologies.map((category) => (
                  <section key={category.category} className={styles.card}>
                    <h3 className={styles.cardTitle}>{category.category}</h3>
                    <BulletList items={category.items} />
                  </section>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

function BulletList({ items, columns = false }: { items: string[]; columns?: boolean }) {
  return (
    <ul className={columns ? styles.columnsList : styles.bulletList}>
      {items.map((item) => (
        <li key={item} className={styles.bulletItem}>{item}</li>
      ))}
    </ul>
  );
}
