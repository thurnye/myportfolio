import React, { FC } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from './Connection.module.scss';
interface ConnectionProps {}

const Connection: FC<ConnectionProps> = () => (
  <div className={styles.Connection} data-testid="Connection">
    <a href="https://github.com/thurnye">
      <span className="skill"><FontAwesomeIcon icon={['fab', 'github']} /></span>
    </a>

    <a href="mailto:danthurnye@gmail.com">
      <span className="skill">
        <FontAwesomeIcon icon={['fas', 'envelope']} />
      </span>
    </a>

    <a href="https://www.linkedin.com/in/danieltonyegudi/">
      <span className="skill"><FontAwesomeIcon icon={['fab', 'linkedin']} /></span>
    </a>

    <a href="https://twitter.com/THURNYE">
      <span className="skill"><FontAwesomeIcon icon={['fab', 'twitter']} /></span>
    </a>
    <a href="https://docs.google.com/document/d/1RQxexr20rhBa_ZSb_L6q6FMxIodg-5gW3XMmYM4X0bI/edit#heading=h.gjdgxs" target="_blank" rel="noreferrer">
      <span className="skill"><FontAwesomeIcon icon={['fas', 'download']} /></span>
    </a>
  </div>
);

export default Connection;
