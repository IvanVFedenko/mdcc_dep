import React, { FC, useEffect } from 'react';
import { Layout } from '../layout/layout_parts/layout';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import styles from './agreements.module.scss';
import { RoutingPaths } from '../../resources/routing_paths.enum';
import { RootState } from '../../redux/store';

export const Agreements: FC = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const selectedLanguage = useSelector((state: RootState) => state.language);
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    selectedLanguage.language === 'Deutsch' ? changeLanguage('de') : changeLanguage('en');
  }, [selectedLanguage.language]);

  return (
    <Layout>
      <section className={styles.wrapper}>
        {pathname === RoutingPaths.IMPRINT && (
          <>
            <p className={styles.title}>{t('imprint.Legal.title')}</p>
            <p className={styles.mainText}>{t('imprint.Legal.text')}</p>

            <p className={styles.title}>{t('imprint.Copyright.title')}</p>
            <p className={styles.mainText}>{t('imprint.Copyright.text1')}</p>
            <p className={styles.mainText}>{t('imprint.Copyright.text2')}</p>

            <p className={styles.title}>{t('imprint.Links.title')}</p>
            <p className={styles.mainText}>{t('Links.text')}</p>

            <p className={styles.title}>{t('imprint.Promotional.title')}</p>
            <p className={styles.mainText}>{t('imprint.Promotional.text')}</p>
          </>
        )}

        {pathname === RoutingPaths.PRIVACY && (
          <>
            <>
              <p className={styles.title}>{t('Privacy.Introduction.title')}</p>
              <p className={styles.mainText}>{t('Privacy.Introduction.text1')}</p>
              <p className={styles.mainText}>{t('Privacy.Introduction.text2')}</p>
              <p className={styles.mainText}>{t('Privacy.Introduction.text3')}</p>
            </>
            <>
              <p className={styles.title}>{t('Privacy.Controller.title')}</p>
              <p className={styles.mainText}>{t('Privacy.Controller.text1')}</p>
              <p className={styles.mainText}>{t('Privacy.Controller.text2')}</p>
              <p className={styles.mainText}>{t('Privacy.Controller.text3')}</p>
              <p className={styles.mainText}>{t('Privacy.Controller.text4')}</p>
            </>
            <>
              <p className={styles.title}>{t('Privacy.Protection.title')}</p>
              <p className={styles.mainText}>{t('Privacy.Protection.text1')}</p>
              <p className={styles.mainText}>{t('Privacy.Protection.text2')}</p>
              <p className={styles.mainText}>{t('Privacy.Protection.text3')}</p>
              <p className={styles.mainText}>{t('Privacy.Protection.text4')}</p>
              <p className={styles.mainText}>{t('Privacy.Protection.text5')}</p>
            </>

            <>
              <p className={styles.title}>{t('Privacy.Definitions.title')}</p>
              <p className={styles.mainText}>{t('Privacy.Definitions.text1')}</p>
              <p className={styles.mainText}>{t('Privacy.Definitions.text2')}</p>

              <p className={styles.subTitle}>{t('Privacy.Definitions.terms.title1')}</p>
              <p className={styles.subText}>{t('Privacy.Definitions.terms.text1')}</p>

              <p className={styles.subTitle}>{t('Privacy.Definitions.terms.title2')}</p>
              <p className={styles.subText}>{t('Privacy.Definitions.terms.text2')}</p>

              <p className={styles.subTitle}>{t('Privacy.Definitions.terms.title3')}</p>
              <p className={styles.subText}>{t('Privacy.Definitions.terms.text3')}</p>

              <p className={styles.subTitle}>{t('Privacy.Definitions.terms.title4')}</p>
              <p className={styles.subText}>{t('Privacy.Definitions.terms.text4')}</p>

              <p className={styles.subTitle}>{t('Privacy.Definitions.terms.title5')}</p>
              <p className={styles.subText}>{t('Privacy.Definitions.terms.text5')}</p>

              <p className={styles.subTitle}>{t('Privacy.Definitions.terms.title6')}</p>
              <p className={styles.subText}>{t('Privacy.Definitions.terms.text6')}</p>

              <p className={styles.subTitle}>{t('Privacy.Definitions.terms.title7')}</p>
              <p className={styles.subText}>{t('Privacy.Definitions.terms.text7')}</p>

              <p className={styles.subTitle}>{t('Privacy.Definitions.terms.title8')}</p>
              <p className={styles.subText}>{t('Privacy.Definitions.terms.text8')}</p>

              <p className={styles.subTitle}>{t('Privacy.Definitions.terms.title9')}</p>
              <p className={styles.subText}>{t('Privacy.Definitions.terms.text9')}</p>

              <p className={styles.subTitle}>{t('Privacy.Definitions.terms.title10')}</p>
              <p className={styles.subText}>{t('Privacy.Definitions.terms.text10')}</p>
            </>

            <>
              <p className={styles.title}>{t('Privacy.basis.title')}</p>
              <p className={styles.mainText}>{t('Privacy.basis.text1')}</p>
              <p className={styles.mainText}>{t('Privacy.basis.text2')}</p>
              <p className={styles.mainText}>{t('Privacy.basis.text3')}</p>
              <p className={styles.mainText}>{t('Privacy.basis.text4')}</p>
              <p className={styles.mainText}>{t('Privacy.basis.text5')}</p>
            </>

            <>
              <p className={styles.title}>{t('Privacy.Technology.title')}</p>
              <p className={styles.subTitle}>{t('Privacy.Technology.title2')}</p>
              <p className={styles.subText}>{t('Privacy.Technology.text1')}</p>
              <p className={styles.subText}>{t('Privacy.Technology.text2')}</p>
              <p className={styles.subTitle}>{t('Privacy.Technology.title3')}</p>
              <p className={styles.subText}>{t('Privacy.Technology.text3')}</p>
              <p className={styles.subText}>{t('Privacy.Technology.text4')}</p>
              <p className={styles.subText}>{t('Privacy.Technology.text5')}</p>
            </>

            <>
              <p className={styles.title}>{t('Privacy.Cookies.title1')}</p>
              <p className={styles.subTitle}>{t('Privacy.Cookies.title2')}</p>
              <p className={styles.subText}>{t('Privacy.Cookies.text1')}</p>
              <p className={styles.subText}>{t('Privacy.Cookies.text2')}</p>

              <p className={styles.subText}>{t('Privacy.Cookies.text3')}</p>
              <p className={styles.subText}>{t('Privacy.Cookies.text4')}</p>
              <p className={styles.subText}>{t('Privacy.Cookies.text5')}</p>

              <p className={styles.subTitle}>{t('Privacy.Cookies.title3')}</p>
              <p className={styles.subText}>{t('Privacy.Cookies.text6')}</p>
              <p className={styles.subText}>{t('Privacy.Cookies.text7')}</p>
            </>

            <>
              <p className={styles.title}>{t('Privacy.rights.title1')}</p>
              <p className={styles.subTitle}>{t('Privacy.rights.title2')}</p>
              <p className={styles.subText}>{t('Privacy.rights.text1')}</p>

              <p className={styles.subTitle}>{t('Privacy.rights.title3')}</p>
              <p className={styles.subText}>{t('Privacy.rights.text2')}</p>

              <p className={styles.subTitle}>{t('Privacy.rights.title4')}</p>
              <p className={styles.subText}>{t('Privacy.rights.text3')}</p>

              <p className={styles.subTitle}>{t('Privacy.rights.title5')}</p>
              <p className={styles.subText}>{t('Privacy.rights.text4')}</p>

              <p className={styles.subTitle}>{t('Privacy.rights.title6')}</p>
              <p className={styles.subText}>{t('Privacy.rights.text5')}</p>

              <p className={styles.subTitle}>{t('Privacy.rights.title7')}</p>
              <p className={styles.subText}>{t('Privacy.rights.text6')}</p>

              <p className={styles.subTitle}>{t('Privacy.rights.title8')}</p>
              <p className={styles.subText}>{t('Privacy.rights.text7')}</p>
              <p className={styles.subText}>{t('Privacy.rights.text8')}</p>
              <p className={styles.subText}>{t('Privacy.rights.text9')}</p>
              <p className={styles.subText}>{t('Privacy.rights.text10')}</p>
              <p className={styles.subText}>{t('Privacy.rights.text11')}</p>
              <p className={styles.subText}>{t('Privacy.rights.text12')}</p>
              <p className={styles.subText}>{t('Privacy.rights.text13')}</p>

              <p className={styles.subTitle}>{t('Privacy.rights.title9')}</p>
              <p className={styles.subText}>{t('Privacy.rights.text14')}</p>

              <p className={styles.subTitle}>{t('Privacy.rights.title10')}</p>
              <p className={styles.subText}>{t('Privacy.rights.text15')}</p>
            </>

            <>
              <p className={styles.title}>{t('Privacy.Routine.title')}</p>
              <p className={styles.mainText}>{t('Privacy.Routine.text1')}</p>
              <p className={styles.mainText}>{t('Privacy.Routine.text2')}</p>
            </>

            <>
              <p className={styles.title}>{t('Privacy.Duration.title')}</p>
              <p className={styles.mainText}>{t('Privacy.Duration.text1')}</p>
            </>

            <>
              <p className={styles.title}>{t('Privacy.Up-to-dateness.title')}</p>
              <p className={styles.mainText}>{t('Privacy.Up-to-dateness.text1')}</p>
              <p className={styles.mainText}>{t('Privacy.Up-to-dateness.text2')}</p>
            </>
          </>
        )}
        {pathname === RoutingPaths.TERMS && 'terms'}
      </section>
    </Layout>
  );
};
