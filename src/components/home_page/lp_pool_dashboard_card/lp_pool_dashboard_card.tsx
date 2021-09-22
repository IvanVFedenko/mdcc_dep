import React, { FC } from 'react';
import { Texts } from '../../../resources/texts.enum';
import { Link } from 'react-router-dom';
import styles from './lp_pool_dashboard_card.module.scss';

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import Dash_Logo from '../../../assets/icons/dashboard_logo.svg';
import Black_Icon from '../../../assets/icons/black_icon.svg';
import Green_Icon from '../../../assets/icons/green_icon.svg';
import Beige_Icon from '../../../assets/icons/beige_icon.svg';
import { RoutingPaths } from '../../../resources/routing_paths.enum';

const build_styles = buildStyles({
  strokeLinecap: 'butt',
  textColor: '#64a640',
  pathColor: '#64a640',
  trailColor: '#c6b5a4',
});

export const PoolDashboardCard: FC = () => {
  const percentage = 40;
  return (
    <section className={styles.wrapper}>
      <div className={styles.upperBlock}>
        <p className={styles.dashName}>{Texts.POOL_DASH_NAME}</p>
        <img src={Dash_Logo} alt="icon" className={styles.icon} />
      </div>
      <div className={styles.bottomBlock}>
        <div className={styles.leftBlock}>
          <div className={styles.kpiWrapper}>
            <img src={Black_Icon} alt="icon" className={styles.kpiIcon} />
            <div className={styles.dataWrapper}>
              <p className={styles.title}>APY</p>
              <p className={styles.data}>25.89%</p>
            </div>
          </div>
          <div className={styles.kpiWrapper}>
            <img src={Black_Icon} alt="icon" className={styles.kpiIcon} />
            <div className={styles.dataWrapper}>
              <p className={styles.title}>Rewards alle</p>
              <p className={styles.data}>24h</p>
            </div>
          </div>
          <div className={styles.kpiWrapper}>
            <img src={Black_Icon} alt="icon" className={styles.kpiIcon} />
            <div className={styles.dataWrapper}>
              <p className={styles.title}>24/7 Access</p>
              <p className={styles.data}>Pull your rewards at any time</p>
            </div>
          </div>
        </div>
        <div className={styles.centralBlock}>
          <div className={styles.progress}>
            <CircularProgressbar value={percentage} text={`${percentage}%`} counterClockwise styles={build_styles} />
          </div>
          <div className={styles.progressDataContainer}>
            <div className={styles.kpiWrapper}>
              <img src={Green_Icon} alt="icon" className={styles.kpiIcon} />
              <div className={styles.dataWrapper}>
                <p className={styles.title} style={{ marginBottom: '0.5rem' }}>
                  {'Verfügbare\nStaking Anteile'}
                </p>
                <p className={styles.data}>12.059.204 MNDCC</p>
              </div>
            </div>
            <div className={styles.kpiWrapper}>
              <img src={Beige_Icon} alt="icon" className={styles.kpiIcon} />
              <div className={styles.dataWrapper}>
                <p className={styles.title} style={{ marginBottom: '0.5rem' }}>
                  {'Gesamtanzahl an\nStaking Anteilen'}
                </p>
                <p className={styles.data}>111.059.204 MNDCC</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.rightBlock}>
          <Link to={RoutingPaths.STAKING}>
            <div className={styles.scrollButton}>
              <p>buy stake</p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};
