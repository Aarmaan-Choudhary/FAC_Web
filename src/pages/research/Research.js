import { Button } from 'components/Button';
import { Footer } from 'components/Footer';
import { Heading } from 'components/Heading';
import { Meta } from 'components/Meta';
import { Text } from 'components/Text';
import {
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
} from 'layouts/Project';
import RouterLink from 'next/link';
import { Fragment } from 'react';
import { papers } from './papers';
import styles from './Research.module.css';

const title = 'Research Papers';
const description =
  'Original research by members of the Finance & Analytics Club, IIT Kanpur, in quantitative finance, portfolio construction and financial econometrics.';

export const Research = () => (
  <Fragment>
    <Meta title={title} description={description} />
    <ProjectContainer>
      <ProjectHeader title={title} description={description} />
      <ProjectSection padding="none" className={styles.listSection}>
        <ProjectSectionContent width="l">
          <ul className={styles.list}>
            {papers.map(paper => (
              <li key={paper.slug}>
                <article className={styles.card}>
                  <Text className={styles.eyebrow} size="s" secondary>
                    {[paper.type, paper.date, `${paper.pages} pages`].filter(Boolean).join(' · ')}
                  </Text>
                  <RouterLink href={`/research/${paper.slug}/`} scroll={false}>
                    <a className={styles.cardLink}>
                      <Heading className={styles.cardTitle} level={4} as="h2">
                        {paper.title}
                      </Heading>
                    </a>
                  </RouterLink>
                  {paper.subtitle && (
                    <Text className={styles.cardSubtitle} size="m" as="p">
                      {paper.subtitle}
                    </Text>
                  )}
                  <Text className={styles.cardSummary} size="m" as="p" secondary>
                    {paper.summary}
                  </Text>
                  <ul className={styles.keywords} aria-label="Keywords">
                    {paper.keywords.map(keyword => (
                      <li key={keyword} className={styles.keyword}>
                        {keyword}
                      </li>
                    ))}
                  </ul>
                  <div className={styles.actions}>
                    <Button
                      iconHoverShift
                      iconEnd="arrowRight"
                      href={`/research/${paper.slug}/`}
                    >
                      Read paper
                    </Button>
                    <Button secondary icon="link" href={paper.pdf}>
                      PDF
                    </Button>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </ProjectSectionContent>
      </ProjectSection>
    </ProjectContainer>
    <Footer />
  </Fragment>
);
