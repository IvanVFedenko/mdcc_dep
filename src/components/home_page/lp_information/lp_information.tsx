import React, { FC } from 'react';
import styles from './lp_information.module.scss';
import { Texts } from '../../../resources/texts.enum';
import { Link } from 'react-router-dom';
import Video from '../../../assets/video/test_video.mp4';
import { RoutingPaths } from '../../../resources/routing_paths.enum';

export const LPInformation: FC = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.hidden} id="lp_info"></div>
      <div className={styles.infoBlock}>
        <div className={styles.textBlock}>
          <p className={styles.title}>{Texts.LP_INFORMATION_TITLE}</p>
          <p className={styles.mainText}>{Texts.LP_INFORMATION_TEXT}</p>
        </div>
        <div className={styles.videoBlock}>
          <video width="100%" height="100%" loop autoPlay muted>
            <source src={Video} type="video/mp4" />
          </video>
        </div>
      </div>
      <div className={styles.buttonBlock}>
        <div className={styles.redirectButton}>
          <Link to={RoutingPaths.STAKING}>start now</Link>
        </div>
      </div>
    </section>
  );
};
