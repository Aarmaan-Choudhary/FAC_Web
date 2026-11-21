import { Button } from 'components/Button';
import { DecoderText } from 'components/DecoderText';
import { Divider } from 'components/Divider';
import { Footer } from 'components/Footer';
import { Heading } from 'components/Heading';
import { Icon } from 'components/Icon';

import { Image } from 'components/Image';
import profileImgLarge from 'assets/coordinator1.jpg';
import profileImgPlaceholder from 'assets/coordinator1.jpg';
import profileImg from 'assets/coordinator1.jpg';

import { Input } from 'components/Input';
import { Meta } from 'components/Meta';
import { Section } from 'components/Section';
import { Text } from 'components/Text';
import { tokens } from 'components/ThemeProvider/theme';
import { Transition } from 'components/Transition';
import { useFormInput } from 'hooks';
import { useRef, useState } from 'react';
import { cssProps, msToNum, numToMs } from 'utils/style';
import styles from './Team.module.css';
import emailjs from '@emailjs/browser';

// Importing images
import coordinator1 from 'assets/coordinator1.jpg';
import coordinator2 from 'assets/coordinator2.jpg';
import coordinator3 from 'assets/coordinator3.jpg';
import coordinator4 from 'assets/coordinator4.png';

import y21_a from 'assets/y21_a.jpg';
import y21_b from 'assets/y21_b.jpg';
import y21_c from 'assets/y21_c.jpg';
import y21_d from 'assets/y21_d.jpg';

import y20_a from 'assets/y20_a.jpg';
import y20_b from 'assets/y20_b.jpg';
import y20_c from 'assets/y20_c.jpg';
import y20_d from 'assets/y20_d.jpg';

import y19_a from 'assets/empty.png';
import y19_b from 'assets/empty.png';
import y19_c from 'assets/empty.png';
import y19_d from 'assets/empty.png';




import sec_aditya_dum from 'assets/secretaries/aditya_dum.jpg';
import sec_ananya_garg from 'assets/secretaries/ananya_garg.jpg';
import sec_arpit_narayan_singh from 'assets/secretaries/arpit_narayan_singh.jpg';
import sec_arush_jain from 'assets/secretaries/arush_jain.jpg';
import sec_aryaman_singh from 'assets/secretaries/aryaman_singh.jpg';
import sec_bhavya_goel from 'assets/secretaries/bhavya_goel.jpg';
import sec_chhavi_yadav from 'assets/secretaries/chhavi_yadav.jpg';
import sec_ekansh_jain from 'assets/secretaries/ekansh_jain.jpg';
import sec_harshita_sharma from 'assets/secretaries/harshita_sharma.jpg';
import sec_kavya_yadav from 'assets/secretaries/kavya_yadav.jpg';
import sec_khushi_jain from 'assets/secretaries/khushi_jain.jpg';
import sec_krish_shah from 'assets/secretaries/krish_shah.jpg';
import sec_kunj_chaudhary from 'assets/secretaries/kunj_chaudhary.jpg';
import sec_lakshya_kundnani from 'assets/secretaries/lakshya_kundnani.jpg';
import sec_maahin_sethi from 'assets/secretaries/maahin_sethi.jpg';
import sec_nikhil from 'assets/secretaries/nikhil.jpg';
import sec_nilmani_jha from 'assets/secretaries/nilmani_jha.jpg';
import sec_priyanshu from 'assets/secretaries/priyanshu.jpg';
import sec_samkit_jain from 'assets/secretaries/samkit_jain.jpg';
import sec_samyak from 'assets/secretaries/samyak.jpg';
import sec_sathvik_narayanan from 'assets/secretaries/sathvik_narayanan.jpg';
import sec_shreya_gaur from 'assets/secretaries/shreya_gaur.jpg';
import sec_shrihan_mittal from 'assets/secretaries/shrihan_mittal.jpg';
import sec_sreyan_majumder from 'assets/secretaries/sreyan_majumder.jpg';
import sec_srijan_garg from 'assets/secretaries/srijan_garg.jpg';
import sec_srikar_kandula from 'assets/secretaries/srikar_kandula.jpg';
import sec_stuti_jain from 'assets/secretaries/stuti_jain.jpg';
import sec_sumedh_gokavi from 'assets/secretaries/sumedh_gokavi.jpg';
import sec_tulip_khatri from 'assets/secretaries/tulip_khatri.jpg';
import sec_udhav_sharma from 'assets/secretaries/udhav_sharma.jpg';
import sec_vaibhav_maheshwari from 'assets/secretaries/vaibhav_maheshwari.jpg';
import sec_vidilt_krelia from 'assets/secretaries/vidilt_krelia.jpg';
import sec_vivaan_awasthi from 'assets/secretaries/vivaan_awasthi.jpg';

// Array of image sources
const coordinatorImages = [
  { src: coordinator1, alt: 'Naman Sethi', name: 'Naman Sethi' },
  { src: coordinator2, alt: 'Tanush Goel', name: 'Tanush Goel' },
  { src: coordinator3, alt: 'Moni Dutt', name: 'Moni Dutt' },
  { src: coordinator4, alt: 'Rachit Choudhary', name: 'Rachit Choudhary' },
];

const y21Images = [
  { src: y21_a , alt: 'Vishal', name: 'Vishal Himmatsinghka' },
  { src: y21_b, alt: 'Devanshi', name: 'Devanshi Rastogi' },
  { src: y21_c, alt: 'Keshav', name: 'Keshav Raj Gupta' },
  { src: y21_d, alt: 'Shivansh', name: 'Shivansh Gupta' },
];

const y20Images = [
  { src: y20_a , alt: 'Shivam Pandey', name: 'Shivam Pandey' },
  { src: y20_b, alt: 'Sujal Harkut', name: 'Sujal Harkut' },
  { src: y20_c, alt: 'Dakshita Mittal', name: 'Dakshita Mittal' },
  { src: y20_d, alt: 'Aditya Anand', name: 'Aditya Anand' },
];
const y19Images = [
  { src: y19_a , alt: 'Alpha', name: 'Alpha' },
  { src: y19_b, alt: 'Beta', name: 'Beta' },
  { src: y19_c, alt: 'Gamma', name: 'Gamma' },
  { src: y19_d, alt: 'Delta', name: 'Delta' },
];

const secretariesImages = [
  { src: sec_aditya_dum, alt: 'Aditya Dum', name: 'Aditya Dum' },
  { src: sec_ananya_garg, alt: 'Ananya Garg', name: 'Ananya Garg' },
  { src: sec_arpit_narayan_singh, alt: 'Arpit Narayan Singh', name: 'Arpit Narayan Singh' },
  { src: sec_arush_jain, alt: 'Arush Jain', name: 'Arush Jain' },
  { src: sec_aryaman_singh, alt: 'Aryaman Singh', name: 'Aryaman Singh' },
  { src: sec_bhavya_goel, alt: 'Bhavya Goel', name: 'Bhavya Goel' },
  { src: sec_chhavi_yadav, alt: 'Chhavi Yadav', name: 'Chhavi Yadav' },
  { src: sec_ekansh_jain, alt: 'Ekansh Jain', name: 'Ekansh Jain' },
  { src: sec_harshita_sharma, alt: 'Harshita Sharma', name: 'Harshita Sharma' },
  { src: sec_kavya_yadav, alt: 'Kavya Yadav', name: 'Kavya Yadav' },
  { src: sec_khushi_jain, alt: 'Khushi Jain', name: 'Khushi Jain' },
  { src: sec_krish_shah, alt: 'Krish Shah', name: 'Krish Shah' },
  { src: sec_kunj_chaudhary, alt: 'Kunj Chaudhary', name: 'Kunj Chaudhary' },
  { src: sec_lakshya_kundnani, alt: 'Lakshya Kundnani', name: 'Lakshya Kundnani' },
  { src: sec_maahin_sethi, alt: 'Maahin Sethi', name: 'Maahin Sethi' },
  { src: sec_nikhil, alt: 'Nikhil', name: 'Nikhil' },
  { src: sec_nilmani_jha, alt: 'Nilmani Jha', name: 'Nilmani Jha' },
  { src: sec_priyanshu, alt: 'Priyanshu', name: 'Priyanshu' },
  { src: sec_samkit_jain, alt: 'Samkit Jain', name: 'Samkit Jain' },
  { src: sec_samyak, alt: 'Samyak', name: 'Samyak' },
  { src: sec_sathvik_narayanan, alt: 'Sathvik Narayanan', name: 'Sathvik Narayanan' },
  { src: sec_shreya_gaur, alt: 'Shreya Gaur', name: 'Shreya Gaur' },
  { src: sec_shrihan_mittal, alt: 'Shrihan Mittal', name: 'Shrihan Mittal' },
  { src: sec_sreyan_majumder, alt: 'Sreyan Majumder', name: 'Sreyan Majumder' },
  { src: sec_srijan_garg, alt: 'Srijan Garg', name: 'Srijan Garg' },
  { src: sec_srikar_kandula, alt: 'Srikar Kandula', name: 'Srikar Kandula' },
  { src: sec_stuti_jain, alt: 'Stuti Jain', name: 'Stuti Jain' },
  { src: sec_sumedh_gokavi, alt: 'Sumedh Gokavi', name: 'Sumedh Gokavi' },
  { src: sec_tulip_khatri, alt: 'Tulip Khatri', name: 'Tulip Khatri' },
  { src: sec_udhav_sharma, alt: 'Udhav Sharma', name: 'Udhav Sharma' },
  { src: sec_vaibhav_maheshwari, alt: 'Vaibhav Maheshwari', name: 'Vaibhav Maheshwari' },
  { src: sec_vidilt_krelia, alt: 'Vidilt Krelia', name: 'Vidilt Krelia' },
  { src: sec_vivaan_awasthi, alt: 'Vivaan Awasthi', name: 'Vivaan Awasthi' },
];

export const Team = () => {
  const errorRef = useRef();
  const email = useFormInput('');
  const message = useFormInput('');
  const formName = useFormInput('');
  const [sending, setSending] = useState(false);
  const [complete, setComplete] = useState(false);
  const [statusError, setStatusError] = useState('');
  const initDelay = tokens.base.durationS;

  const onSubmit = async event => {
    event.preventDefault();
    setStatusError('');

    if (sending) return;

    try {
      setSending(true);

      emailjs
        .send(
          'service_po9cbo8', // paste your ServiceID here (you'll get one when your service is created).
          'template_lrvecac', // paste your TemplateID here (you'll find it under email templates).
          {
            from_name: formName.value,
            to_name: 'FAC_IITK', // put your name here.
            from_email: email.value,
            to_email: 'prem.kansagra1234@gmail.com', //put your email here.
            message: message.value,
          },
          '4nn9vaVYg9qqQwfZf' //paste your Public Key here. You'll get it in your profile section.
        )
        .then(
          () => {
            // setLoading(false);
            // alert('Thank you. We will get back to you as soon as possible.');
          },
          error => {
            // setLoading(false);
            console.log(error);
            alert('Something went wrong. Please try again.');
          }
        );

      setComplete(true);
      setSending(false);
    } catch (error) {
      setSending(false);
      setStatusError(error.message);
    }
  };

  return (
    <Section className={styles.contact}>
      <Meta
        title="Our Team"
        // description="Send me a message if you’re interested in discussing a project or if you just want to say hi"
      />
      {/* <Transition unmount in={!complete} timeout={1600}>
        {(visible, status) => (
          <form className={styles.form} method="post" onSubmit={onSubmit}>
            <Heading
              className={styles.title}
              data-status={status}
              level={3}
              as="h1"
              style={getDelay(tokens.base.durationXS, initDelay, 0.3)}
            >
              <DecoderText text="Say Hi !" start={status !== 'exited'} delay={300} />
            </Heading>
            <Divider
              className={styles.divider}
              data-status={status}
              style={getDelay(tokens.base.durationXS, initDelay, 0.4)}
            />
            <Input
              required
              className={styles.input}
              data-status={status}
              style={getDelay(tokens.base.durationXS, initDelay)}
              autoComplete="email"
              label="Your Name"
              type="text"
              maxLength={512}
              {...formName}
            />
            <Input
              required
              className={styles.input}
              data-status={status}
              style={getDelay(tokens.base.durationXS, initDelay)}
              autoComplete="email"
              label="Your Email"
              type="email"
              maxLength={512}
              {...email}
            />
            <Input
              required
              multiline
              className={styles.input}
              data-status={status}
              style={getDelay(tokens.base.durationS, initDelay)}
              autoComplete="off"
              label="Message"
              maxLength={4096}
              {...message}
            />
            <Transition in={statusError} timeout={msToNum(tokens.base.durationM)}>
              {errorStatus => (
                <div
                  className={styles.formError}
                  data-status={errorStatus}
                  style={cssProps({
                    height: errorStatus ? errorRef.current?.offsetHeight : 0,
                  })}
                >
                  <div className={styles.formErrorContent} ref={errorRef}>
                    <div className={styles.formErrorMessage}>
                      <Icon className={styles.formErrorIcon} icon="error" />
                      {statusError}
                    </div>
                  </div>
                </div>
              )}
            </Transition>
            <Button
              className={styles.button}
              data-status={status}
              data-sending={sending}
              style={getDelay(tokens.base.durationM, initDelay)}
              disabled={sending}
              loading={sending}
              loadingText="Sending..."
              icon="send"
              type="submit"
            >
              Send message
            </Button>
          </form>
        )}
      </Transition>
      <Transition unmount in={complete}>
        {(visible, status) => (
          <div className={styles.complete} aria-live="polite">
            <Heading
              level={3}
              as="h3"
              className={styles.completeTitle}
              data-status={status}
            >
              Message Sent
            </Heading>
            <Text
              size="l"
              as="p"
              className={styles.completeText}
              data-status={status}
              style={getDelay(tokens.base.durationXS)}
            >
              Thank you. We will get back to you as soon as possible.
            </Text>
            <Button
              secondary
              iconHoverShift
              className={styles.completeButton}
              data-status={status}
              style={getDelay(tokens.base.durationM)}
              href="/"
              icon="chevronRight"
            >
              Back to homepage
            </Button>
          </div>
        )}
      </Transition>
      <Footer className={styles.footer} /> */}

      {/* <Image
        reveal
        delay={100}
        placeholder={profileImgPlaceholder}
        srcSet={[profileImg, profileImgLarge]}
        sizes={`40vw, 480px`}
        alt="Me standing in front of the Torii on Miyajima, an island off the coast of Hiroshima in Japan"
      /> */}
      <Heading className={styles.heading} data-visible={0} level={3} id={0}>
        <DecoderText text="Meet Our Team" start={1} delay={500} />
      </Heading>

      <Heading className={styles.heading} data-visible={0} level={4} id={0}>
        <DecoderText text="Coordinators" start={1} delay={500} />
      </Heading>
      <div className={styles.coordinatorsContainer}>
        {coordinatorImages.map((image, index) => (
          <div key={index}>
            <Image
              key={index}
              reveal
              delay={100}
              placeholder={image.src}
              srcSet={[image.src]}
              sizes="40vw, 480px"
              alt={image.alt}
              className={styles.image}
            />
            <p className={styles.imageName}>{image.name}</p>
          </div>
        ))}
      </div>

      <Heading className={styles.heading} data-visible={0} level={4} id={0}>
        <DecoderText text="Secretaries" start={1} delay={500} />
      </Heading>
      <div className={styles.secretariesContainer}>
        {secretariesImages.map((image, index) => (
          <div key={index}>
            <Image
              key={index}
              reveal
              delay={100}
              placeholder={image.src}
              srcSet={[image.src]}
              sizes="40vw, 480px"
              alt={image.alt}
              className={styles.image}
            />
            <p className={styles.imageName}>{image.name}</p>
          </div>
        ))}
      </div>

      <Heading className={styles.heading} data-visible={0} level={4} id={0}>
        <DecoderText text="Y21 Coordinators" start={1} delay={500} />
      </Heading>
      <div className={styles.secretariesContainer}>
        {y21Images.map((image, index) => (
          <div key={index}>
            <Image
              key={index}
              reveal
              delay={100}
              placeholder={image.src}
              srcSet={[image.src]}
              sizes="40vw, 480px"
              alt={image.alt}
              className={styles.image}
            />
            <p className={styles.imageName}>{image.name}</p>
          </div>
        ))}
      </div>
      <Heading className={styles.heading} data-visible={0} level={4} id={0}>
        <DecoderText text="Y20 Coordinators" start={1} delay={500} />
      </Heading>
      <div className={styles.secretariesContainer}>
        {y20Images.map((image, index) => (
          <div key={index}>
            <Image
              key={index}
              reveal
              delay={100}
              placeholder={image.src}
              srcSet={[image.src]}
              sizes="40vw, 480px"
              alt={image.alt}
              className={styles.image}
            />
            <p className={styles.imageName}>{image.name}</p>
          </div>
        ))}
      </div>
      {/* <Heading className={styles.heading} data-visible={0} level={4} id={0}>
        <DecoderText text="Y19 Coordinators" start={1} delay={500} />
      </Heading>
      <div className={styles.secretariesContainer}>
        {y19Images.map((image, index) => (
          <div key={index}>
            <Image
              key={index}
              reveal
              delay={100}
              placeholder={image.src}
              srcSet={[image.src]}
              sizes="40vw, 480px"
              alt={image.alt}
              className={styles.image}
            />
            <p className={styles.imageName}>{image.name}</p>
          </div>
        ))}
      </div> */}
    </Section>
  );
};

function getStatusError({
  status,
  errorMessage,
  fallback = 'There was a problem with your request',
}) {
  if (status === 200) return false;

  const statuses = {
    500: 'There was a problem with the server, try again later',
    404: 'There was a problem connecting to the server. Make sure you are connected to the internet',
  };

  if (errorMessage) {
    return errorMessage;
  }

  return statuses[status] || fallback;
}

function getDelay(delayMs, offset = numToMs(0), multiplier = 1) {
  const numDelay = msToNum(delayMs) * multiplier;
  return cssProps({ delay: numToMs((msToNum(offset) + numDelay).toFixed(0)) });
}
