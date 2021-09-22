import React, { FC, useState } from 'react';
import { contract } from '../../web3/contract-api';
import { Layout } from '../layout/layout_parts/layout';
import { ComingSoon } from './coming_soon/coming_soon';
import styles from './home_page.module.scss';
import { LPInformation } from './lp_information/lp_information';
import { LPInfoStaking } from './lp_information_staking/lp_information_staking';
import { PoolDashboardCard } from './lp_pool_dashboard_card/lp_pool_dashboard_card';

export const HomePage = () => {
  return (
    <Layout>
      <section className={styles.wrapper}>
        <LPInformation />
        <LPInfoStaking mobile />
        <LPInfoStaking />

        <PoolDashboardCard />
        <LPInfoStaking mining />
        <ComingSoon />
      </section>
    </Layout>
  );
};
