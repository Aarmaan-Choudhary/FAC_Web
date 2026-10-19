import { Button } from 'components/Button';
import { Footer } from 'components/Footer';
import { Heading } from 'components/Heading';
import { Image } from 'components/Image';
import { Meta } from 'components/Meta';
import { Text } from 'components/Text';
import {
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from 'layouts/Project';
import { Fragment } from 'react';
import { media } from 'utils/style';
import { authorNames, getPaper } from './papers';
import styles from './Research.module.css';

export const ResearchPaper = ({ slug }) => {
  const paper = getPaper(slug);
  const [hero, ...figures] = paper.figures || [];

  return (
    <Fragment>
      <Meta title={paper.title} prefix="Research" description={paper.summary} />
      <ProjectContainer>
        <ProjectHeader
          title={paper.title}
          description={paper.subtitle}
          url={paper.pdf}
          linkLabel="Open PDF"
          roles={[authorNames(paper), paper.date, `${paper.pages} pages`].filter(Boolean)}
        />

        {hero && (
          <ProjectSection padding="top">
            <ProjectSectionContent>
              <figure className={styles.figure}>
                <Image
                  reveal
                  delay={300}
                  srcSet={hero.srcSet}
                  placeholder={hero.placeholder}
                  alt={hero.alt}
                  sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
                />
                <Text as="figcaption" size="s" secondary className={styles.caption}>
                  {hero.caption}
                </Text>
              </figure>
            </ProjectSectionContent>
          </ProjectSection>
        )}

        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Abstract</ProjectSectionHeading>
              {paper.abstract.map(paragraph => (
                <ProjectSectionText key={paragraph.slice(0, 32)}>{paragraph}</ProjectSectionText>
              ))}
              <ul className={styles.keywords} aria-label="Keywords">
                {paper.keywords.map(keyword => (
                  <li key={keyword} className={styles.keyword}>
                    {keyword}
                  </li>
                ))}
              </ul>
              <div className={styles.authors}>
                <Heading level={5} as="h3" className={styles.authorsTitle}>
                  Authors
                </Heading>
                <ul className={styles.authorList}>
                  {paper.authors.map(author => (
                    <li key={author.name} className={styles.author}>
                      <Text size="m">{author.name}</Text>
                      {author.orcid && (
                        <a
                          className={styles.orcid}
                          href={author.orcid}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`ORCID iD of ${author.name}`}
                        >
                          <span className={styles.orcidBadge} aria-hidden>
                            iD
                          </span>
                          {author.orcid.replace('https://', '')}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
                {paper.affiliation && (
                  <Text size="s" as="p" secondary className={styles.affiliation}>
                    {paper.affiliation}
                  </Text>
                )}
              </div>
            </ProjectTextRow>
            {!!paper.stats?.length && (
              <dl className={styles.stats}>
                {paper.stats.map(stat => (
                  <div key={stat.label} className={styles.stat}>
                    <dt className={styles.statValue}>{stat.value}</dt>
                    <dd className={styles.statLabel}>{stat.label}</dd>
                  </div>
                ))}
              </dl>
            )}
          </ProjectSectionContent>
        </ProjectSection>

        {!!paper.findings?.length && (
          <ProjectSection light>
            <ProjectSectionContent>
              <ProjectTextRow width="m">
                <ProjectSectionHeading>Key findings</ProjectSectionHeading>
              </ProjectTextRow>
              <ol className={styles.findings}>
                {paper.findings.map(finding => (
                  <li key={finding.title} className={styles.finding}>
                    <Heading level={5} as="h3" className={styles.findingTitle}>
                      {finding.title}
                    </Heading>
                    <Text as="p" size="m" secondary>
                      {finding.text}
                    </Text>
                  </li>
                ))}
              </ol>
            </ProjectSectionContent>
          </ProjectSection>
        )}

        {!!figures.length && (
          <ProjectSection>
            <ProjectSectionContent>
              <div className={styles.figureGrid}>
                {figures.map(figure => (
                  <figure key={figure.caption} className={styles.figure}>
                    <Image
                      reveal
                      srcSet={figure.srcSet}
                      placeholder={figure.placeholder}
                      alt={figure.alt}
                      sizes={`(max-width: ${media.tablet}px) 100vw, 45vw`}
                    />
                    <Text as="figcaption" size="s" secondary className={styles.caption}>
                      {figure.caption}
                    </Text>
                  </figure>
                ))}
              </div>
            </ProjectSectionContent>
          </ProjectSection>
        )}

        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Read the full paper</ProjectSectionHeading>
              <ProjectSectionText>
                The complete paper covers the literature review, methodology, all empirical
                results, tables and references.
              </ProjectSectionText>
              <div className={styles.actions}>
                <Button iconHoverShift icon="link" href={paper.pdf}>
                  Open PDF
                </Button>
                <Button secondary href={paper.pdf} download>
                  Download
                </Button>
              </div>
            </ProjectTextRow>
            <div className={styles.viewer}>
              <iframe
                className={styles.viewerFrame}
                src={`${paper.pdf}#view=FitH`}
                title={`${paper.title} (PDF)`}
                loading="lazy"
              />
            </div>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
