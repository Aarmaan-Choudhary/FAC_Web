import gamestackTexture2Large from 'assets/gamestack-list-large.jpg';
import gamestackTexture2Placeholder from 'assets/gamestack-list-placeholder.jpg';
import gamestackTexture2 from 'assets/gamestack-list.jpg';
import gamestackTextureLarge from 'assets/gamestack-login-large.jpg';
import gamestackTexturePlaceholder from 'assets/gamestack-login-placeholder.jpg';
import gamestackTexture from 'assets/gamestack-login.jpg';
import mobileTexture2Large from 'assets/mobile2.jpg';
import mobileTexture2Placeholder from 'assets/mobile2.jpg';
import mobileTexture2 from 'assets/mobile2.jpg';
import mobileTextureLarge from 'assets/mobile.jpg';
import mobileTexturePlaceholder from 'assets/mobile.jpg';
import mobileTexture from 'assets/mobile.jpg';
import sliceTextureLarge from 'assets/team.jpeg';
import sliceTexturePlaceholder from 'assets/team.jpeg';
import sliceTexture from 'assets/team.jpeg';
import quantForecastTexture from 'assets/QuantForecast.jpg';
import researchTextureLarge from 'assets/research/fabl-laptop-large.jpg';
import researchTexturePlaceholder from 'assets/research/fabl-laptop-placeholder.jpg';
import researchTexture from 'assets/research/fabl-laptop.jpg';
import sprTextureLarge from 'assets/spr-lesson-builder-dark-large.jpg';
import sprTexturePlaceholder from 'assets/spr-lesson-builder-dark-placeholder.jpg';
import sprTexture from 'assets/spr-lesson-builder-dark.jpg';
import { Footer } from 'components/Footer';
import { Meta } from 'components/Meta';
import { Intro } from 'layouts/Home/Intro';
import { Profile } from 'layouts/Home/Profile';
import { ProjectSummary } from 'layouts/Home/ProjectSummary';
import { useEffect, useRef, useState } from 'react';
import styles from './Home.module.css';

const disciplines = [
  'Quantitative Analysis',
  'Algorithmic Trading',
  'Data Analytics',
  'Financial Strategies',
  'ML in Finance',
];

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const details = useRef();
  const projectFour = useRef();
  const research = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, research, projectFour, details];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Meta
        title=""
        description="Finance & Analytics Club, IIT Kanpur — projects, events, articles and the team
          behind the club's work in finance, economics and data analytics."
      />
      <Intro
        id="intro"
        sectionRef={intro}
        disciplines={disciplines}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <Profile
        id="details"
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
      />
      <ProjectSummary
        id="project-1"
        alternate
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="Projects"
        description="We engage in projects that integrate technical and fundamental analysis with advanced methodologies and tools "
        buttonText="View projects"
        buttonLink="/projects/smart-sparrow"
        model={{
          type: 'phone',
          alt: 'App login screen',
          textures: [
            {
              srcSet: [gamestackTexture, gamestackTextureLarge],
              placeholder: gamestackTexturePlaceholder,
            },
            {
              srcSet: [gamestackTexture2, gamestackTexture2Large],
              placeholder: gamestackTexture2Placeholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-2"
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="Events"
        description="Explore our events like workshops, competitions, talks and sessions in areas of finance "
        buttonText="View Events"
        buttonLink="/articles/events"
        model={{
          type: 'laptop',
          alt: 'Smart Sparrow lesson builder',
          textures: [
            {
              srcSet: [sprTexture, sprTextureLarge],
              placeholder: sprTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-3"
        alternate
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="Articles"
        description="Stay informed and inspired with our latest insights into global finance trends and updates."
        buttonText="View Articles"
        buttonLink="/articles"
        model={{
          type: 'phone',
          alt: 'App login screen',
          textures: [
            {
              srcSet: [mobileTexture, mobileTextureLarge],
              placeholder: mobileTexturePlaceholder,
            },
            {
              srcSet: [mobileTexture2, mobileTexture2Large],
              placeholder: mobileTexture2Placeholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="research"
        sectionRef={research}
        visible={visibleSections.includes(research.current)}
        index={4}
        title="Research Papers"
        description="Original research by our members in quantitative finance — from Black-Litterman portfolio construction to covariance shrinkage and higher-moment optimisation."
        buttonText="Read our research"
        buttonLink="/research/"
        model={{
          type: 'laptop',
          alt: 'Fama-French factor cumulative-performance chart from the club research paper',
          textures: [
            {
              srcSet: [researchTexture, researchTextureLarge],
              placeholder: researchTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-4"
        alternate
        sectionRef={projectFour}
        visible={visibleSections.includes(projectFour.current)}
        index={5}
        title="Team"
        description="Meet the Finance and Analytics Club Team 2024"
        buttonText="View Team"
        buttonLink="/team/"
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: [sliceTexture, sliceTextureLarge],
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />
      {/* <ProjectSummary
        id="project-4" // ID for the new project
        sectionRef={projectFour} // Reference for the new project
        visible={visibleSections.includes(projectThree.current)} // Visibility check
        index={4} // Index of the new project
        title="Previous Sponsors" // Title of the new project
        description="IPO Analysis using DL methods like Neural Networks and NLP's." // Description of the new project
        buttonText="View project" // Button text for the new project
        buttonLink="/projects/new-project" // Link for the new project
        model={{
          type: 'laptop', // Type of device for the image (laptop, phone, etc.)
          alt: 'New project image', // Alt text for the image
          textures: [
            {
              srcSet: [quantForecastTexture, sliceTextureLarge], // Image sources
              placeholder: sliceTexturePlaceholder, // Placeholder image
            },
          ],
        }}
      /> */}
      <Footer />
    </div>
  );
};
