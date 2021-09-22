/* eslint-disable no-useless-concat */
import React, { FC, useEffect } from 'react';
import styles from './header.module.scss';
import Particles from 'react-particles-js';
import { NavLink, useLocation } from 'react-router-dom';
import { HeaderLeftPanelLinks } from '../../../resources/link.enum';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Logo from '../../../assets/images/logo.svg';
import GreenImage from '../../../assets/images/green_image.png';
import CoinImage from '../../../assets/images/coin_image.png';
import { Texts } from '../../../resources/texts.enum';
import { RoutingPaths } from '../../../resources/routing_paths.enum';
import { particles_params } from '../../../resources/particles.params';

import { set_shows } from '../../../redux/actions/actions';
import { RootState } from '../../../redux/store';

export const Header: FC = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const dispatch = useDispatch();
  const selectedLanguage = useSelector((state: RootState) => state.language);

  const setLanguage = (language: string) => {
    dispatch(set_shows(language));
  };

  useEffect(() => {
    selectedLanguage.language === 'Deutsch' ? changeLanguage('de') : changeLanguage('en');
  }, [selectedLanguage.language]);

  const routsPaths: string[] = [RoutingPaths.IMPRINT, RoutingPaths.PRIVACY, RoutingPaths.TERMS];

  return (
    <section className={styles.wrapper}>
      <div className={styles.tsparticlesContainer}>
        <Particles params={particles_params} />
      </div>
      {pathname === RoutingPaths.HOME && (
        <>
          <img src={GreenImage} alt="img" className={styles.greenImage} />
          <div
            className={styles.scrollButton}
            onClick={() => {
              document.getElementById('lp_info')!.scrollIntoView({ block: 'start', behavior: 'smooth' });
            }}
          >
            <p>start now</p>
          </div>
        </>
      )}

      {pathname !== RoutingPaths.HOME && (
        <>
          <img src={CoinImage} alt="img" className={styles.coinImage} />
          <div className={styles.upperLine}></div>
          <div className={styles.bottomLine}></div>
          <div className={styles.textBlock}>
            {pathname === RoutingPaths.STAKING && (
              <>
                <p className={styles.title}>{'Staking\nmit MNDCC'}</p>
                <p className={styles.mainText}>{Texts.STAKING_HEADER_TITLE}</p>
              </>
            )}
            {routsPaths.includes(pathname) && (
              <>
                <p className={styles.title} style={{ textTransform: 'capitalize' }}>
                  {pathname === RoutingPaths.PRIVACY
                    ? 'Data Protection'
                    : pathname === RoutingPaths.TERMS
                    ? 'Terms & Conditions'
                    : pathname.slice(1)}
                </p>
                <p className={styles.mainText}>{t('headerText.agreements.address')}</p>
                <p className={styles.mainText} style={{ marginBottom: 0 }}>
                  {t('headerText.agreements.role')}
                </p>
                <p className={styles.mainText} style={{ marginTop: 0 }}>
                  {t('headerText.agreements.name')}
                </p>
                <p className={styles.mainText}>{t('headerText.agreements.registration')}</p>
                <p className={styles.mainText}>{t('headerText.agreements.email')}</p>
              </>
            )}
          </div>
        </>
      )}
      <img src={Logo} className={styles.headerLogo} alt="logo" />
      <nav className={styles.navigation}>
        <ul>
          <li>
            <NavLink exact to={RoutingPaths.HOME} activeClassName={styles.selected}>
              home
            </NavLink>
          </li>
          <li>
            <NavLink exact to={RoutingPaths.STAKING} activeClassName={styles.selected}>
              staking
            </NavLink>
          </li>
          <li>
            <NavLink exact to={RoutingPaths.LIQUIDITY} activeClassName={styles.selected}>
              liquidity
            </NavLink>
          </li>
        </ul>

        <select value={selectedLanguage.language} onChange={event => setLanguage(event.target.value)}>
          <option>Deutsch</option>
          <option>English</option>
        </select>
      </nav>
      <section className={styles.coloredBlock}>
        <div className={styles.leftBlock}>
          <div className={styles.line}></div>
          <p className={styles.visitUsText}>visit us</p>
          <a className={styles.a3} href={HeaderLeftPanelLinks.MONDO_GUIDE} rel="noreferrer" target="_blank">
            mondo.guide
          </a>
          <a className={styles.a2} href={HeaderLeftPanelLinks.MONDO_GATE} rel="noreferrer" target="_blank">
            mondo.gate
          </a>
          <a className={styles.a1} href={HeaderLeftPanelLinks.MONDO_COIN} rel="noreferrer" target="_blank">
            mondo.coin
          </a>
        </div>
      </section>
    </section>
  );
};
