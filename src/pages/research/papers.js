import fablFactorsLarge from 'assets/research/fabl-factors-large.jpg';
import fablFactorsPlaceholder from 'assets/research/fabl-factors-placeholder.jpg';
import fablFactors from 'assets/research/fabl-factors.jpg';
import fablRadarLarge from 'assets/research/fabl-radar-large.jpg';
import fablRadarPlaceholder from 'assets/research/fabl-radar-placeholder.jpg';
import fablRadar from 'assets/research/fabl-radar.jpg';
import fablStabilityLarge from 'assets/research/fabl-stability-large.jpg';
import fablStabilityPlaceholder from 'assets/research/fabl-stability-placeholder.jpg';
import fablStability from 'assets/research/fabl-stability.jpg';

/**
 * Research papers published by the club. To add a paper:
 *   1. put its PDF in public/research/<slug>.pdf
 *   2. add an entry below (newest first); figures are optional
 * It then appears on /research/ and gets its own page at /research/<slug>/.
 */
export const papers = [
  {
    slug: 'factor-augmented-black-litterman',
    title: 'Factor-Augmented Black-Litterman Portfolio Construction',
    subtitle:
      'with Higher-Moment Optimisation and Covariance Shrinkage: A Multi-Estimator Empirical Study on a Diversified ETF Universe',
    type: 'Research Article',
    authors: [
      { name: 'Aryan Manjunatha', orcid: 'https://orcid.org/0009-0001-1660-3397' },
      { name: 'Aarmaan Choudhary', orcid: 'https://orcid.org/0009-0007-5480-6674' },
      { name: 'Archit Rahalkar', orcid: 'https://orcid.org/0009-0000-4887-4960' },
    ],
    affiliation: 'Finance and Analytics Club, Indian Institute of Technology Kanpur',
    date: 'August 2026',
    pages: 35,
    pdf: '/research/factor-augmented-black-litterman.pdf',
    summary:
      'A Black-Litterman framework that combines Bayesian return estimation, five covariance estimators, higher-moment optimisation and risk parity on a twelve-ETF, nine-asset-class universe, and shows that covariance conditioning, not point-estimate accuracy, drives allocation stability.',
    keywords: [
      'Black-Litterman',
      'Covariance shrinkage',
      'Fama-French factors',
      'Higher moments',
      'Risk parity',
      'CVaR',
      'Random matrix theory',
      'Bayesian allocation',
    ],
    abstract: [
      'In this paper, we develop a factor-augmented Black-Litterman portfolio framework that integrates Bayesian return estimation, multi-estimator covariance analysis, higher-moment optimisation, and risk-parity diversification. We benchmark five covariance estimators across three risk-aversion regimes and four optimisation objectives using twelve ETFs spanning nine asset classes over 1,509 daily observations.',
      'A threshold condition number at κ ≈ 10 separates estimators into different regimes: the Ledoit-Wolf estimator activates all twelve assets, while four ill-conditioned alternatives converge to concentrated six-asset portfolios. The BL-Optimal portfolio generates a strong annualised alpha of +17.15% (t = 2.08, p = 0.037), which is confirmed against the equal-weight benchmark by the Jobson-Korkie test (z = +2.42, p = 0.016). The second-order stochastic dominance comparison shows that the higher-moment portfolio dominates the minimum-CVaR allocation.',
      'This research is the first multi-estimator covariance propagation analysis in a full BL pipeline, and the first integration of BL-posterior returns with MVSK optimisation.',
    ],
    stats: [
      { value: '12', label: 'ETFs, screened from 96' },
      { value: '9', label: 'asset classes' },
      { value: '1,509', label: 'daily observations, 2020–2025' },
      { value: '5', label: 'covariance estimators' },
    ],
    findings: [
      {
        title: 'A condition-number threshold at κ ≈ 10',
        text: 'Only Ledoit-Wolf (κ = 5.9) falls below it. Sample (548.3), RMT (509.0), OAS (484.6) and nonlinear shrinkage (528.2) produce statistically indistinguishable allocations despite their different estimation philosophies.',
      },
      {
        title: 'Well-conditioned covariance diversifies; ill-conditioned covariance concentrates',
        text: 'Ledoit-Wolf and the BL posterior activate all twelve assets (effective N = 7.13), while the ill-conditioned estimators collapse to six-asset corner solutions with 3.2× larger bootstrap dispersion.',
      },
      {
        title: 'Significant alpha for the BL-Optimal portfolio',
        text: 'Seven-factor attribution (Newey-West HAC) gives an annualised alpha of +17.15% (t = 2.08, p = 0.037) and an appraisal ratio of 1.349; the Jobson-Korkie-Memmel test confirms Sharpe superiority over 1/N (z = 2.42, p = 0.016).',
      },
      {
        title: 'Higher moments matter',
        text: 'Every asset rejects normality. The mean-variance-skewness-kurtosis portfolio achieves the highest expected return (10.5%) and second-order stochastically dominates the minimum-CVaR portfolio.',
      },
      {
        title: 'Risk-based construction limits drawdowns',
        text: 'The equal-weight portfolio draws down −50.77%, against −6.8% to −16.1% for risk-based constructions.',
      },
      {
        title: 'Black-Litterman as Bayesian shrinkage',
        text: 'The posterior correlates strongly with the equilibrium prior (ρ = 0.837) and weakly with historical means (0.339), behaving like a James-Stein shrinkage estimator for expected returns.',
      },
    ],
    figures: [
      {
        srcSet: [fablFactors, fablFactorsLarge],
        placeholder: fablFactorsPlaceholder,
        alt: 'Line chart of cumulative growth of $1 for the Fama-French five factors and momentum, 2020–2025, with drawdowns below.',
        caption:
          'Fama-French five-factor and momentum cumulative performance (log scale) and drawdown profiles, 2020–2025.',
      },
      {
        srcSet: [fablStability, fablStabilityLarge],
        placeholder: fablStabilityPlaceholder,
        alt: 'Bar chart of portfolio-weight standard deviation across 1,000 bootstrap resamples for each covariance estimator.',
        caption:
          'Bootstrap weight instability across 1,000 resamples for each covariance estimator (lower is more stable).',
      },
      {
        srcSet: [fablRadar, fablRadarLarge],
        placeholder: fablRadarPlaceholder,
        alt: 'Radar chart comparing portfolios on Sharpe, return, volatility, skew, kurtosis, CVaR, Omega and Sortino.',
        caption:
          'Multi-metric radar scorecard: no portfolio dominates on every metric, so the efficient set is genuinely multi-dimensional.',
      },
    ],
  },
];

export const getPaper = slug => papers.find(paper => paper.slug === slug);

/** "A, B and C" */
export const authorNames = paper => {
  const names = (paper.authors || []).map(author => author.name);
  return names.length > 1
    ? `${names.slice(0, -1).join(', ')} and ${names[names.length - 1]}`
    : names[0] || '';
};
