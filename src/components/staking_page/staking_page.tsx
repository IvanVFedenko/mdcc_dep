import React, { FC } from 'react';
import { Layout } from '../layout/layout_parts/layout';
import styles from './staking_page.module.scss';

export const StakingPage: FC = () => {
  return (
    <Layout>
      <section className={styles.wrapper}>Staking Page</section>
    </Layout>
  );
};
