import { FooterSection, IconsHanard, FooterText } from './Footer.style';
import { FaLinkedin, FaGithubSquare } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <FooterSection>
        <FooterText>CREATED BY</FooterText>
        <IconsHanard>
          <FooterText>
            <a
              href='https://www.linkedin.com/in/kevin-hanard-275165a5/'
              alt=''
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedin style={{ color: '#FFFFFF' }} />
            </a>
          </FooterText>
          <FooterText>Kevin Hanard</FooterText>
          <FooterText>
            <a
              href='https://github.com/beyondthefruit'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithubSquare style={{ color: '#FFFFFF' }} />
            </a>
          </FooterText>
        </IconsHanard>
        <IconsHanard>
          <FooterText>
            <a
              href='https://www.linkedin.com/in/julia-hanard-332395ab/'
              alt=''
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedin style={{ color: '#FFFFFF' }} />
            </a>
          </FooterText>
          <FooterText>Julia Hanard</FooterText>
          <FooterText>
            <a
              href='https://github.com/julianoiret'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithubSquare style={{ color: '#FFFFFF' }} />
            </a>
          </FooterText>
        </IconsHanard>
      </FooterSection>
    </>
  );
};

export default Footer;
