import React, { FC } from 'react';
import styles from './Connection.module.scss';
import { useDataCustomHook } from '../../Data/data';


interface ConnectionProps {}

const Connection: FC<ConnectionProps> = () => {
  const {sidebar: {connections}} = useDataCustomHook();


  return(
  <div className={styles.Connection} data-testid="Connection">
    {connections.map((el) => <a href={el.link} key={el.link} target="_blank" rel="noreferrer">
      <span className="skill">{el.icon}</span>
    </a>)}
  </div>
)};

export default Connection;
