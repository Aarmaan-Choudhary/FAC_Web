import profileKatakana from 'assets/katakana-profile.svg?url';
import profileImgLarge from 'assets/profile-large.jpg';
import profileImgPlaceholder from 'assets/profile-placeholder.jpg';
import profileImg from 'assets/profile.jpg';
import { DecoderText } from 'components/DecoderText';
import { Divider } from 'components/Divider';
import { Heading } from 'components/Heading';
import { Image } from 'components/Image';
import { Link } from 'components/Link';
import { Section } from 'components/Section';
import { Text } from 'components/Text';
import { Transition } from 'components/Transition';
import { Fragment, useState } from 'react';
import { media } from 'utils/style';
import styles from './Profile.module.css';

const ProfileText = ({ visible, titleId }) => (
  <Fragment>
    <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
      <DecoderText text="About Us" start={visible} delay={500} />
    </Heading>
    {/* <Text className={styles.description} data-visible={visible} size="l" as="p">
      I’m Hamish, currently I live in Sydney working as a senior product designer at{' '}
      <Link href="https://www.qwilr.com">Qwilr</Link>. My projects include UX design, UI
      animations, and icon illustration. Being comfortable with code allows me to rapidly
      prototype and validate experiences. If you’re interested in the tools and software I
      use check out my <Link href="/uses">uses page</Link>.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      In my spare time I like to practice Brazilian Jiu Jitsu, play video games, and{' '}
      <Link href="/projects/volkihar-knight">make mods</Link>. I’m always down for hearing
      about new projects, so feel free to drop me a line.
    </Text> */}
    <Text>
      {/* Finance and Analytics Club Club aims to spread financial literacy amongst the campus
      community & aspires to make everyone adept in handling Personal Finances. We work at
      the merger of finance and analytics applying analytical understandings and tools in
      the areas of finance and economics. In the era of digitalization, rapid growth
      opportunities in fintech industries have sprung. Triumphing for these opportunities
      requires relevant skills and domain knowledge, which ranges from understanding basic
      financial statements to capital markets, Corporate Finance, Econometrics, art of
      investing, building trading ideas, strategies and FAC (IITK) feels humbled in
      covering these. */}
      Finance and Analytics Club at IITK aims to spread financial literacy amongst the
      campus community & aspires to make everyone adept in handling Personal Finances. We
      work at the merger of finance and analytics applying analytical understandings and
      tools in the areas of finance and economics to tackle real-world challenges. Our
      approaches integrate a blend of advanced algorithmic trading, statistical modeling,
      financial investment strategies, data analytics,e.t.c
    </Text>
    <br />
    <br />
    <Text>
      In collaboration with industry leaders, we offer training sessions, networking
      opportunities, and workshops to bridge the gap between academics and the
      professional world. By fostering a passionate network of students and faculty, we
      strive to create an environment where learning, innovation, and practical experience
      in finance and analytics thrive.
    </Text>
    <br />
    <br />
    <Text>
      FAC IITK timetable is circumscribed with engaging activities throughout the year
      including lectures, presentations, summer projects, assignments, workshops, seminars
      on certifications, guest speakers & Q&A sessions.
    </Text>
    <br />
    <br />
  </Fragment>
);

export const Profile = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.profile}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {visible => (
          <div className={styles.content}>
            <div className={styles.column}>
              <ProfileText visible={visible} titleId={titleId} />
            </div>
            <div className={styles.column}>
              <div className={styles.tag} aria-hidden>
                <Divider
                  notchWidth="64px"
                  notchHeight="8px"
                  collapsed={!visible}
                  collapseDelay={1000}
                />
                <div className={styles.tagText} data-visible={visible}>
                  About Us
                </div>
              </div>
              <div className={styles.image}>
                <Image
                  reveal
                  delay={100}
                  placeholder={profileImgPlaceholder}
                  srcSet={[profileImg, profileImgLarge]}
                  sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                  alt="Chart"
                />
                {/* <svg
                  aria-hidden="true"
                  width="135"
                  height="765"
                  viewBox="0 0 135 765"
                  className={styles.svg}
                  data-visible={visible}
                >
                  <use href={`${profileKatakana}#katakana-profile`} />
                </svg> */}
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
