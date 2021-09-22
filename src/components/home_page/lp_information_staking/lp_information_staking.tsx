import React, { FC } from 'react';
import styles from './lp_information_staking.module.scss';
import Coin from '../../../assets/images/coin_image.png';
import Ethereum_Coin from '../../../assets/images/ethereum_coin.png';
import Icon from '../../../assets/icons/human_icon.png';
import { Texts } from '../../../resources/texts.enum';
import cn from 'classnames';

interface Props {
  mining?: boolean;
  mobile?: boolean;
}

export const LPInfoStaking: FC<Props> = ({ mining, mobile }) => {
  return (
    <>
      {!mobile && (
        <section className={cn(styles.wrapper)}>
          <div className={cn(styles.topLine)}></div>
          <div className={styles.bottomLine}></div>

          <img src={Icon} alt="icon" className={cn(styles.icon)} />
          <div className={styles.infoBlock}>
            <p
              className={cn(styles.title, { [styles.marginTitle]: !mining })}
              style={mining ? { whiteSpace: 'pre-wrap' } : {}}
            >
              {mining ? Texts.LP_INFORMATION_MINING_TITLE : Texts.LP_INFORMATION_STAKING_TITLE}
            </p>
            <p className={styles.mainText}>
              {mining ? Texts.LP_INFORMATION_MINING_TEXT : Texts.LP_INFORMATION_STAKING_TEXT}
            </p>
          </div>
          <div className={cn(styles.imageBlock)}>
            <img src={mining ? Ethereum_Coin : Coin} alt="coin_image" />
          </div>
        </section>
      )}

      {mobile && (
        <section className={cn(styles.wrapperMob)}>
          <div className={cn(styles.topLine)}></div>
          <div className={styles.bottomLine}></div>
          <img src={Icon} alt="icon" className={cn(styles.icon)} />
          <div className={styles.infoBlock}>
            <p className={styles.mainText}>
              {mining ? Texts.LP_INFORMATION_MINING_TEXT : Texts.LP_INFORMATION_STAKING_TEXT}
            </p>
          </div>
        </section>
      )}
    </>
  );
};
