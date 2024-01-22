import React, { FC } from 'react';
import styles from './CompCode.module.scss';
import Typed from 'react-typed';
// for blinking cursor
import 'react-typed/dist/animatedCursor.css';

interface CompCodeProps {
  typed: string[]
}

const CompCode: FC<CompCodeProps> = (props) => (
  <div className={styles.CompCode} data-testid="CompCode">
    &lt;<span className={styles.code}>code</span>&gt;{' '}
      <Typed
        loop
        typeSpeed={90}
        backSpeed={25}
        strings={props.typed}
        smartBackspace
        shuffle={false}
        backDelay={1}
        fadeOut={false}
        fadeOutDelay={100}
        loopCount={0}
        showCursor
        cursorChar='|'
      />{' '}
      &lt;/<span className={styles.code}>code</span>&gt;
  </div>
);

export default CompCode;
