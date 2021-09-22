import React, { FC } from 'react';
import styles from './coming_soon.module.scss';
import Icon from '../../../assets/icons/human_icon.png';

export const ComingSoon: FC = () => {
  return (
    <section className={styles.wrapper}>
      <img src={Icon} alt="icon" className={styles.icon} />
      <p className={styles.text}>Coming Soon</p>
    </section>
  );
};
