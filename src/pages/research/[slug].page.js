import { papers } from './papers';

export { ResearchPaper as default } from './ResearchPaper';

export const getStaticPaths = () => ({
  paths: papers.map(paper => ({ params: { slug: paper.slug } })),
  fallback: false,
});

export const getStaticProps = ({ params }) => ({ props: { slug: params.slug } });
