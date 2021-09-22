import React from 'react';
import styles from './footer.module.scss';
import { Link } from 'react-router-dom';
import FooterLogo from '../../../assets/images/mondo_green_logo.png';
import { Texts } from '../../../resources/texts.enum';
import { Mail } from '../../../resources/link.enum';
import { RoutingPaths } from '../../../resources/routing_paths.enum';

export const Footer = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.upperBlock}>
        <div>
          <div className={styles.logoWrapper}>
            <img src={FooterLogo} alt="logo" className={styles.logo} />
          </div>
          <p className={styles.motto}>{Texts.FOOTER_MOTTO_TEXT}</p>
        </div>
        <div className={styles.navBlock}>
          <p className={styles.navTitle}>Services</p>
          <ul>
            <li>
              <Link to={RoutingPaths.HOME}>home</Link>
            </li>
            <li>
              <Link to={RoutingPaths.STAKING}>staking</Link>
            </li>
            <li>
              <Link to={RoutingPaths.LIQUIDITY}>liquidity mining</Link>
            </li>
          </ul>
        </div>
        <div className={styles.navBlock}>
          <p className={styles.navTitle}>Follow us</p>
          <ul>
            <li>
              <a href="https://t.me/mondocoin" rel="noreferrer" target="_blank" className={styles.socialLinks}>
                telegram
              </a>
            </li>
            <li>
              <a href="https://twitter.com/MondoCoin" rel="noreferrer" target="_blank" className={styles.socialLinks}>
                twitter
              </a>
            </li>
            <li>
              <a
                href="https://medium.com/mondo-community-coin"
                rel="noreferrer"
                target="_blank"
                className={styles.socialLinks}
              >
                medium
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.navBlock}>
          <p className={styles.navTitle}>Contact us</p>
          <a href={`mailto:${Mail.MAIL_TO}`} className={styles.navEmail}>
            emailaddress@mail.com
          </a>
        </div>
      </div>

      <div className={styles.bottomBlock}>
        <div className={styles.bottomText}>© Mondo Green GmbH 2021. All right reserved</div>
        <div className={styles.termsAndPrivacy}>
          <ul>
            <li>
              <Link to={RoutingPaths.IMPRINT} className={styles.bottomLink}>
                imprint
              </Link>
            </li>
            <li>
              <Link to={RoutingPaths.PRIVACY} className={styles.bottomLink}>
                privacy
              </Link>
            </li>
            <li>
              <Link to={RoutingPaths.TERMS} className={styles.bottomLink}>
                terms
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
