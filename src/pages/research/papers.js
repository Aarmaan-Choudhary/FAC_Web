import chaosDrawdownsLarge from 'assets/research/chaos-drawdowns-large.jpg';
import chaosDrawdownsPlaceholder from 'assets/research/chaos-drawdowns-placeholder.jpg';
import chaosDrawdowns from 'assets/research/chaos-drawdowns.jpg';
import chaosRocLarge from 'assets/research/chaos-roc-large.jpg';
import chaosRocPlaceholder from 'assets/research/chaos-roc-placeholder.jpg';
import chaosRoc from 'assets/research/chaos-roc.jpg';
import chaosWealthLarge from 'assets/research/chaos-wealth-large.jpg';
import chaosWealthPlaceholder from 'assets/research/chaos-wealth-placeholder.jpg';
import chaosWealth from 'assets/research/chaos-wealth.jpg';
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
    slug: 'chaos-invariants-bear-market-regimes',
    title: 'Chaos Invariants Lag Volatility in Bear-Market Regime Detection',
    subtitle: 'Evidence From Three Detectors and Seven US Bear Markets, 1990–2025',
    type: 'Research Article',
    authors: [
      {
        name: 'Aryan Manjunatha',
        orcid: 'https://orcid.org/0009-0001-1660-3397',
        linkedin: 'https://www.linkedin.com/in/aryan-manjunatha-689a82254/',
      },
      {
        name: 'Aarmaan Choudhary',
        orcid: 'https://orcid.org/0009-0007-5480-6674',
        linkedin: 'https://www.linkedin.com/in/aarmaan-c-625558313/',
      },
    ],
    affiliation: 'Finance and Analytics Club, Indian Institute of Technology Kanpur',
    date: 'November 2026',
    pages: 25,
    pdf: '/research/chaos-invariants-bear-market-regimes.pdf',
    summary:
      'Do fractal, Lyapunov and Hurst estimates of equity returns warn of bear markets? Combining them with a hidden Markov model and the VIX across seven US bear markets, this study finds the ensemble classifies bear months well and sharply cuts drawdowns, but the chaos signals lag volatility and the Sharpe-ratio gain is not statistically significant.',
    keywords: [
      'Chaos theory',
      'Fractal dimension',
      'Lyapunov exponent',
      'Hurst exponent',
      'Hidden Markov model',
      'Regime switching',
      'Bear markets',
      'Implied volatility',
      'Model confidence set',
    ],
    abstract: [
      'This study asks whether chaos-theoretic invariants estimated from equity returns carry information about bear-market regimes that is incremental to volatility-based and option-implied signals, and whether any such information survives formal statistical scrutiny. Three invariants — the Higuchi fractal dimension, the Rosenstein largest Lyapunov exponent and the detrended-fluctuation Hurst exponent — are estimated on rolling windows of monthly S&P 500 total returns and combined with a two-state Gaussian hidden Markov model and a standardised VIX signal into an equally weighted ensemble bear probability. The hidden Markov model is estimated only on 1990–1999 and scored thereafter with strictly online forward-filtered probabilities, so the 2000–2025 evaluation period is fully out of sample across seven US bear markets.',
      'Three findings emerge. First, the ensemble is a materially better classifier of bear months than its hidden-Markov or chaos components, with an area under the ROC curve of 0.851 against 0.803 and 0.670 (bootstrap p = 0.005 and p < 0.001), although it is statistically indistinguishable from the VIX signal alone (p = 0.177). Second, the leading property widely attributed to chaos invariants does not survive testing: Granger causality runs from realised volatility to the chaos score rather than the reverse. Third, the improvement in the Sharpe ratio on excess returns, from 0.435 to 0.590, is not statistically significant, Hansen’s test of superior predictive ability fails to reject the buy-and-hold benchmark at moderate risk aversion, and the model confidence set at the 10% level retains every candidate including the benchmark.',
      'The economic case for chaos-augmented regime filtering therefore rests on drawdown mitigation and on the sequence-of-returns risk borne by leveraged or decumulating investors, not on risk-adjusted outperformance that can be demonstrated at conventional significance levels.',
    ],
    stats: [
      { value: '432', label: 'monthly observations, 1990–2025' },
      { value: '312', label: 'out-of-sample months, 2000–2025' },
      { value: '7', label: 'US bear markets' },
      { value: '3', label: 'chaos invariants' },
    ],
    findings: [
      {
        title: 'The ensemble is the best bear-month classifier, but no better than the VIX',
        text: 'Area under the ROC curve is 0.851, against 0.803 for the hidden Markov model and 0.670 for the chaos score (bootstrap p = 0.005 and p < 0.001). It is statistically indistinguishable from the VIX signal alone (p = 0.177).',
      },
      {
        title: 'Chaos invariants lag volatility rather than lead it',
        text: 'Granger causality runs from realised volatility to the chaos score, not the reverse. The chaos signal’s short apparent detection lag is an artifact of its 52.6% unconditional positive rate.',
      },
      {
        title: 'No significant Sharpe-ratio gain',
        text: 'The excess-return Sharpe ratio rises from 0.435 to 0.590, but the improvement is not significant under an asymptotic test (p = 0.223) or a HAC studentised bootstrap (p = 0.484).',
      },
      {
        title: 'Buy-and-hold cannot be rejected',
        text: 'Hansen’s superior-predictive-ability test does not reject the passive benchmark at moderate risk aversion (p = 0.169), and the 10% model confidence set retains every candidate, buy-and-hold included.',
      },
      {
        title: 'Large drawdown reduction',
        text: 'Maximum drawdown falls from −49.0% to −18.9%, and the global-financial-crisis drawdown from −49.0% to −11.2%. The filter matches or improves on buy-and-hold in all seven bear markets.',
      },
      {
        title: 'Directional accuracy is significant',
        text: 'The filter calls the market’s direction correctly 58.7% of the time, significant at the 1% level, which matters for investors exposed to sequence-of-returns risk.',
      },
    ],
    figures: [
      {
        srcSet: [chaosWealth, chaosWealthLarge],
        placeholder: chaosWealthPlaceholder,
        light: true,
        alt: 'Cumulative growth of $1 for buy-and-hold, the ensemble and each detector from 2000 to 2025, with drawdowns below.',
        caption:
          'Cumulative wealth and drawdown of buy-and-hold, the ensemble filter and each single detector, 2000–2025.',
      },
      {
        srcSet: [chaosRoc, chaosRocLarge],
        placeholder: chaosRocPlaceholder,
        light: true,
        alt: 'ROC curves for bear-month classification: ensemble AUC 0.851, VIX 0.818, HMM 0.803, chaos 0.670.',
        caption: 'Receiver operating characteristic curves for bear-month classification, by detector.',
      },
      {
        srcSet: [chaosDrawdowns, chaosDrawdownsLarge],
        placeholder: chaosDrawdownsPlaceholder,
        light: true,
        alt: 'Bar chart of peak-to-trough drawdown in each of seven bear markets for buy-and-hold and each detector.',
        caption: 'Peak-to-trough drawdown in each of the seven bear markets, by detector.',
      },
    ],
  },
  {
    slug: 'factor-augmented-black-litterman',
    title: 'Factor-Augmented Black-Litterman Portfolio Construction',
    subtitle:
      'with Higher-Moment Optimisation and Covariance Shrinkage: A Multi-Estimator Empirical Study on a Diversified ETF Universe',
    type: 'Research Article',
    authors: [
      {
        name: 'Aryan Manjunatha',
        orcid: 'https://orcid.org/0009-0001-1660-3397',
        linkedin: 'https://www.linkedin.com/in/aryan-manjunatha-689a82254/',
      },
      {
        name: 'Aarmaan Choudhary',
        orcid: 'https://orcid.org/0009-0007-5480-6674',
        linkedin: 'https://www.linkedin.com/in/aarmaan-c-625558313/',
      },
      {
        name: 'Archit Rahalkar',
        orcid: 'https://orcid.org/0009-0000-4887-4960',
        linkedin: 'https://www.linkedin.com/in/archit-rahalkar-a59b80312/',
      },
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
