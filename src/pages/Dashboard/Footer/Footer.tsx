import React, { FC } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Box from '@mui/material/Box';
import styles from './Footer.module.scss';

interface FooterProps {}

const Footer: FC<FooterProps> = () => (
  <Box className={styles.Footer} data-testid="Footer">
    <a href="https://github.com/thurnye">
      <span className="skill"><FontAwesomeIcon icon={['fab', 'github']} /></span>
    </a>

    <a href="mailto:danthurnye@gmail.com">
      <i className="fa fa-envelope"></i>
    </a>

    <a href="https://www.linkedin.com/in/danieltonyegudi/">
      <span className="skill"><FontAwesomeIcon icon={['fab', 'linkedin']} /></span>
    </a>

    <a href="https://twitter.com/THURNYE">
      <span className="skill"><FontAwesomeIcon icon={['fab', 'twitter']} /></span>
    </a>
    <a href="https://docs.google.com/document/d/1RQxexr20rhBa_ZSb_L6q6FMxIodg-5gW3XMmYM4X0bI/edit#heading=h.gjdgxs" target="_blank" rel="noreferrer">
      <span className="skill"><i className="fa-solid fa-file-arrow-down"></i></span>
    </a>
  </Box>
);

export default Footer;
